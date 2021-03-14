import React from 'react'
import Api from '../../api/Api'
import { GETCLASS_LIST, CREATE_CLASS, DELETE_CLASS, UPDATE_CLASS, ADD_ERROR_API, REMOVE_ERROR_API } from "../../types/SettingTypes"
import * as errorHandler from '../../reducer/ErrorHandler'

export const fetchClass = () => dispatch => {
    Api().fetchAll("SchoolClass/GetSchoolClassName")
        .then((res) => {
            
            dispatch({
                type: GETCLASS_LIST,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log("KEY",process.env)
            dispatch({
                type: REMOVE_ERROR_API,
                error: err.message,
                moduleName: 'ClassList'
            })
            dispatch({
                type: ADD_ERROR_API,
                error: err.message,
                moduleName: 'ClassList'
            })
        })

}

export const createClass = (data) => dispatch => {
    Api().create("SchoolClass/InsertSchoolClassName1", data).then((res) => {
        dispatch({
            type: CREATE_CLASS,
            payload: res.data
        })
        console.log("CREATE_CLASS", res.status)

    }).catch((err) => {

        dispatch({
            type: ADD_ERROR_API,
            error: err.message,
            moduleName: 'ClassSubmit',
            payload: err.data
        })
        dispatch({
            type: REMOVE_ERROR_API,
            error: err.message,
            moduleName: 'ClassSubmit',
            payload: err.data
        })

     

        console.log("Error Message:", err)
    })

}

