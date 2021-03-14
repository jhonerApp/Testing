import React from 'react'
import Api from '../../api/Api'
import { GETTERM_LIST, CREATE_TERM, DELETE_TERM, UPDATE_TERM, ADD_ERROR_API, REMOVE_ERROR_API } from "../../types/SettingTypes"
import * as errorHandler from '../../reducer/ErrorHandler'

export const fetchTerm = () => dispatch => {
    Api().fetchAll("SchoolClass/GetSchoolTerm1")
        .then((res) => {
            dispatch({
                type: GETTERM_LIST,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: REMOVE_ERROR_API,
                error: err.message,
                moduleName: 'TermList'
            })
            dispatch({
                type: ADD_ERROR_API,
                error: err.message,
                moduleName: 'TermList'
            })
       
        
      

        })

}
