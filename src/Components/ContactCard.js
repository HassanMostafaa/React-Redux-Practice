import React from "react";
import { BsPersonFill, BsPhone } from "react-icons/bs";
// import { IoMdContact } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { delContact } from "../Redux/rootActions";
// import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export const ContactCard = ({ fetch, contact, URL }) => {
  const dispatch = useDispatch();

  const deleteContact = async (id) => {
    // await axios.delete(`${URL}/${id}`);
    dispatch(delContact(id));
    // console.log(`DELTED`, `${URL}/${id}`);
    fetch(URL);
  };

  return (
    <div className="contact-card">
      {/* <div className="avatar">
        <IoMdContact />
      </div> */}
      <Link to={`/contacts/${contact.id}`}>
        <Avatar className="avatar" variant="circle">
          {contact.name[0] ? contact.name[0].toUpperCase() : ""}
          {contact.name[1] && contact.name[1]}
        </Avatar>
        <div className="info">
          <p>
            <BsPersonFill className="icon" /> {contact.name && contact.name}
          </p>
          <p>
            <BsPhone className="icon" /> {contact.number && contact.number}
          </p>
        </div>
      </Link>
      <RiDeleteBin6Line
        className="delete-btn"
        style={{
          fontSize: "19px",
          color: "#ec0000",
        }}
        onClick={() => deleteContact(contact.id)}
      ></RiDeleteBin6Line>
    </div>
  );
};
