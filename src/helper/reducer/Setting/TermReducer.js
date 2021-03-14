import { GETTERM_LIST, CREATE_TERM, DELETE_TERM, UPDATE_TERM, ADD_ERROR_API, REMOVE_ERROR_API } from "../../types/SettingTypes"

const initialState = {
    list: [],
    errors: []

}


export const TermReducer = (state = initialState, action) => {

    switch (action.type) {
        case GETTERM_LIST:
            return {
                ...state,
                list: action.payload
            }


        case ADD_ERROR_API:
            return {
                list: [],
                errors: state.errors.concat({
                    errorMessage: action.error,
                    moduleName: action.moduleName
                })

            }
        case REMOVE_ERROR_API:
            var dataArr = state.errors.map(item => {
                return [item.moduleName, item]
            }); // creates array of array
            var maparr = new Map(dataArr);
            var result = [...maparr.values()];
            console.log("REMOVE_ERROR_API NEW VALUE", result)
            return {
                list: [],
                errors: result
            };

        default:
            return state;


    }

}
