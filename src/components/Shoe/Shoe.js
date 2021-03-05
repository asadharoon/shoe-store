import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./shoe.css";

const Shoe = ({ shoe, history }) => {
  return (
    <Col
      md={24}
      lg={8}
      sm={24}
      className="shoeCol"
      onClick={() => {
        console.log("on click");
      }}
    >
      <Link to={"/shoes/" + shoe.slug} className="shoeCol">
        <img src={shoe.img} className="shoeImg" />
        <p className="shoeName">{shoe.name}</p>
      </Link>
    </Col>
  );
};

export default Shoe;
