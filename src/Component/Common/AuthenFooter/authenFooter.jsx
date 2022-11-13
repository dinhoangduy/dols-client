import React from "react";
import vite from "./vite.svg";
import "./style.scss";

// AntD
import { Col, Row } from "antd";
import {
  TwitterOutlined,
  LinkedinFilled,
  FacebookFilled,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

const AuthenFooter = () => {
  return (
    <div className="footerAuthenPage">
      <Row className="footerSection">
        <Col flex={1}>
          <p>
            <img src={vite} alt="" />
            DOLS
          </p>
        </Col>
        <Col flex={1}>
          <p>Product</p>
          <ul>
            <a href="#">
              <li>Overview</li>
            </a>
            <a href="#">
              <li>Pricing</li>
            </a>
            <a href="#">
              <li>Customer stories</li>
            </a>
            <a href="#">
              <li>Desktop apps</li>
            </a>
            <a href="#">
              <li>Mobile apps</li>
            </a>
            <a href="#">
              <li>Web Clipper</li>
            </a>
            <a href="#">
              <li>Security</li>
            </a>
            <a href="#">
              <li>Terms & privacy</li>
            </a>
          </ul>
        </Col>
        <Col flex={1}>
          <p>Notion for</p>
          <ul>
            <a href="#">
              <li>Enterprise</li>
            </a>
            <a href="#">
              <li>Small business</li>
            </a>
            <a href="#">
              <li>Personal use</li>
            </a>
            <a href="#">
              <li>Remote work</li>
            </a>
            <a href="#">
              <li>Startups</li>
            </a>
            <a href="#">
              <li>Education</li>
            </a>
            <a href="#">
              <li>Nonprofits</li>
            </a>
            <a href="#">
              <li>Engineering</li>
            </a>
            <a href="#">
              <li>Product</li>
            </a>
            <a href="#">
              <li>Design</li>
            </a>
            <a href="#">
              <li>Managers</li>
            </a>
          </ul>
        </Col>
        <Col flex={1}>
          <p>Resources</p>
          <ul>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Guides & tutorials</li>
            </a>
            <a href="#">
              <li>Help center</li>
            </a>
            <a href="#">
              <li>Webinars</li>
            </a>
            <a href="#">
              <li>Template gallery</li>
            </a>
            <a href="#">
              <li>Community</li>
            </a>
            <a href="#">
              <li>What’s new</li>
            </a>
            <a href="#">
              <li>Find a consultant</li>
            </a>
            <a href="#">
              <li>API docs</li>
            </a>
            <a href="#">
              <li>Switch from Evernote</li>
            </a>
            <a href="#">
              <li>Switch from Confluence</li>
            </a>
          </ul>
        </Col>
        <Col flex={1}>
          <p>Templates</p>
          <ul>
            <a href="#">
              <li>Company home</li>
            </a>
            <a href="#">
              <li>Meeting notes</li>
            </a>
            <a href="#">
              <li>To-dos</li>
            </a>
            <a href="#">
              <li>Weekly agenda</li>
            </a>
            <a href="#">
              <li>Docs</li>
            </a>
            <a href="#">
              <li>Roadmap</li>
            </a>
            <a href="#">
              <li>Design system</li>
            </a>
            <a href="#">
              <li>New hire onboarding</li>
            </a>
            <a href="#">
              <li>Product wiki</li>
            </a>
            <a href="#">
              <li>Content calendar</li>
            </a>
          </ul>
        </Col>
        <Col flex={1}>
          <p>Company</p>
          <ul>
            <a href="#">
              <li>About us</li>
            </a>
            <a href="#">
              <li>Careers</li>
            </a>
            <a href="#">
              <li>Media kit</li>
            </a>
            <a href="#">
              <li>Contact sales</li>
            </a>
            <a href="#">
              <li>Contact support</li>
            </a>
            <a href="#">
              <li>Email us</li>
            </a>
          </ul>
        </Col>
      </Row>

      <Row className="footerFinal">
        <Col flex="auto" className="col">
          <a href="#">
            <p>Language</p>
          </a>
          <a href="#">
            <p>Cookie settings</p>
          </a>
          <a href="#">
            <p>Status</p>
          </a>
          <p>©2022 Notion Labs, Inc.</p>
        </Col>
        <Col flex="100px" className="col">
          <a href="">
            <TwitterOutlined />
          </a>
          <a href="">
            <LinkedinFilled />
          </a>
          <a href="">
            <FacebookFilled />
          </a>
          <a href="">
            <InstagramOutlined />
          </a>
          <a href="">
            <YoutubeFilled />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AuthenFooter;
