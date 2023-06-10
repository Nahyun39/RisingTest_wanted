import { combineReducers } from "redux";
import ModalReducer from './Modal';
import SignModalReducer from './signModal';
import UserReducer from './User';
import PasswordModalReducer from "./passwordModal";


const RootReducer = combineReducers({
    ModalReducer,
    SignModalReducer,
    UserReducer,
    PasswordModalReducer
})

export default RootReducer;
