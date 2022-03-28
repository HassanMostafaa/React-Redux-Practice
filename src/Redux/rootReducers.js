import { combineReducers } from "redux";
import { countReducer } from "./counter/counterReducer";
import { contactsReducer } from "./Contacts/contactsReducer";

const rootReducers = combineReducers({
  countReducer,
  contactsReducer,
});
export default rootReducers;
