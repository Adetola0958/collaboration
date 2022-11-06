import React, {useState, useEffect} from  "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { user_register } from "../../redux/actions/userActions";
import { USER_REGISTER_RESET } from "../../redux/types";

import "../../styles/userSignUp.css"

const UserSignUp = () => {

    const dispatch = useDispatch()

    const history = useNavigate()
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState(null)

    const userAuth = useSelector((state) => state.userAuth)
	const { loading, userDetail } = userAuth

    const submitHandler = (e) => {
		e.preventDefault()
		let data = {
			password,
			email,
            phoneNumber,
			firstName,
			lastName
		}
		if (!phoneNumber) {
			setMessage('Phone Number is highly required')
		} else {
            dispatch(user_register(data))
        }
	}

    useEffect(() => {
		if(userDetail){
			history('/')
		}
		return () => {
			dispatch({ type: USER_REGISTER_RESET })
		}
	}, [dispatch, history, userDetail])

    return (
        <>
            <div className="container-fluid signup">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-sm-7">
                        <div className="outer-box">
                            <div className="box">
                                <p className="para">
                                    By signing up, we are happy that you have supported our movement for a greater and better Nigeria
                                </p>
                                <form onSubmit={submitHandler} className="form_form">
                                    <input
                                        type='name'
                                        className='form-control'
                                        placeholder='First Name'
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <input
                                        type='name'
                                        className='form-control'
                                        placeholder='Last Name'
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <input
                                        type='email'
                                        className='form-control'
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <input
                                        type='tel'
                                        className='form-control'
                                        placeholder='Tel. Number'
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    <input
                                        type='password'
                                        className='form-control'
                                        placeholder='Password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {/* <input
                                        type='password'
                                        className='form-control'
                                        placeholder='Confirm Password'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    /> */}
                                    {message && <p>{message}</p>}
                                    <button type='submit' className='btn'>
                                        SIGN UP
                                        {loading && <i className='fas fa-spinner fa-spin'></i>}
                                    </button>
                                </form>
                                <p className='text-white foot_para'>
                                    Already have an account? <Link to='/sign-in'> SIGN IN</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSignUp