import React from "react";
import { useParams } from "react-router-dom";
import Content from "../components/Content";

const SingleShoe = () => {
  const { slug } = useParams();
  return <Content>{slug}</Content>;
};

export default SingleShoe;
