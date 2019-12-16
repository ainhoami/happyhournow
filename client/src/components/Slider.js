// Correct Code

import React, { useState, useEffect } from "react"
import Coverflow from "react-coverflow"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import { useUsers, useCompanies, useLiked } from "../hooks"
import { filterBars } from "../redux/ducks/users/"
import "../styles/Slider.css"
// import { start } from "repl"


function Slider(props) {
  const { users, filter, usersS } = useUsers() //all the companies
  // const comp = props.match.params.id

  const [time, setTime] = useState("")
  const [search, setSearch] = useState("")

  var d = new Date()
  var hr = d.getHours()
  const fn = function() {} // slider library

  // useEffect(() => {
  //   filterBars(val, search, users)
  // }, [val, search, users])

  function handleClick(e) {
    e.preventDefault()
    // props.history.push("/CompanyPage/")
    // je ako hocemo da prenesemo data na bilo koju komponentu . u ovom slucaju je CompanyPage. a + liked je data koju prenosimo tamo
  }


  // useEffect(() => {
  //   filterBars
  // }, [val, search])
  //  const thecompany = companies.filter(e => e.companyname == comp)
  const newTime = users.filter(p => time >= p.starthour && time <= p.endhour)
  const newSearch = users.filter(p => p.companyname.toLowerCase() == search)

  // const newerArray = newArray.filter(i => i.name === SVGPathSegCurve)
  // console.log(newArray)
  return (
    <div className="sliderW">
      {/* <p>
        Check Your Liked List Here:{" "}
        <Link to="/liked">
          {" "}
          <Icon icon="heart" />
        </Link>
      </p> */}
      {/* // onChange={e => filter(e.target.value)}  */}
      {/* // ovde prosledjujemo e.target.value u setVal() i to je sad u stvari val  */}
      {/* // e.target.value je u stvari value bilo koja od 00 do 23 koji prenosimo preko setVal u val i komperujemo je sa starthour u filter i prenosimo u newArray */}

      <label>Select Happy Hour Time </label>
      <select className="dropDown" onChange={e => setTime(e.target.value)}>
        <option value=""> Select</option>
        <option value="00">12:00 am</option>
        <option value="01">01:00 am</option>
        <option value="02">02:00 am</option>
        <option value="03">03:00 am</option>
        <option value="04">04:00 am</option>
        <option value="05">05:00 am</option>
        <option value="06">06:00 am</option>
        <option value="07">07:00 am</option>
        <option value="08">08:00 am</option>
        <option value="09">09:00 am</option>
        <option value="10">10:00 am</option>
        <option value="11">11:00 am</option>
        <option value="12">12:00 pm</option>
        <option value="13">01:00 pm</option>
        <option value="14">02:00 pm</option>
        <option value="15">03:00 pm</option>
        <option value="16">04:00 pm</option>
        <option value="17">05:00 pm</option>
        <option value="18">06:00 pm</option>
        <option value="19">07:00 pm</option>
        <option value="20">08:00 pm</option>
        <option value="21">09:00 pm</option>
        <option value="22">10:00 pm</option>
        <option value="23">11:00 pm</option>
      </select>
      {/* // ovde prosledjujemo hr u setVal() i to je sad u stvari val  koji je jednak sa data koji komperujemo u ovom slucaju starthour gore u filter */}
      <button className="currentHH" onClick={e => setTime(hr)}>
        happy hour now
      </button>
      <input
        className="searchBar"
        placeholder="Search Company Name"
        type="text"
        onChange={e => setSearch(e.target.value)}
      />
      {newSearch.map((user, i) => (
        <Link to={`/SingleViewPage/${user.id}`}>
          {user.companyname}

          <img
            key={i}
            className="slidePics"
            src={user.picture}
            height={100}
            alt={
              <a className="sliderImg" href={user.website}>
                {user.companyname}
              </a>
            }
          />
        </Link>
      ))}
      <div>
        <Coverflow
          width="960"
          height="1000"
          displayQuantityOfSide={2}
          navigation={false}
          // enableScroll={false}
          // enableHeading={true}
          // infiniteScroll={true}
          clickable={true}
          active={5}

          // media={{
          //   "@media (max-width: 900px)": {
          //     // width: "600px"
          //     // height: "300px"
          //   },
          //   "@media (min-width: 900px)": {
          //     // width: "960px"
          //     // height: "800px"
          //   }
          // }}
        >
          {/* // ternary operator // {newArray.length === 0 ? "" : ""} // if and else na istoj liniji u ovom slucaju je prvi map ili drugi */}
          {newTime.length === 0
            ? users.map((user, i) => (
                <img
                  key={i}
                  className="slidePics"
                  src={user.picture}
                  height={450}
                  alt={
                    <a className="sliderImg" href={user.website}>
                      {user.companyname}
                    </a>
                  }
                />
              ))
            : newTime.map((user, i) => (
                <img
                  key={i}
                  className="slidePics"
                  src={user.picture}
                  height={450}
                  alt={
                    // <a className="sliderImg" href={user.website}>
                    //   {user.companyname}
                    // </a>

                  <Link to ={`/SingleViewPage/${user.id}`}>{user.companyname}</Link>
                  }
                />
              ))}
          {/* {newTime.map((user, i) => (
            <img
              key={i}
              className="slidePics"
              src={user.picture}
              height={450}
              alt={
                <a className="sliderImg" href={user.website}>
                  {user.companyname}
                </a>
              }
            />
          ))} */}
        </Coverflow>
      </div>
    </div>
  )
}
export default Slider

