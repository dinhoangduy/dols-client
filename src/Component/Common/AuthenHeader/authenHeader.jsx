import React from "react";
import vite from "./vite.svg";
import "./style.scss";

// AntD
import { Col, Row, Dropdown, Menu } from "antd";
import { DownOutlined, CloudDownloadOutlined } from "@ant-design/icons";

const AuthenHeader = () => {
  const products = (
    <Menu>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>Home</p>
          <small style={{ fontSize: "0.8rem", color: "gray" }}>
            Docs, projects, & wikis
          </small>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Template gallery
          </p>
          <small style={{ fontSize: "0.8rem", color: "gray" }}>
            Setups to get you started
          </small>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Customer Stories
          </p>
          <small style={{ fontSize: "0.8rem", color: "gray" }}>
            See how teams use Dols
          </small>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          href="##"
          style={{ color: "black", display: "flex", flexDirection: "column" }}
        >
          <button
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              fontWeight: "500",
              fontSize: "1rem",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <CloudDownloadOutlined /> Download Dols
          </button>
          <small
            style={{ fontSize: "0.8rem", color: "gray", textAlign: "center" }}
          >
            Mac, Windows, iOS & Android
          </small>
        </a>
      </Menu.Item>
    </Menu>
  );
  const downloads = (
    <Menu>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            iOS & Android
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Mac & Windows
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Web Clipper
          </p>
        </a>
      </Menu.Item>
    </Menu>
  );
  const resources = (
    <Menu>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>Blog</p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Guides & turtorials
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Webinars
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Help center
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            API docs
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Community
          </p>
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="authenHeader">
      <Row>
        <Col flex="auto">
          <ul>
            <a href="./">
              <li>
                <p>
                  <img src={vite} alt="" />
                  Vite
                </p>
              </li>
            </a>
            <li>
              <Dropdown
                overlay={products}
                trigger={["click"]}
                overlayStyle={{ width: "250px", paddingTop: "16px" }}
              >
                <p>
                  Product <DownOutlined />
                </p>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                overlay={downloads}
                trigger={["click"]}
                overlayStyle={{ width: "250px", paddingTop: "16px" }}
              >
                <p>
                  Download <DownOutlined />
                </p>
              </Dropdown>
            </li>
            <li>
              <p>
                Solution <DownOutlined />
              </p>
            </li>
            <li>
              <Dropdown
                overlay={resources}
                trigger={["click"]}
                overlayStyle={{ width: "250px", paddingTop: "16px" }}
              >
                <p>
                  Resource <DownOutlined />
                </p>
              </Dropdown>
            </li>
            <a href="./pricing">
              <li>
                <p>Pricing</p>
              </li>
            </a>
          </ul>
        </Col>
        <Col>
          <ul>
            <a href="#">
              <li>
                <p>Contact sales</p>
              </li>
            </a>
            <div className="vr"></div>
            <a href="#">
              <li>
                <p>Log in</p>
              </li>
            </a>
            <li>
              <button className="btn">Get Dols Free</button>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default AuthenHeader;
