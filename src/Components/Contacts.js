import React, { useState, useEffect } from "react";
import "../Styles/contacts.css";
import { useSelector, useDispatch } from "react-redux";
import { ContactCard } from "./ContactCard";
import { addContact, getAllContacts } from "../Redux/rootActions";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const Contacts = () => {
  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const [newContactName, setNewContactName] = useState("");
  const [newContactNumber, setNewContactNumber] = useState(0);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const URL = "http://localhost:3001/contacts";

  const addNewContact = async () => {
    if (newContactName !== "" && newContactNumber !== 0) {
      dispatch(addContact(newContactName, newContactNumber));
      setNewContactName("");
      setNewContactNumber(0);
      await axios.post(URL, {
        id: uuid(),
        name: newContactName,
        number: newContactNumber,
      });
    } else if (newContactName === " " || newContactName === "") {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  useEffect(() => {
    const fetchContacts = async (URL) => {
      const res = await axios.get(URL);
      const apiContacts = await res.data;
      dispatch(getAllContacts(apiContacts));
    };

    fetchContacts(URL);
  }, [URL, dispatch]); //eslint

  return (
    <div className="container">
      <h1>Contacts Compontent</h1>
      <div className="contact-area">
        <div className="contact-list">
          {showError && (
            <p
              style={{
                color: "red",
                background: "rgba(255, 0, 0, 0.103)",
                width: "100%",
                padding: "20px",
              }}
            >
              Make Sure You Entered Valid (Name or Number)
            </p>
          )}

          <div className="new-contact-form">
            <label style={{ display: "block" }} htmlFor="">
              New Contact Name
            </label>
            <input
              type="text"
              placeholder="Add a Contact Name"
              value={newContactName}
              onChange={(e) => setNewContactName(e.target.value)}
            />{" "}
            <label style={{ display: "block" }} htmlFor="">
              New Contact Number
            </label>
            <input
              type="number"
              placeholder="Add a Contact Number"
              value={newContactNumber}
              onChange={(e) => setNewContactNumber(e.target.value)}
            />{" "}
            <button onClick={addNewContact}>Enter</button>
          </div>
          {contacts &&
            contacts.map((contact, ix) => (
              <ContactCard key={ix} contact={contact} URL={URL} />
            ))}
        </div>
      </div>
    </div>
  );
};
