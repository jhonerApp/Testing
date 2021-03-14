
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../root/SettingRoot'
import thunk from 'redux-thunk'


const store = createStore(rootReducer,compose(applyMiddleware(thunk)));
export default store