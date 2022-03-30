import React, { useState, useEffect, useRef } from "react";
import "../Styles/contacts.css";
import { useSelector, useDispatch } from "react-redux";
import { ContactCard } from "./ContactCard";
import { addContact, getAllContacts } from "../Redux/rootActions";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { Alert, AlertTitle } from "@mui/material";

export const Contacts = () => {
  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const [newContactName, setNewContactName] = useState("");
  const [newContactNumber, setNewContactNumber] = useState(0);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const URL = "http://localhost:3001/contacts";
  const numInpRef = useRef(null);

  const fetchContacts = async (URL) => {
    const res = await axios.get(URL);
    const apiContacts = await res.data;
    dispatch(getAllContacts(apiContacts));
  };

  const addNewContact = async (e) => {
    e.preventDefault();
    if (newContactName !== "" && newContactNumber !== 0) {
      // await axios.post(URL, {
      //   id: uuid(),
      //   name: newContactName,
      //   number: newContactNumber,
      // });
      dispatch(addContact(newContactName, newContactNumber));
      await fetchContacts(URL);
      setNewContactName("");
      setNewContactNumber(0);
      numInpRef.current.value = "";
      numInpRef.current.blur();
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 8000);
    }
  };

  const searchInputChange = async (e) => {
    const res = await axios.get(URL);
    const apiContacts = await res.data;
    dispatch(
      getAllContacts(
        apiContacts.filter((contact) =>
          contact.name
            .toLocaleLowerCase()
            .trim()
            .includes(e.target.value.toLocaleLowerCase().trim())
        )
      )
    );
  };

  useEffect(() => {
    fetchContacts(URL);
    //asking to put the function as dependancy ....
    //so function will call the function and start a loop !!!!

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL, dispatch]);

  return (
    <div className="container">
      <h1>Contacts Compontent</h1>
      <p>
        db.json File Running as a backend server using json-server -w db.json -p
        3001 Under URL "{URL}" and client side sending data stored in Redux
        store to be accessable across all components without prop drilling and
        mapping on this state to print the Contacts List in which you can add a
        Contact or Delete an existing one which will make an HTTP request to
        modify the backend server also, or Clicking on any contact to be
        redirected "using React-Router V6" to a single contact component to see
        the selected component info or to edit a certain infomation in this
        contact
      </p>
      <div className="contact-area">
        <div className="contact-list">
          <h2 style={{ margin: "0" }}>Contact List</h2>
          {showError && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Make Sure You Entered a Valid <strong>Name/Number</strong>
            </Alert>
          )}

          <div className="new-contact-form">
            <form onSubmit={(e) => addNewContact(e)}>
              <input
                type="text"
                placeholder="Add a Contact Name"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
              />{" "}
              <input
                required
                type="number"
                placeholder="Add a Contact Number"
                ref={numInpRef}
                onChange={(e) => setNewContactNumber(e.target.value)}
              />{" "}
              <button>Enter</button>
            </form>
          </div>

          <div className="new-contact-form search-form">
            <input
              type="search"
              placeholder="Search For Contact..."
              onChange={(e) => searchInputChange(e)}
            />
          </div>

          {contacts.map((contact, ix) => (
            <ContactCard
              key={ix}
              fetch={fetchContacts}
              contact={contact}
              URL={URL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
