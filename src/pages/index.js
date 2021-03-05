import { Row } from "antd";
import React from "react";
import Shoe from "../components/Shoe/Shoe";
import { ShoesList } from "../data/shoesList";
import "./mainpage.css";
const MainPage = () => {
  return (
    <Row className="row">
      <Shoe shoe={ShoesList[0]} />

      <Shoe shoe={ShoesList[1]} />

      <Shoe shoe={ShoesList[2]} />
      <Shoe shoe={ShoesList[0]} />
      <Shoe shoe={ShoesList[1]} />
    </Row>
  );
};

export default MainPage;
