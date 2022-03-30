import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Avatar, Alert } from "@mui/material";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import "../Styles/nav.css";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";

export const ContactInfo = () => {
  let params = useParams();
  const contactId = params.id;
  const URL = "http://localhost:3001/contacts";
  // const currentContactURL = `${URL}/${contactId}`;
  const [currentContact, setCurrentContact] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [newCurrentContactName, setNewCurrentContactName] = useState(
    currentContact.name
  );
  const [newCurrentContactNumber, setNewCurrentContactNumber] = useState(
    currentContact.number
  );
  const [showAlert, setShowAlert] = useState(false);

  const getCurrentContact = async (url, id) => {
    const res = await axios.get(`${url}/${id}`);
    setCurrentContact(res.data);
    setNewCurrentContactName(res.data.name);
    setNewCurrentContactNumber(res.data.number);
  };

  useEffect(() => {
    getCurrentContact(URL, contactId);
  }, [URL, contactId]);

  const enableEditMode = () => {
    setEditMode(true);
  };

  const updateCurrentContact = async () => {
    try {
      if (
        !!newCurrentContactName &&
        !!newCurrentContactNumber &&
        newCurrentContactName.trim() !== ""
      ) {
        await axios.put(`${URL}/${contactId}`, {
          ...currentContact,
          name: newCurrentContactName,
          number: newCurrentContactNumber,
        });
        getCurrentContact(URL, contactId);
        setEditMode(false);
      } else {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 10000);
      }
    } catch (error) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 10000);
    }
  };

  return (
    <div className="container counter-card ">
      {/* <div
        contentEditable={true}
        onInput={(e) => console.log(e.target.innerText)}
      ></div> */}
      {showAlert && (
        <Alert
          severity="error"
          sx={{ my: 2 }}
          onClose={() => setShowAlert(false)}
        >
          "Invalid Input Values",{" "}
          <strong>
            {" "}
            Please, Make sure you entered the right values for the Name And
            Number
          </strong>{" "}
        </Alert>
      )}
      <h1 style={{ margin: "0 0 30px 0" }}>Contact Info Component</h1>
      <Avatar variant="square" />

      <p>
        Full Name :{" "}
        {!editMode ? (
          currentContact.name
        ) : (
          <input
            autoFocus
            style={{
              padding: "5px ",
              border: "none",
              outline: "none",
              boxShadow: "0 2px 0 #00a2cf",
            }}
            type="text"
            value={newCurrentContactName}
            onChange={(e) => setNewCurrentContactName(e.target.value)}
          />
        )}
      </p>
      <p>
        Number :{" "}
        {!editMode ? (
          currentContact.number
        ) : (
          <input
            type="number"
            style={{
              padding: "5px ",
              border: "none",
              outline: "none",
              boxShadow: "0 2px 0 #00a2cf",
            }}
            value={newCurrentContactNumber}
            onChange={(e) => setNewCurrentContactNumber(e.target.value)}
          />
        )}
      </p>
      <p style={{ fontSize: "12px", color: "#999" }}>
        FETCHED ID : {currentContact.id}
      </p>
      <div
        style={{
          margin: "50px 0 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/contacts"
          style={{
            color: "#f4f4f4",
            background: "#00a2cf",
            padding: "5px 20px",
          }}
        >
          {
            <MdOutlineArrowBackIosNew
              style={{ transform: "translateY(3px)" }}
            />
          }
          Back
        </Link>
        {!editMode ? (
          <button
            onClick={enableEditMode}
            style={{
              color: "#f4f4f4",
              background: "#00a2cf",
              padding: "5px 20px",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          >
            {
              <AiTwotoneEdit
                style={{
                  transform: "translateY(3px)",
                }}
              />
            }
            Edit
          </button>
        ) : (
          <button
            onClick={updateCurrentContact}
            style={{
              color: "#1E4620",
              background: "#EDF7ED",
              padding: "5px 20px",
              border: "1px solid #5CB660",
              boxShadow: "3px 3px 0px #5CB66066",
              outline: "none",
              fontSize: "16px",
            }}
          >
            {
              <BsCheck2All
                style={{
                  transform: "translate(-3px,3px)",
                }}
              />
            }
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};
