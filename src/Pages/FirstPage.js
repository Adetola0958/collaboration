import React from "react";
import TestCarousel from "../components/TestCarousel";
import "react-web-tabs/dist/react-web-tabs.css";
//import Check from "../components/Check";

import "../styles/style.css"


const FirstPage = () => {
    return(
        <>
            <header className="first_header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Prof. Yemi Osinbajo (GCON SAN)</h2>
                            </div>
                        </div>
                        {/* <div className="col-lg-4"></div>
                        
                        <div className="col-lg-4 col-12">
                            <div className="ipad-screen pt-2">
                                <ul className="list-unstyled change-list">
                                    <li><a href="/sign-in">Log In</a></li>
                                    <li><a href="/sign-up">Create an Account</a></li>
                                </ul>    
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
            <section className="padding">
                <div className="better-nigeria">
                    <div className="container">
                        <div className="text-center justify-content-center align-item-center">
                            <div className="col-lg-12">
                                <h2> Create Your Future Today For New Nigerian Tribe</h2>
                                <p>
                                    Donate for a man of impeccable character, compassion, and intelligence
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>  
            </section>
            <section className="carousel">
                <TestCarousel/>
            </section>

        </>
    )
}

export default FirstPage