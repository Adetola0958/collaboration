import * as types from '../types/index'

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case types.USER_REGISTER_REQUEST:
			return { loading: true }
		case types.USER_REGISTER_SUCCESS:
			return { loading: false, success: true, userDetail: action.payload }
		case types.USER_REGISTER_FAIL:
			return { loading: false, error: action.payload }
		case types.USER_REGISTER_RESET:
			return {}
		default:
			return state
	}
}

export const userAuthReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.USER_AUTH_REQUEST:
			return { ...state, loading: true }
		case types.USER_AUTH_SUCCESS:
			return { loading: false, userDetail: action.payload }
		case types.USER_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.USER_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}