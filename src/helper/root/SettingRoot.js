import React from 'react'
import { combineReducers } from 'redux'


import { ClassReducer } from "../reducer/Setting/ClassReducer"
import { TermReducer } from "../reducer/Setting/TermReducer"
//import { ErrorHandlerReducer } from "../reducer/ErrorHandler"



const SettingRoot = combineReducers({
    // error: ErrorHandlerReducer,
    class: ClassReducer,
    term: TermReducer
})

export default SettingRoot
