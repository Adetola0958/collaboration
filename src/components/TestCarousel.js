import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Tab, TabPanel, Tabs, TabList} from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import slider1 from "../assets/img/osinbajo.jpg"
import slider2 from "../assets/img/ijaw.jpeg"
import NaijaStates from "naija-state-local-government";
import { Button } from "react-bootstrap";
import { PaystackButton } from "react-paystack";
import { user_register } from "../redux/actions/userActions";
import { USER_REGISTER_RESET } from "../redux/types";

const TestCarousel = () =>{
    const dispatch = useDispatch()

    const history = useNavigate()

    const userRegister = useSelector((state) => state.userRegister)
	const { success, userDetail } = userRegister

    const publicKey = "pk_live_d24c4b9cf51c75cee18c2c65fdc5311d7224fca1"
    const [selectedTab, setSelectedTab] = useState(0);
    const tabCount = 4;
    const [selectedAmount, setSelectedAmount] = useState(0)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [yes, setYes] = useState(false)
    const [anonymous, setAnonymous] = useState(false)
    const [pState, setPState] = useState("")
    const [volunteer, setVolunteer] = useState("")
    const [message, setMessage] = useState("")
    
    const answer = () => {
        setYes(!yes)
    };

    const person = () => {
        setAnonymous(!anonymous)
    };

    const componentProps = {
        email,
        amount: selectedAmount,
        metadata: {
          firstName,
          lastName,
          phoneNumber,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! Don't leave :("),
    }

    const submitHandler = (e) => {
		e.preventDefault()
		let data = {
			email,
            phoneNumber,
			firstName,
			lastName,
            pState,
            volunteer
		}
		if (!phoneNumber) {
			setMessage('Phone Number is highly required')
		} else {
            dispatch(user_register(data))
            history('/')
        }
	}

    useEffect(() => {
		if(userDetail){
			history('/')
            
		}
		return () => {
			//dispatch({ type: USER_REGISTER_RESET })
            setMessage("Thank you for choosing to volunteer, hope for a greater Nigeria")
		}
	}, [dispatch, history, userDetail])

    console.log(selectedAmount)
    console.log(phoneNumber)
    console.log(firstName)
    console.log(lastName)

    return(
        <>
            <div className="carousel-wrapper" style={{position: "relative"}}>
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    <div>
                        <img src={slider1} alt="osinbajo"/>
                    </div>
                    <div>
                        <img src={slider2} alt="osinbajo"/>
                    </div>
                    <div>
                        <img src={slider1} alt="osinbajo"/>
                    </div>
                </Carousel>
            </div>
            <div className="tab-pane">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="main-page">
                            <div className="donation">
                                <h3>How much would you like to donate today?</h3>
                            </div>
                            <div className="tabpanes">
                                <Tabs defaultTab={selectedTab.toString()} horizontal className="horizontal-tabs">
                                    <TabList>
                                        <Tab tabFor="0">Amount</Tab>
                                        <Tab tabFor="1">Name</Tab> 
                                        <Tab tabFor="2">Payment</Tab>
                                        <Tab tabFor="3">Volunteer</Tab>
                                    </TabList>
                                    {success && success === true ? (
                                        <div className="success-msg">
                                            <p className="thank-you">{message}</p>

                                            <div className="mt-5 text-center padbutton">
                                                <button className="btn btn-submit">
                                                    <a className="link" href='/'>
                                                        Go to home page
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
    
                                    ):
                                        <>
                                            <TabPanel tabId="0">
                                                <div className="">
                                                    <h4> Select amount</h4>
                                                    <div className="all-money">
                                                        <button  
                                                            onClick={() => setSelectedAmount(50000)} 
                                                            className={selectedAmount === 50000 ? "money" : null}
                                                        > 
                                                            &#8358;500 
                                                        </button>
                                                        <button 
                                                            onClick={() => setSelectedAmount(100000)}
                                                            className={selectedAmount === 100000 ? "money" : null}
                                                        > &#8358;1000 </button>
                                                        <button 
                                                            onClick={() => setSelectedAmount(200000)}
                                                            className={selectedAmount === 200000 ? "money" : null}
                                                        > &#8358;2000 </button>
                                                        <button 
                                                            onClick={() => setSelectedAmount(500000)}
                                                            className={selectedAmount === 500000 ? "money" : null}
                                                        >
                                                            &#8358;5000 </button>
                                                        <button 
                                                            className={selectedAmount === 1000000 ? "money" : null} 
                                                            onClick={() => setSelectedAmount(1000000)}
                                                        > &#8358;10000 </button>
                                                        <button 
                                                            className={selectedAmount === 2000000 ? "money" : null} 
                                                            onClick={() => setSelectedAmount(2000000)}
                                                        > &#8358;20000 </button>
                                                        <button 
                                                            className={selectedAmount === 5000000 ? "money" : null} 
                                                            onClick={() => setSelectedAmount(5000000)}
                                                        > &#8358;50000 </button>
                                                        <button 
                                                            className={selectedAmount === 10000000 ? "money" : null} 
                                                            onClick={() => setSelectedAmount(10000000)}
                                                        > &#8358;100000 </button>
                                                    </div>
                                                    <input className="form-control" type="number" placeholder="Other amount" onChange={(e) => setSelectedAmount(e.target.value * 100)}/>
                                                </div>
                                            <div className="text-center padbutton">
                                                    <Button onClick={() => setSelectedTab((selectedTab + 1) % tabCount )} className="btn btn-submit">Continue</Button>
                                                </div> 
                                            </TabPanel>

                                            <TabPanel tabId="1">
                                                <div>
                                                    <form>
                                                        <div className="mb-3">
                                                            <p> Want to be an anonymous? </p>
                                                            <div className="checkboxes">
                                                                <label className="mr-1">Yes</label>
                                                                <input type="checkbox" className="mr-5"/>
                                                                <label className="mr-1">No</label>
                                                                <input type="checkbox" onClick={() => person()}/>
                                                                {anonymous === true ? (
                                                                    <div className="row mb-3">
                                                                        <div className="col-md-6">
                                                                            <label htmlFor="name"> First Name: </label>
                                                                            <input className="form-control" type="text" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)}/>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <label htmlFor="name"> Last Name: </label>
                                                                            <input className="form-control" type="text" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)}/>
                                                                        </div>
                                                                    </div>
                                                                ): null}
                                                            </div>
                                                            
                                                        </div>
                                                        <label htmlFor="number"> Tel. Number: </label>
                                                        <input className="form-control mb-3" type="tel" placeholder="Enter your phone number" onChange={(e) => setPhoneNumber(e.target.value)}/>
                                                        
                                                        <label htmlFor="email"> Email: </label>
                                                        <input className="form-control" type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}/>
                                                    </form>
                                                </div>
                                            <div className="text-center padbutton">
                                                    <Button onClick={() => setSelectedTab((selectedTab + 1) % tabCount )} className="btn btn-submit">Continue</Button>
                                                </div> 
                                            </TabPanel>

                                            <TabPanel tabId="2">
                                                <div className="text-center">
                                                    <PaystackButton {...componentProps} />
                                                </div>
                                                
                                                <div className="text-center padbutton">
                                                    <Button onClick={() => setSelectedTab((selectedTab + 1) % tabCount )} className="btn btn-submit">Continue</Button>
                                                </div> 
                                            </TabPanel>

                                            <TabPanel tabId="3">
                                                <div className="volunteer">
                                                    
                                                    <p> Will you like to be a volunteer? </p>
                                                    <div className="checkboxes">
                                                        <label className="mr-1">Yes</label>
                                                        <input type="checkbox" className="mr-5" onClick={() => answer()}/>
                                                        <label className="mr-1">No</label>
                                                        <input type="checkbox"/>
                                                        {yes === true ? (
                                                            <form onSubmit={submitHandler}>
                                                                <label htmlFor="state">Please tell us your state of origin</label>
                                                                <select onChange={(e) => setPState(e.target.value)} className="form-control">
                                                                    <option value="">Select State</option>
                                                                    {NaijaStates.states().map((e, i) => (
                                                                        <option key={i++} value={`${e}`}>
                                                                            {e}
                                                                        </option>
                                                                    ))}
                                                                </select>

                                                                <div className="capacity">
                                                                    <label htmlFor="volunteer">In what capacity are you willing to help?</label>

                                                                    <select onChange={(e) => setVolunteer(e.target.value)} className="form-control">
                                                                        <option value="">---Select---</option>
                                                                        <option value="media">Media</option>
                                                                        <option value="community canvasser">Community Canvasser</option>
                                                                        <option value="polling unit champion">Polling Unit Champion</option>
                                                                    </select>

                                                                    
                                                                </div>
                                                                
                                                                <div className="mt-5 text-center padbutton">
                                                                    <button type="submit" className="btn btn-submit">Submit</button>
                                                                    {/* <button className="float-right btn btn-submit">
                                                                        <a className="link" href='/'>
                                                                            Go to home page
                                                                        </a>
                                                                    </button> */}
                                                                </div>

                                                            </form>
                                                        ): null}
                                                        
                                                    </div>

                                                </div>
                                            </TabPanel>
                                        </>
                                    }
                                </Tabs>
                                {/* <Button onClick={() => setSelectedTab((selectedTab + tabCount - 1) % tabCount )}>Back</Button>*/}
                                {/* <Button onClick={() => setSelectedTab((selectedTab + 1) % tabCount )}>Next</Button> */}
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestCarousel