import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { SiteName, SiteIcon } from "../../constants/SiteConstants";
import { ShoppingCartOutlined } from "@ant-design/icons";
const Navbars = () => {
  const Icon = () => {
    return (
      <div style={{ flex: 0.5, padding: 20 }}>
        <Navbar.Brand href="/shoes">
          <img
            alt=""
            src={SiteIcon}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </div>
    );
  };
  const Name = () => <span id="site-name">{SiteName}</span>;
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Icon />
        <Name />

        <div
          style={{
            flex: 0.54,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="cart"
            style={{
              width: 50,
              alignSelf: "flex-end",
              paddingTop: 10,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <ShoppingCartOutlined
              style={{ color: "royalblue", fontSize: 22 }}
            />
            <p style={{ fontFamily: "Poppins", fontSize: 12 }}>My Cart</p>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Navbars;
