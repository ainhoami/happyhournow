import React, { useState} from 'react';
import { useAuth } from '../hooks';
import { useAdmins } from '../hooks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import internal links
import Header from "./Header";
import Footer from "./Footer";
// import stylesheet
import "../styles/PartnerWithUs.css"
// import assets
import Step1 from "../assets/step1.png"
import Step2 from "../assets/step2.png"
import Step3 from "../assets/step3.png"
import Step4 from "../assets/step4.png"
import Happy from "../assets/happy.png"
import Happier from "../assets/happier.png"
import Happiest from "../assets/happiest.png"

export default props => {
const [username, setUsername]=useState('');
const [password, setPassword]=useState('');
const [loginmatch, setLoginmatch]=useState(true);
const { signin } = useAuth();
const { getone } = useAdmins ();

    return (

        <div class="partnerWithUsMainContainer">

          <Header/>
            <div class="howItWorksMainContainer">

                <div class="howItWorksTitle">Here's How It Works</div>

                <div class="howItWorksWrapper">

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img
                                        src={Step1}
                                        alt="Avatar"
                                        data-action="our link"
                                        style={{
                                        display: "block",
                                        width: "300px",
                                        height: "300px"
                                        }}
                                    />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Sign Up</h1>
                                    <p>Register and complete<br/> your initial profile</p>
                                    <p>Takes about 10 minutes</p>
                                    <p>(one time only)</p>
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img
                                        src={Step2}
                                        alt="Avatar"
                                        data-action="our link"
                                        style={{
                                        display: "block",
                                        width: "300px",
                                        height: "300px"
                                        }}
                                    />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Enter your promotion(s)</h1> 
                                    <p>Market your brand</p>
                                    <p>Share your specials and events</p>
                                    <p>Attract new customers</p>
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <img
                                        src={Step3}
                                        alt="Avatar"
                                        data-action="our link"
                                        style={{
                                        display: "block",
                                        width: "300px",
                                        height: "300px"
                                        }}
                                    />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Track Your Success</h1> 
                                    <p>Track each promotion's:</p>
                                    <p>&nbsp;&nbsp;...click-through rates</p>
                                    <p>&nbsp;&nbsp;...offers and redemptions</p>
                                    <p>&nbsp;&nbsp;...marketing spend<br/>vs. targeted goals</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <img
                                        src={Step4}
                                        alt="Avatar"
                                        data-action="our link"
                                        style={{
                                        display: "block",
                                        width: "300px",
                                        height: "300px"
                                        }}
                                    />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Improve and Repeat</h1>
                                    <p>We're here to help you<br/> grow your business</p>
                                    <p>Because if you don't succeed,<br/> we don't succeed.</p>
                                </div>
                            </div>
                        </div>

                </div>

            </div>

            <div class="pricingMainContainer">
                <h1 id="pricingTitle">Pricing</h1>
                <div class="pricingWrapper">

                    <div class="priceContainer">
                        <h2 class="priceName">Happ<span id="green">y</span> Plan</h2>
                        <img
                            id="happyIcon"
                            src={Happy}
                            alt="Avatar"
                            data-action="our link"
                            style={{
                            display: "block",
                            width: "60px",
                            height: "60px"
                            }}
                        />
                        <p id="trial">FREE for 6 months!</p>
                        <p>$50 per month after trial (per location)</p>
                        <p>1 promotion per week</p>
                        <p>Monthly Volumne Reporting and Analytics</p>
                        <p>Local Training and Support</p>
                        <br/><br/><br/><br/>
                        <input class="happyBtn" type="submit" value="Happy Button" />
                    </div>
                    
                    <div class="priceContainer">
                        <h2 class="priceName">Happ<span id="green">ier</span> Plan</h2>
                        <img
                            id="happierIcon"
                            src={Happier}
                            alt="Avatar"
                            data-action="our link"
                            style={{
                            display: "block",
                            width: "60px",
                            height: "60px"
                            }}
                        />
                        <p id="trial">FREE for 6 months!</p>
                        <p>$100 per month after trial (per location)</p>
                        <p>3 promotions per week</p>
                        <p>Monthly Volumne Reporting and Analytics</p>
                        <p>Local Training and Support</p>
                        <p>Consulting on content creation</p>
                        <p>Content management</p>
                        <br/><br/>
                        <input class="happierBtn" type="submit" value="Happier Button" />
                    </div>
                    
                    <div class="priceContainer">
                        <h2 class="priceName">Happ<span id="green">iest</span> Plan</h2>
                        <img
                            id="happiestIcon"
                            src={Happiest}
                            alt="Avatar"
                            data-action="our link"
                            style={{
                            display: "block",
                            width: "60px",
                            height: "60px"
                            }}
                        />
                        <p id="trial">FREE for 6 months!</p>
                        <p>$250 per month after trial (per location)</p>
                        <p>Unlimited promotions</p>
                        <p>Monthly Volumne Reporting and Analytics</p>
                        <p>Local Training and Support</p>
                        <p>Consulting on content creation</p>
                        <p>Content management</p>
                        <p>Creating brand identity packages</p>
                        <p>Content creation/collaboration and graphic design</p>
                        <input class="happiestBtn" type="submit" value="Happiest Button" />
                    </div>

                </div>          
                <p class="pricingFooter"> * All rates are based on monthly subscription plans that can be cancelled at any time.</p> 
            </div>

<Footer/>
        </div>

    )
}