import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { user_login } from "../../redux/actions/userActions";


import "../../styles/userSignIn.css"

const UserLogIn = () => {
    const dispatch = useDispatch()

    const history = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    const userAuth = useSelector((state) => state.userAuth)
	const { loading, userDetail } = userAuth

    const submitHandler = (e) => {
		e.preventDefault()
		dispatch(user_login(phoneNumber, password))
	}

    useEffect(() => {
		if (userDetail) {
			history("/")
		}else{
			history("/sign-in")
		}
	}, [history, userDetail])

    return (
        <>
            <section id="bg-blue">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="hehader-div">
                                <div className="header-div2">
                                    <p className="rext-white">Make Nigeria Formidable</p>
                                </div>
                            </div>
                            <div className="body-div">
                                <div>
                                    <h5 className="text-center text-white mb-5">Contributors Login</h5>
                                    <form onSubmit={submitHandler}>
                                        <input
                                            type='tel'
                                            placeholder='Phone Number'
                                            className='form-control mb-3'
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                        <input
                                            type='password'
                                            id='password'
                                            placeholder='Password'
                                            className='form-control mb-5'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <i
                                            className='fa fa-eye form-icon'
                                            id='view'
                                            // onClick={ViewHandler}
                                        ></i>

                                        <button
                                            type='submit'
                                            className='btn form-control btn-primary mb-3'
                                        >
                                            SIGN IN{' '}
                                            {loading && <i className='fas fa-spinner fa-spin'></i>}
                                        </button>

                                        <p className='text-white foot_para'>
                                            Don't have an account? <Link to='/sign-up'> SIGN UP</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserLogIn