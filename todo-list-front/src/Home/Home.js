import React from "react";
import Card from "../Card/Card";
import "../Home/Home.css";
import Create from "../Create/Create";
const Home = () => {
  return (
    <div className="containerHome">
      <Create></Create>
      <Card></Card>
    </div>
  );
};

export default Home;
