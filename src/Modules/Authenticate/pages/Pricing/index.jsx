import React from "react";
import { useState, useEffect, useRef } from "react";
import "./style.scss";

// AntD
import { Layout, Col, Row, Tooltip, Table, Collapse } from "antd";
import {
  CheckOutlined,
  QuestionCircleOutlined,
  WechatOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
//

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

const Pricing = () => {
  // Table content
  const columns1 = [
    {
      title: <p className="headerText gray">Usage</p>,
      dataIndex: "usage",
      key: "usage",
      render: (text) => (
        <p className="overallText gray">
          {text} <QuestionCircleOutlined />
        </p>
      ),
    },
    {
      title: <p className="headerText orange">Personal</p>,
      dataIndex: "personal",
      key: "personal",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText blue">Personal Pro</p>,
      dataIndex: "personalpro",
      key: "personalpro",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText red">Team</p>,
      dataIndex: "team",
      key: "team",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText purple">Enterprise</p>,
      dataIndex: "enterprise",
      key: "enterprise",
      render: (text) => <p className="overallText">{text}</p>,
    },
  ];
  const data1 = [
    {
      key: "1",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          Pages & blocks
        </Tooltip>
      ),
      personal: "Unlimited",
      personalpro: "Unlimited",
      team: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      key: "2",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          Members
        </Tooltip>
      ),
      personal: "Just you",
      personalpro: "Just you",
      team: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      key: "3",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          Guests
        </Tooltip>
      ),
      personal: "5",
      personalpro: "Unlimited",
      team: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      key: "4",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          File uploads
        </Tooltip>
      ),
      personal: "5 MB",
      personalpro: "Unlimited",
      team: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      key: "5",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          Version history
        </Tooltip>
      ),
      personal: "",
      personalpro: "30 days",
      team: "30 days",
      enterprise: "Forever",
    },
  ];
  const columns2 = [
    {
      title: <p className="headerText gray">Collaboration</p>,
      dataIndex: "collaboration",
      key: "collaboration",
      render: (text) => (
        <p className="overallText gray">
          {text} <QuestionCircleOutlined />
        </p>
      ),
    },
    {
      title: <p className="headerText orange">Personal</p>,
      dataIndex: "personal",
      key: "personal",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText blue">Personal Pro</p>,
      dataIndex: "personalpro",
      key: "personalpro",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText red">Team</p>,
      dataIndex: "team",
      key: "team",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText purple">Enterprise</p>,
      dataIndex: "enterprise",
      key: "enterprise",
      render: (text) => <p className="overallText">{text}</p>,
    },
  ];
  const data2 = [
    {
      key: "1",
      collaboration: (
        <Tooltip placement="right" title="lorem ipsum">
          Real-time collaboration
        </Tooltip>
      ),
      personal: <CheckOutlined />,
      personalpro: <CheckOutlined />,
      team: <CheckOutlined />,
      enterprise: <CheckOutlined />,
    },
    {
      key: "2",
      collaboration: (
        <Tooltip placement="right" title="lorem ipsum">
          Link sharing
        </Tooltip>
      ),
      personal: <CheckOutlined />,
      personalpro: <CheckOutlined />,
      team: <CheckOutlined />,
      enterprise: <CheckOutlined />,
    },
    {
      key: "3",
      collaboration: (
        <Tooltip placement="right" title="lorem ipsum">
          Collaborative workspace
        </Tooltip>
      ),
      personal: "",
      personalpro: "",
      team: <CheckOutlined />,
      enterprise: <CheckOutlined />,
    },
    {
      key: "4",
      collaboration: (
        <Tooltip placement="right" title="lorem ipsum">
          Teamspaces (open & closed)
        </Tooltip>
      ),
      personal: "",
      personalpro: "",
      team: <CheckOutlined />,
      enterprise: <CheckOutlined />,
    },
    {
      key: "5",
      collaboration: (
        <Tooltip placement="right" title="lorem ipsum">
          Teamspaces (private)
        </Tooltip>
      ),
      personal: "",
      personalpro: "",
      team: "",
      enterprise: <CheckOutlined />,
    },
    {
      key: "6",
      collaboration: (
        <Tooltip placement="right" title="lorem ipsum">
          Advanced teamspace permissions
        </Tooltip>
      ),
      personal: "",
      personalpro: "",
      team: "",
      enterprise: <CheckOutlined />,
    },
  ];

  return (
    <div className="pricingPage">
      <Layout className="layout">
        <Content>
          <Row className="introSection">
            <Col flex="auto">
              <div className="textWrap">
                <p>Pricing</p>
                <h1>
                  One tool for your whole company.
                  <br />
                  Free for teams to try.
                </h1>
              </div>
              <div className="associateWrap">
                <p>TRUSTED BY TEAMS AT</p>
                <div className="imgWrap">
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png"
                    alt=""
                  />
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/2nQSBAKP1EbkLsnE35AI4H/1108e8b62f1944c8e9c2439e2f5e9083/loom_logo_lockup_color.png"
                    alt=""
                  />
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/5fggvOdGwBZXOrbERdceA1/b4c79399198f41b2cba7286987e8656c/kin-carta.png"
                    alt=""
                  />
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/6AabaXna2K3eJLtU4k2yeq/9b9e2e7bf029f2cc8047a5b27cac1208/curology.png"
                    alt=""
                  />
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="cardSection">
            <Col>
              <div className="extraWrap hidden">
                <p>Invite your team for free!</p>
              </div>
              <div className="cardWrap">
                <div className="titleWrap">
                  <img
                    src="https://www.Vite.so/front-static/pages/pricing/personal.png"
                    alt=""
                  />
                  <h1 className="orange">Personal</h1>
                  <p>For organizing every corner of your life.</p>
                </div>
                <div className="priceWrap">
                  <h1>Free</h1>
                  <small>for individuals</small>
                </div>
                <button className="btn">Get Started</button>
                <ul className="desWrap">
                  <Tooltip
                    title="Blocks are pieces of content you add to a page, like a paragraph, a to-do item, an image, an embedded file, etc. Blocks are now unlimited for all plans. A 1,000 block limit applies for Team Plan trials."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Unlimited pages & blocks
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Guests are individuals external to your workspace, such as friends, family, contractors or clients. Collaborate privately by inviting guests on individual pages."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Share with 5 guests
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Vite runs in your web browser with no installation required. Or download our app for Mac, Windows, iOS, or Android."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Sync across devices
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Access the Vite API to build custom integrations for your team."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      API
                    </li>
                  </Tooltip>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="extraWrap hidden">
                <p>Invite your team for free!</p>
              </div>
              <div className="cardWrap">
                <div className="titleWrap">
                  <img
                    src="https://www.Vite.so/front-static/pages/pricing/personal.png"
                    alt=""
                  />
                  <h1 className="blue">Personal</h1>
                  <p>For organizing every corner of your life.</p>
                </div>
                <div className="priceWrap">
                  <h1>Free</h1>
                  <small>for individuals</small>
                </div>
                <button className="btn">Get Started</button>
                <ul className="desWrap">
                  <Tooltip
                    title="Blocks are pieces of content you add to a page, like a paragraph, a to-do item, an image, an embedded file, etc. Blocks are now unlimited for all plans. A 1,000 block limit applies for Team Plan trials."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Unlimited pages & blocks
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Guests are individuals external to your workspace, such as friends, family, contractors or clients. Collaborate privately by inviting guests on individual pages."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Share with 5 guests
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Vite runs in your web browser with no installation required. Or download our app for Mac, Windows, iOS, or Android."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Sync across devices
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Access the Vite API to build custom integrations for your team."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      API
                    </li>
                  </Tooltip>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="extraWrap">
                <p className="red">Invite your team for free!</p>
              </div>
              <div className="cardWrap">
                <div className="titleWrap">
                  <img
                    src="https://www.Vite.so/front-static/pages/pricing/personal.png"
                    alt=""
                  />
                  <h1 className="red">Personal</h1>
                  <p>For organizing every corner of your life.</p>
                </div>
                <div className="priceWrap">
                  <h1>Free</h1>
                  <small>for individuals</small>
                </div>
                <button className="btn extra">Get Started</button>
                <ul className="desWrap">
                  <Tooltip
                    title="Blocks are pieces of content you add to a page, like a paragraph, a to-do item, an image, an embedded file, etc. Blocks are now unlimited for all plans. A 1,000 block limit applies for Team Plan trials."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Unlimited pages & blocks
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Guests are individuals external to your workspace, such as friends, family, contractors or clients. Collaborate privately by inviting guests on individual pages."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Share with 5 guests
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Vite runs in your web browser with no installation required. Or download our app for Mac, Windows, iOS, or Android."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Sync across devices
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Access the Vite API to build custom integrations for your team."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      API
                    </li>
                  </Tooltip>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="extraWrap hidden">
                <p>Invite your team for free!</p>
              </div>
              <div className="cardWrap">
                <div className="titleWrap">
                  <img
                    src="https://www.Vite.so/front-static/pages/pricing/personal.png"
                    alt=""
                  />
                  <h1 className="purple">Personal</h1>
                  <p>For organizing every corner of your life.</p>
                </div>
                <div className="priceWrap">
                  <h1>Free</h1>
                  <small>for individuals</small>
                </div>
                <button className="btn">Get Started</button>
                <ul className="desWrap">
                  <Tooltip
                    title="Blocks are pieces of content you add to a page, like a paragraph, a to-do item, an image, an embedded file, etc. Blocks are now unlimited for all plans. A 1,000 block limit applies for Team Plan trials."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Unlimited pages & blocks
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Guests are individuals external to your workspace, such as friends, family, contractors or clients. Collaborate privately by inviting guests on individual pages."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Share with 5 guests
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Vite runs in your web browser with no installation required. Or download our app for Mac, Windows, iOS, or Android."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      Sync across devices
                    </li>
                  </Tooltip>
                  <Tooltip
                    title="Access the Vite API to build custom integrations for your team."
                    placement="right"
                  >
                    <li>
                      <CheckOutlined />
                      API
                    </li>
                  </Tooltip>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="compareSection">
            <Col flex="auto">
              <h1 className="tableTitle">Compare plans & features</h1>
              <div className="tableWrap">
                <Table
                  columns={columns1}
                  dataSource={data1}
                  bordered
                  pagination={false}
                />
                <Table
                  columns={columns2}
                  dataSource={data2}
                  bordered
                  pagination={false}
                />
              </div>

              <Row className="miniPriceWrap">
                <Col flex={8}></Col>
                <Col className="miniPrice" flex="auto">
                  <h1 className="title orange">Personal</h1>
                  <div className="price">
                    <h1>Free</h1>
                    <small>for individuals</small>
                  </div>
                  <button className="btn">Get started</button>
                </Col>
                <Col className="miniPrice" flex="auto">
                  <h1 className="title blue">Personal Pro</h1>
                  <div className="price">
                    <h1>$4</h1>
                    <small>
                      for individuals
                      <br />
                      billed annually
                      <br />
                    </small>
                    <p>
                      <b>$5</b> billed monthly
                    </p>
                  </div>
                  <button className="btn">Try it free</button>
                </Col>
                <Col className="miniPrice" flex="auto">
                  <h1 className="title red">Team</h1>
                  <div className="price">
                    <h1>$8</h1>
                    <small>
                      per user / month
                      <br />
                      billed annually
                      <br />
                    </small>
                    <p>
                      <b>$5</b> billed monthly
                    </p>
                  </div>
                  <button className="btn extra">Try it free</button>
                </Col>
                <Col className="miniPrice" flex="auto">
                  <h1 className="title purple">Enterprise</h1>
                  <div className="price">
                    <WechatOutlined />
                  </div>
                  <button className="btn">Contact sales</button>
                </Col>
              </Row>
            </Col>
          </Row>

          <hr />

          <div className="secondarySection">
            <Row className="firstRow">
              <Col flex="auto">
                <div className="secondaryText">
                  <h1>Used by the world’s most innovative teams</h1>
                  <button className="btn viewAll">
                    Read all customer stories <ArrowRightOutlined />
                  </button>
                </div>
              </Col>
              <Col flex="auto" className="secondaryImg">
                <img
                  src="https://www.Vite.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/illustrations/teamwork.png"
                  alt=""
                />
              </Col>
            </Row>

            <Row className="secondRow">
              <Col flex={1} className="secondaryTemplate">
                <div className="imageAssociateWrapper">
                  <img
                    src="https://www.Vite.so/front-static/shared/logos/color/match-v2.png"
                    alt=""
                  />
                </div>
                <div className="textWrapper">
                  <blockquote>
                    <p>
                      Vite is a workspace that adapts to your needs. It’s as
                      minimal or as powerful as you need it to be.
                    </p>
                  </blockquote>
                </div>
                <div className="commentorWrapper">
                  <img
                    src="https://www.Vite.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/rahim-makani.png"
                    alt=""
                  />
                  <div className="text">
                    <p>Rahim Makani</p>
                    <small>Director of Product</small>
                  </div>
                </div>
              </Col>
              <Col flex={1} className="secondaryTemplate">
                <div className="imageAssociateWrapper">
                  <img
                    src="https://www.Vite.so/front-static/shared/logos/color/loom.png"
                    alt=""
                  />
                </div>
                <div className="textWrapper">
                  <blockquote>
                    <p>
                      Vite continues to be the easiest way to get information
                      centralized somewhere and shout it out to someone else.
                      For us, that’s extremely important because half our team
                      is remote.
                    </p>
                  </blockquote>
                </div>
                <div className="commentorWrapper">
                  <img
                    src="https://www.Vite.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/vinay-hiremath.png"
                    alt=""
                  />
                  <div className="text">
                    <p>Vinay Hiremath</p>
                    <small>Co-founder and Head of Engineering</small>
                  </div>
                </div>
              </Col>
              <Col flex={1} className="secondaryTemplate">
                <div className="imageAssociateWrapper">
                  <img
                    src="https://www.Vite.so/front-static/shared/logos/color/figma.png"
                    alt=""
                  />
                </div>
                <div className="textWrapper">
                  <blockquote>
                    <p>
                      Vite’s ease of use is one of its hallmarks. It helps you
                      visually navigate content and remember where something is.
                    </p>
                  </blockquote>
                </div>
                <div className="commentorWrapper">
                  <img
                    src="https://www.Vite.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/marie-szuts.png"
                    alt=""
                  />
                  <div className="text">
                    <p>Marie Szuts</p>
                    <small>Head of People Ops</small>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <hr />

          <Row className="questionSection">
            <Col flex="auto">
              <div className="titleWrap">
                <h1>Questions & answers</h1>
                <p>
                  Can’t find the answer here? <a href="#">Contact support</a>
                </p>
              </div>
              <div className="collapseWrap">
                <Collapse bordered={false}>
                  <Panel
                    header="What happens when I go over the guest limit on my Personal Plan"
                    key="1"
                  >
                    <p>
                      Upgrade to the Personal Pro Plan for unlimited guests, or
                      the Team Plan if you collaborate with the same group of
                      people automatically. You can also review and remove
                      inactive guests in Settings & Members.
                    </p>
                  </Panel>
                  <Panel
                    header="How can my team try out Dols for free?"
                    key="2"
                  >
                    <p>
                      We want to make it easy for you to take Vite for a spin
                      with multiple members before you start paying. Here's how
                      to do that:
                    </p>
                    <ul>
                      <li>
                        <p>
                          Create a new Vite workspace, and select Team as the
                          type when asked.
                        </p>
                      </li>
                      <li>
                        <p>
                          You'll be enrolled in a Team Plan free trial that
                          gives you access to Team Plan features with trial
                          limits on block content, guests and version history.
                          When you hit those limits, you can upgrade.
                        </p>
                      </li>
                    </ul>
                  </Panel>
                  <Panel
                    header="What happens when I go over the block storage limit on my Team Trial"
                    key="3"
                  >
                    <p>
                      You can still read, edit, and organize existing content
                      blocks as usual, but you won’t be able to add new content
                      blocks.
                      <br />
                      However, you can delete existing content blocks to free up
                      your storage.
                    </p>
                  </Panel>
                </Collapse>
                <div className="smallText">
                  <small>Still have more questions?</small>
                  <small>
                    Learn more in our <a href="#">help center</a>.
                  </small>
                </div>
              </div>
            </Col>
          </Row>

          <hr />

          <Row className="tertiarySection">
            <div className="imgWrapper">
              <img
                src="https://www.Vite.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/icons/Vite-app-icon-3d.png"
                alt=""
              />
            </div>
            <div className="textWrapper">
              <h1>Try Vite today</h1>
              <p>
                Get started for free. Add your whole team as your needs grow.
              </p>
              <button className="btn">Try Vite Free</button>
              <p>
                On a big team? <u>Contact sales</u>
              </p>
            </div>
            <div className="backgroundImg">
              <img
                src="https://www.Vite.so/cdn-cgi/image/format=auto,width=384,quality=100/front-static/pages/product/sitting-character.png"
                alt=""
              />
            </div>
          </Row>

          <hr />
        </Content>
      </Layout>
    </div>
  );
};

export default Pricing;
