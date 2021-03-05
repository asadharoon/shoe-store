import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./shoe.css";

const Shoe = ({ shoe }) => {
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
        <div className="dateDiv">
          <p className="date">{shoe.date.split(" ")[0]}</p>
          <p className="date" style={{ marginTop: -10 }}>
            {shoe.date.split(" ")[1]}
          </p>
        </div>
        <img src={shoe.img} className="shoeImg" />
        <p className="collection">{shoe.collection}</p>
        <p className="shoeName">{shoe.name}</p>
      </Link>
    </Col>
  );
};

export default Shoe;
