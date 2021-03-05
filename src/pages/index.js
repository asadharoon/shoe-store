import { Row } from "antd";
import React from "react";
import Content from "../components/Content";
import Shoe from "../components/Shoe/Shoe";
import { ShoesList } from "../data/shoesList";
import "./mainpage.css";
const MainPage = () => {
  return (
    <Content>
      <Row className="row">
        {ShoesList.map((v, i) => {
          return <Shoe shoe={v} key={i} />;
        })}
      </Row>
    </Content>
  );
};

export default MainPage;
