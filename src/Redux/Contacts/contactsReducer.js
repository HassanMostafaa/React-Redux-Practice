import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  GETT_ALL_USERS,
} from "./contactsActionTypes";
import { v4 as uuid } from "uuid";
import axios from "axios";

const initialState = {
  contacts: [],
};
const URL = "http://localhost:3001/contacts";

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      axios.post(URL, {
        id: uuid(),
        name: action.name,
        number: action.number,
      });
      return state;
    // contacts: state.contacts.concat({
    //   id: uuid(),
    //   name: action.name,
    //   number: action.number,
    // }),

    case REMOVE_CONTACT:
      axios.delete(`${URL}/${action.id}`);
      return state;
    //{
    //   ...state,
    //   contacts: state.contacts.filter((contact) => contact.id !== action.id),
    // };

    case GETT_ALL_USERS:
      return {
        ...state,
        contacts: action.apiContacts,
      };

    default:
      return state;
  }
};
