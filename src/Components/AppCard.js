import React from "react";
import { useNavigate } from "react-router-dom";

export const AppCard = ({ title, discription, img, link }) => {
  const navigate = useNavigate();
  return (
    <div className="app-card" onClick={() => navigate(link)}>
      <img width={"100%"} src={img} alt={title} />
      <h3>{title}</h3>
      <p>{discription}</p>
    </div>
  );
};
