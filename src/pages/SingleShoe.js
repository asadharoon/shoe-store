import React from "react";
import { useParams } from "react-router-dom";

const SingleShoe = () => {
  const { slug } = useParams();
  return <p>{slug}</p>;
};

export default SingleShoe;
