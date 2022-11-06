import * as types from '../types/index'
import axios from 'axios'
import toast from 'react-hot-toast'
import { authHeader, header } from '../header'
import config from '../config'

const url = config.liveUrl

export const admin_register = (admin) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_REGISTER_REQUEST })

		const {
			adminAuth: { adminDetail },
		} = getState()

		const { data } = await axios.post(`${url}/admin`, admin)

		if (data.status === 'ok') {
			dispatch({ type: types.ADMIN_REGISTER_SUCCESS, payload: data.data })
            dispatch({ type: types.ADMIN_AUTH_SUCCESS, payload: data.data })
            //localStorage.setItem("adminInfo", JSON.stringify(data.data))
			toast.success('Admin Created Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.ADMIN_REGISTER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: types.ADMIN_AUTH_REQUEST })

		const { data } = await axios.post(
			`${url}/admin/login`,
			{ email, password },
			{ headers: header }
		)

		if (data.status === 'ok') {
			dispatch({ type: types.ADMIN_AUTH_SUCCESS, payload: data.data })
            //localStorage.setItem("adminInfo", JSON.stringify(data.data))
			toast.success(`You are welcome, ${data.data.name}`, {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.ADMIN_AUTH_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_logout = () => (dispatch) => {
    localStorage.removeItem("adminInfo")
	dispatch({ type: types.ADMIN_AUTH_LOGOUT })
	document.location.href = '/campaign_manager_login'
}