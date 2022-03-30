import React, { useState } from "react";
import "../Styles/home.css";

import { AppCard } from "./AppCard";

export const Home = () => {
  const [apps] = useState([
    {
      title: "Contacts Redux App",
      discription: ` Save, Delete, View, and Modify Contacts with Name and Number using a Redux state coming from backend local server on Post 3001`,
      img: "./imgs/contactsApp.png",
      link: "/contacts",
    },
    {
      title: "Counter Redux App",
      discription: ` A small app to setup a working redux state with actions, reducers,
      and action types`,
      img: "./imgs/counterApp.png",
      link: "/counter",
    },
  ]);
  return (
    <div className="container">
      <h1>Home Component</h1>
      <div className="apps-cards">
        {apps.map((app, ix) => (
          <AppCard
            key={ix}
            title={app.title}
            discription={app.discription}
            img={app.img}
            link={app.link}
          />
        ))}
      </div>
    </div>
  );
};