// import React, { useState } from "react"
// import Coverflow from "react-coverflow"
// import { Link } from "react-router-dom"
// import Icon from "../lib/Icon"
// import { useUsers, useCompanies, useLiked } from "../hooks"

// import Radium, { Style, StyleRoot } from "radium"
// import { set } from "date-fns"

// function Slider() {
//   const { filteredUsers, filterBars, users } = useUsers()

//   // const { companyname } = useCompanies()
//   // const { liked } = useLiked()

//   const [search, setSearch] = useState("")
//   const [val, setVal] = useState("")

//   var d = new Date()
//   var hr = d.getHours()

//   const fn = function() {}

//   function handleClick(e, liked) {
//     e.preventDefault()
//     // props.history.push("/CompanyPage/" + liked)   je ako hocemo da prenesemo data na bilo koju komponentu . u ovom slucaju je CompanyPage. a + liked je data koju prenosimo tamo
//   }

//   function handleSearch(e) {
//     setSearch(e.target.value)
//     filterBars({
//       search,
//       val
//     })
//   }

//   function handleVal(e) {
//     setVal(e.target.value)
//     filterBars({
//       search,
//       val
//     })
//   }

//   // const newArray = users.filter(p => p.starthour == val)
//   // const newSearch = users.filter(c => c.companyname == search)

//   // console.log(newSearch, "aaa")
//   // console.log(newArray, "ppp")
//   return (
//     <div className="sliderW">
//       {/* <p>
//         Check Your Liked List Here:{" "}
//         <Link to="/liked">
//           {" "}
//           <Icon icon="heart" />
//         </Link>
//       </p> */}

//       {/* // onChange={e => filter(e.target.value)}  */}

//       <select onChange={handleVal}>
//         <option value="default"> Select</option>
//         <option value="00">12:00 am</option>
//         <option value="01">01:00 am</option>
//         <option value="02">02:00 am</option>
//         <option value="03">03:00 am</option>
//         <option value="04">04:00 am</option>
//         <option value="05">05:00 am</option>
//         <option value="06">06:00 am</option>
//         <option value="07">07:00 am</option>
//         <option value="08">08:00 am</option>
//         <option value="09">09:00 am</option>
//         <option value="10">10:00 am</option>
//         <option value="11">11:00 am</option>
//         <option value="12">12:00 pm</option>
//         <option value="13">01:00 pm</option>
//         <option value="14">02:00 pm</option>
//         <option value="15">03:00 pm</option>
//         <option value="16">04:00 pm</option>
//         <option value="17">05:00 pm</option>
//         <option value="18">06:00 pm</option>
//         <option value="19">07:00 pm</option>
//         <option value="20">08:00 pm</option>
//         <option value="21">09:00 pm</option>
//         <option value="22">10:00 pm</option>
//         <option value="23">11:00 pm</option>
//       </select>

//       <button onClick={e => setVal(hr)}>happy hour now</button>

//       <form>
//         <input type="text" onChange={handleSearch} />
//       </form>

//       <div>
//         <Coverflow
//           width="960"
//           height="1000"
//           displayQuantityOfSide={2.5}
//           navigation={false}
//           enableScroll={false}
//           clickable={true}
//           active={0}

//           // media={{
//           //   "@media (max-width: 900px)": {
//           //     // width: "600px"
//           //     // height: "300px"
//           //   },
//           //   "@media (min-width: 900px)": {
//           //     // width: "960px"
//           //     // height: "800px"
//           //   }
//           // }}
//         >
//           {/* // ternary operator // {newArray.length === 0 ? "" : ""} // if and else na istoj liniji u ovom slucaju je prvi map ili drugi */}
//           {filteredUsers.length === 0
//             ? users.map((user, i) => (
//                 <img
//                   key={"imageee" + i}
//                   className="slidePics"
//                   src={user.picture}
//                   height={450}
//                   alt={
//                     <a className="sliderImg" href={user.website}>
//                       {user.companyname}
//                     </a>
//                   }
//                 />
//                 // <Link to="/">Click Here</Link>
//               ))
//             : filteredUsers.map((user, i) => (
//                 <img
//                   key={"imageeeee" + i}
//                   className="slidePics"
//                   src={user.picture}
//                   height={450}
//                   alt={
//                     <a className="sliderImg" href={user.website}>
//                       {user.companyname}
//                     </a>
//                   }
//                 />
//               ))}
//         </Coverflow>
//       </div>
//     </div>
//   )

// }
// export default Slider
