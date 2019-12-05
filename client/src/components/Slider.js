import React from "react"
import Coverflow from "react-coverflow"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import { useUsers, useCompanies, useLiked } from "../hooks"

function Slider() {
  const { users } = useUsers()
  const { companyname } = useCompanies()
  const { liked } = useLiked()
  console.log(liked, "test")

  const fn = function() {}

  function handleClick(e, liked) {
    e.preventDefault()
    // props.history.push("/CompanyPage/" + liked)
    // add(liked)
  }

  return (
    <div>
      <p>
        Check Your Liked List Here:{" "}
        <Link to="/liked">
          {" "}
          <Icon icon="heart" />
        </Link>
      </p>
      {/* //--- test heart--- */}
      <button onClick={e => handleClick(e, "hello")}>
        <Icon icon="heart" />
      </button>
      {/* //--- test heart--- */}
      <div className="container">
        <Coverflow
          width="960"
          height="700"
          displayQuantityOfSide={2.5}
          navigation={false}
          enableScroll={false}
          clickable={true}
          active={0}
        >
          {users.map((user, i) => (

            <img
              className="slidePics"
              src={user.picture}
              alt={
                <Link
                  className="sliderImg"
                  to={`/SingleViewPage/${user.companyname}`}
                >
                  {user.companyname}
                </Link>
              }
            />

          ))}
        </Coverflow>
      </div>
    </div>
  )
}
export default Slider
