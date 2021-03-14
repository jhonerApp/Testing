import { array } from "yup/lib/locale"
import { GETCLASS_LIST, CREATE_CLASS, DELETE_CLASS, UPDATE_CLASS, ADD_ERROR_API, REMOVE_ERROR_API } from "../../types/SettingTypes"

const initialState = {
    list: [],
    errors: []
}


export const ClassReducer = (state = initialState, action) => {

    switch (action.type) {
        case GETCLASS_LIST:
            return {
                ...state,
                list: action.payload

            }
        case CREATE_CLASS:
            return {
                ...state,
                list: [...state.list, action.payload]

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


// export const ErrorReducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD_ERROR_API:
//             return state.concat({
//                 errorMessage: action.error,
//                 moduleName: action.moduleName
//             })

//         // action.error
//         case REMOVE_ERROR_API:
//             console.log("REMOVE_ERROR_API", state);
//             // var dataArr = state.map(item => {
//             //     return [item.moduleName, item]
//             // }); // creates array of array
//             // var maparr = new Map(dataArr);
//             // var result = [...maparr.values()];
//             // console.log("REMOVE_ERROR_API NEW VALUE", result)
//             return state;
//         default:
//             return state;
//     }
// }
