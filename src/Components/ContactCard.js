import React from "react";
import { BsPersonFill, BsPhone } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { delContact } from "../Redux/rootActions";
import axios from "axios";

export const ContactCard = ({ contact, URL }) => {
  const dispatch = useDispatch();

  const deleteContact = async (id) => {
    dispatch(delContact(id));
    console.log(`${URL}/${id}`);
    await axios.delete(`${URL}/${id}`);
  };

  return (
    <div className="contact-card">
      <div className="avatar">
        <IoMdContact />
      </div>
      <div className="info">
        <p>
          <BsPersonFill className="icon" /> {contact.name}
        </p>
        <p>
          <BsPhone className="icon" /> {contact.number}
        </p>
      </div>

      <RiDeleteBin6Line
        className="delete-btn"
        style={{ fontSize: "20px", color: "red" }}
        onClick={() => deleteContact(contact.id)}
      ></RiDeleteBin6Line>
    </div>
  );
};
