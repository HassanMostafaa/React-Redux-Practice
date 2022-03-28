import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  GETT_ALL_USERS,
} from "./contactsActionTypes";
import { v4 as uuid } from "uuid";

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: state.contacts.concat({
          id: uuid(),
          name: action.name,
          number: action.number,
        }),
      };

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.id),
      };

    case GETT_ALL_USERS:
      return {
        ...state,
        contacts: action.apiContacts,
      };

    default:
      return state;
  }
};
