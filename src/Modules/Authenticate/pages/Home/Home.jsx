import React from "react";
import "./style.scss";

// AntD
import {
  Breadcrumb,
  Layout,
  Menu,
  Col,
  Divider,
  Row,
  Space,
  Typography,
  Button,
} from "antd";
//

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const Home = () => {
  return (
    <div className="mainPage">
      <Layout className="layout">
        <Content>
          <div className="site-layout-content">
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <Row className="mainSection">
                <Col flex="550px">
                  <div className="textIntro">
                    <h1>
                      One workspace.
                      <br />
                      Every team.
                    </h1>
                    <p>
                      We’re more than a doc. Or a table. Customize Notion to
                      work the way you do.
                    </p>
                  </div>
                  <button className="btnPrimary">Get Dols Free</button>
                  <div className="textAssociate">
                    <p>Trusted by teams at</p>
                  </div>
                  <div className="imgsAssociate">
                    <img
                      src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png"
                      alt=""
                    />
                    <img
                      src="https://images.ctfassets.net/spoqsaf9291f/248lpDOefbem7N1Q6QU9zn/ab900c553ee4e237a5901d799aa465ca/mixpanel.png"
                      alt=""
                    />
                  </div>
                </Col>
                <Col flex="auto" className="imgIntro">
                  {/* <img
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
                    alt=""
                  /> */}
                </Col>
              </Row>
              <Row>
                <Col flex="auto">Image</Col>
                <Col flex="300px">Text</Col>
              </Row>
            </Space>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
