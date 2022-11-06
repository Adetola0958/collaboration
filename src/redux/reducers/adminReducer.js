import * as types from '../types/index'

export const adminRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_REGISTER_REQUEST:
			return { loading: true }
		case types.ADMIN_REGISTER_SUCCESS:
			return { loading: false, adminDetail: action.payload }
		case types.ADMIN_REGISTER_FAIL:
			return { loading: false, error: action.payload }
		case types.ADMIN_REGISTER_RESET:
			return {}
		default:
			return state
	}
}

export const adminAuthReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.ADMIN_AUTH_REQUEST:
			return { ...state, loading: true }
		case types.ADMIN_AUTH_SUCCESS:
			return { loading: false, adminDetail: action.payload }
		case types.ADMIN_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.ADMIN_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}