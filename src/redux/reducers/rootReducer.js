import { combineReducers } from "redux";
import {
    adminRegisterReducer,
    adminAuthReducer,
} from "./adminReducer"

import { 
    userRegisterReducer,
    userAuthReducer
} from "./userReducer";

const reducer = combineReducers({
    adminRegister: adminRegisterReducer,
    adminAuth: adminAuthReducer,

    userRegister: userRegisterReducer,
    userAuth: userAuthReducer,
})

export default reducer