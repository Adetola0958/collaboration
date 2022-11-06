import * as types from '../types/index'
import axios from 'axios'
import toast from 'react-hot-toast'
import config from '../config'
import { authHeader, header } from '../header'

const url = config.liveUrl

export const user_register = (user) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.USER_REGISTER_REQUEST })

		const {
			userAuth: { userDetail },
		} = getState()

		const { data } = await axios.post(`${url}/collab`, user)

		if (data.status === 'ok') {
			dispatch({ type: types.USER_REGISTER_SUCCESS, payload: data.data })
			toast.success('Account Created Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.USER_REGISTER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const user_login = (phoneNumber, password) => async (dispatch) => {
	try {
		dispatch({ type: types.USER_AUTH_REQUEST })

		const { data } = await axios.post(
			`${url}/users/login`,
			{ phoneNumber, password },
			{ headers: header }
		)

		if (data.status === 'ok') {
			dispatch({ type: types.USER_AUTH_SUCCESS, payload: data.data })
			toast.success(`You are welcome, ${data.data.firstName}`, {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.USER_AUTH_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const user_logout = () => (dispatch) => {
    localStorage.removeItem("adminInfo")
	dispatch({ type: types.USER_AUTH_LOGOUT })
	document.location.href = '/'
}