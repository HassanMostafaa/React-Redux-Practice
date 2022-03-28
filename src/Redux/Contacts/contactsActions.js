import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  GETT_ALL_USERS,
} from "./contactsActionTypes";

export const addContact = (name, number) => {
  return {
    type: ADD_CONTACT,
    name,
    number,
  };
};

export const delContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    id,
  };
};

export const getAllContacts = (apiContacts) => {
  return {
    type: GETT_ALL_USERS,
    apiContacts,
  };
};
