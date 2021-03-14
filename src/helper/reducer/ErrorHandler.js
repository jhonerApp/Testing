import React from 'react'
import { ADD_ERROR_API, REMOVE_ERROR_API } from '../types/SettingTypes'
const initalState = {
    list: [],
    errorMessage: 'Someting Wrong with your API,Please try again!',
    moduleName: ''
}
export const ErrorHandlerReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ERROR_API:
            return state.concat({
                errorMessage: action.error,
                moduleName: action.moduleName
            })
        case REMOVE_ERROR_API:
            var dataArr = state.map(item => {
                return [item.moduleName, item]
            }); // creates array of array
            var maparr = new Map(dataArr);
            var result = [...maparr.values()];
            console.log("REMOVE_ERROR_API NEW VALUE", result)
            return result;
        default:
            return state
    }

}
