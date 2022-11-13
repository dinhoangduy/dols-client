import React from "react";
import vite from "./vite.svg";
import "./style.scss";

// AntD
import { Col, Row, Dropdown, Menu, Collapse } from "antd";
import {
  DownOutlined,
  CloudDownloadOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

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
    <>
      <div className="authenHeader">
        <Row>
          <Col flex={3}>
            <ul>
              <a href="./">
                <li>
                  <p>
                    <img src={vite} alt="" />
                    Vite
                  </p>
                </li>
              </a>
              <li className="authenResponsive">
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
              <li className="authenResponsive">
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
              <li className="authenResponsive">
                <p>
                  Solution <DownOutlined />
                </p>
              </li>
              <li className="authenResponsive">
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
              <a href="./pricing" className="authenResponsive">
                <li>
                  <p>Pricing</p>
                </li>
              </a>
            </ul>
          </Col>
          <Col flex="auto">
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
      <div className="authenHeaderResponsive1024">
        <Row>
          <Col>
            <ul>
              <a href="./">
                <li>
                  <p>
                    <img src={vite} alt="" />
                    Vite
                  </p>
                </li>
              </a>
            </ul>
          </Col>
          <Col className="right">
            <ul>
              {/* <li>
                <button className="btn">Get Dols Free</button>
              </li> */}
              <li>
                <Collapse bordered={false}>
                  <Panel
                    header={<MenuOutlined />}
                    key="1"
                    className="subMenuWrap"
                    showArrow={false}
                  >
                    <Collapse bordered={false}>
                      <Panel header="Product" key="1" showArrow={false}>
                        <ul className="firstType">
                          <a href="#">
                            <li>Overview</li>
                          </a>
                          <a href="#">
                            <li>Template gallery</li>
                          </a>
                          <a href="#">
                            <li>Customer stories</li>
                          </a>
                          <a href="#">
                            <li>Connections</li>
                          </a>
                          <a href="">
                            <button className="btn">
                              Download DOLS <CloudDownloadOutlined />
                            </button>
                          </a>
                        </ul>
                      </Panel>
                      <Panel header="Solution" key="2" showArrow={false}>
                        <ul className="secondType">
                          <li>
                            <small>By team Size</small>
                            <ul>
                              <a href="#">
                                <li>Overview</li>
                              </a>
                              <a href="#">
                                <li>Template gallery</li>
                              </a>
                              <a href="#">
                                <li>Customer stories</li>
                              </a>
                              <a href="#">
                                <li>Connections</li>
                              </a>
                            </ul>
                          </li>
                          <li>
                            <small>By team function</small>
                            <ul>
                              <a href="#">
                                <li>Design</li>
                              </a>
                              <a href="#">
                                <li>Engineering</li>
                              </a>
                              <a href="#">
                                <li>Product</li>
                              </a>
                              <a href="#">
                                <li>Managers</li>
                              </a>
                            </ul>
                          </li>
                          <li>
                            <small>Notion for</small>
                            <ul>
                              <a href="#">
                                <li>Startups</li>
                              </a>
                              <a href="#">
                                <li>Remote work</li>
                              </a>
                              <a href="#">
                                <li>Education</li>
                              </a>
                              <a href="#">
                                <li>Nonprofits</li>
                              </a>
                            </ul>
                          </li>
                        </ul>
                      </Panel>
                      <Panel header="Download" key="4" showArrow={false}>
                        <ul className="firstType">
                          <a href="#">
                            <li>iOS & Android</li>
                          </a>
                          <a href="#">
                            <li>Mac & Windows</li>
                          </a>
                          <a href="#">
                            <li>Web Clipper</li>
                          </a>
                        </ul>
                      </Panel>
                      <Panel
                        header={<a href="./pricing">Pricing</a>}
                        key="5"
                        showArrow={false}
                      ></Panel>
                      <Panel
                        header={<a href="#">Contact sales</a>}
                        key="6"
                        showArrow={false}
                      ></Panel>
                    </Collapse>
                  </Panel>
                </Collapse>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AuthenHeader;
