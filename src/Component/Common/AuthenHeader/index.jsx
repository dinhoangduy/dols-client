import React from "react";
import "./style.scss";

import logo from "../../../assets/images/logo.png";

// AntD
import { Col, Row, Dropdown, Menu, Collapse } from "antd";
import {
  DownOutlined,
  CloudDownloadOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Panel } = Collapse;

const AuthenHeader = () => {
  const products = (
    <Menu>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>Trang chủ</p>
          <small style={{ fontSize: "0.8rem", color: "gray" }}>
            Tài liệu, dự án và từ điển
          </small>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Thư viện mẫu
          </p>
          <small style={{ fontSize: "0.8rem", color: "gray" }}>
            Thiệt lập để bắt đầu ngay
          </small>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Mẩu truyện của khách hàng
          </p>
          <small style={{ fontSize: "0.8rem", color: "gray" }}>
            Xem cách các nhóm sử dụng DOLS
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
            <CloudDownloadOutlined /> Tải DOLS
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
            Ghim trang web
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
            Hướng dẫn
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Hội thảo
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Hỗ trợ
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Tài liệu API
          </p>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="##" style={{ color: "black" }}>
          <p style={{ margin: 0, fontSize: "1rem", fontWeight: "500" }}>
            Cộng động
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
              <li>
                <p>
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </p>
              </li>
              <li className="authenResponsive">
                <Dropdown
                  overlay={products}
                  trigger={["click"]}
                  overlayStyle={{ width: "250px", paddingTop: "16px" }}
                >
                  <p>
                    Sản phẩm <DownOutlined />
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
                  Giải pháp <DownOutlined />
                </p>
              </li>
              <li className="authenResponsive">
                <Dropdown
                  overlay={resources}
                  trigger={["click"]}
                  overlayStyle={{ width: "250px", paddingTop: "16px" }}
                >
                  <p>
                    Tài nguyên <DownOutlined />
                  </p>
                </Dropdown>
              </li>
              <a href="./pricing" className="authenResponsive">
                <li>
                  <Link to="pricing">
                    <p>Giá cả</p>
                  </Link>
                </li>
              </a>
            </ul>
          </Col>
          <Col flex="auto">
            <ul>
              <a href="#">
                <li>
                  <p>Liên hệ bán hàng</p>
                </li>
              </a>
              <div className="vr"></div>
              <li>
                <Link to="login">
                  <p>Đăng nhập</p>
                </Link>
              </li>
              <li>
                <Link to="sign-up">
                  <button className="btn">Sử dụng DOLS miễn phí</button>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="authenHeaderResponsive1024">
        <Row>
          <Col>
            <ul>
              <a href="/">
                <li>
                  <p>
                    <img src={logo} alt="" />
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
                      <Panel header="Sản phẩm" key="1" showArrow={false}>
                        <ul className="firstType">
                          <a href="#">
                            <li>Tổng quát</li>
                          </a>
                          <a href="#">
                            <li>Thư viện mẫu</li>
                          </a>
                          <a href="#">
                            <li>Mẩu truyện của khách hàng</li>
                          </a>
                          <a href="#">
                            <li>Các kết nối</li>
                          </a>
                          <a href="#">
                            <button className="btn">
                              Tải DOLS <CloudDownloadOutlined />
                            </button>
                          </a>
                        </ul>
                      </Panel>
                      <Panel header="Giải pháp" key="2" showArrow={false}>
                        <ul className="secondType">
                          <li>
                            <small>Theo độ lớn nhóm</small>
                            <ul>
                              <a href="#">
                                <li>Tông quát</li>
                              </a>
                              <a href="#">
                                <li>Thư viện mẫu</li>
                              </a>
                              <a href="#">
                                <li>Mẩu truyện của khách hàng</li>
                              </a>
                              <a href="#">
                                <li>Các kết nối</li>
                              </a>
                            </ul>
                          </li>
                          <li>
                            <small>Dựa vào cách hoạt động nhóm</small>
                            <ul>
                              <a href="#">
                                <li>Thiết kế</li>
                              </a>
                              <a href="#">
                                <li>Kỹ thuật</li>
                              </a>
                              <a href="#">
                                <li>Sản phẩm</li>
                              </a>
                              <a href="#">
                                <li>Quản lý</li>
                              </a>
                            </ul>
                          </li>
                          <li>
                            <small>DOLS dành cho</small>
                            <ul>
                              <a href="#">
                                <li>Khởi nghiệp</li>
                              </a>
                              <a href="#">
                                <li>Làm tại nhà</li>
                              </a>
                              <a href="#">
                                <li>Học tập</li>
                              </a>
                              <a href="#">
                                <li>Phi lợi nhuận</li>
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
                            <li>Ghim trang web</li>
                          </a>
                        </ul>
                      </Panel>
                      <Panel
                        header={<Link to="pricing">Giá cả</Link>}
                        key="5"
                        showArrow={false}
                      ></Panel>
                      <Panel
                        header={<a href="#">Liên hệ bán hàng</a>}
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
