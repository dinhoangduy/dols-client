import React from "react";
import { useState, useEffect, useRef } from "react";
import "./style.scss";

// AntD
import { Layout, Menu, Col, Row, Space, Typography, Carousel } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

//

function getItem(label, key) {
  return {
    label,
    key,
  };
}

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const Home = () => {
  const language = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" },
  ];
  const carouselItem = [
    getItem("Company home", "1"),
    getItem("Design docs", "2"),
    getItem("Website publishing", "3"),
  ];

  const refCarousel = useRef(null);

  const onClick = (e) => {
    refCarousel.current.goTo(e.key - 1);
  };

  return (
    <div className="mainPage">
      <Layout className="layout">
        <Content>
          <div className="site-layout-content">
            <Row className="mainSection">
              <Col flex="auto">
                <div className="textIntro">
                  <h1>
                    One workspace.
                    <br />
                    Every team.
                  </h1>
                  <p>
                    We’re more than a doc. Or a table. Customize Notion to work
                    the way you do.
                  </p>
                </div>
                <button className="btnPrimary">Get Dols Free</button>
                <div className="textAssociate">
                  <p>Trusted by teams at</p>
                </div>
                <Space
                  direction="horizontal"
                  size="middle"
                  className="imgsAssociate"
                >
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png"
                    alt=""
                  />
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/248lpDOefbem7N1Q6QU9zn/ab900c553ee4e237a5901d799aa465ca/mixpanel.png"
                    alt=""
                  />
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png"
                    alt=""
                  />
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/2Z03v7BH2brwtBG2qdA5dp/d6cd228d2f7b6048edcec9f4d5bcce3c/match.png"
                    alt=""
                  />
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/49e1CCRfYajrMwuXnrFQiZ/d129670f5f327eeb8f73a1ae9353d20c/monzo.png"
                    alt=""
                  />
                </Space>
              </Col>
              <Col flex="auto" className="imgIntro">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
                  alt=""
                />
              </Col>
            </Row>

            <Row className="primarySection">
              <Col flex="auto" className="primaryImage">
                <img
                  src="https://project-management.com/wp-content/uploads/2021/02/notion-pros-cons-screenshot-2022-1.png"
                  alt=""
                />
              </Col>
              <Col flex="750px">
                <div className="primaryText">
                  <img
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=128,quality=100/front-static/pages/product/spot/spot-team-up.png"
                    alt=""
                  />
                  <h1>Team up without the chaos</h1>
                  <p>
                    Connect your teams, projects, and docs in Notion — so you
                    can bust silos and move as one.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="primarySection">
              <Col flex="auto" className="primaryImage">
                <img
                  src="https://clickup.com/blog/wp-content/uploads/2022/06/notion.png"
                  alt=""
                />
              </Col>
              <Col flex="750px">
                <div className="primaryText">
                  <img
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/product/spot/spot-context.png"
                    alt=""
                  />
                  <h1>Never ask “What’s the context?” again</h1>
                  <p>
                    Stale wikis aren't helpful. Neither are floating docs. In
                    Notion, your daily work and knowledge live side by side — so
                    you never lose context.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="primarySection">
              <Col flex="auto" className="primaryImage">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7WqzIySKcRSHf9rrK2eD4TwRCnW8dxPVgsfwvsBAim_Slfc-7bEDln34vB5Np0rn0G7hmoCyz0YtBbQKk8PwG2KMqKBZtFrzw8Cu5btLhVlgZfT7rzziEqLUvYZqYa8yYPltrpuu2iZOS6lQtmq_yOnyRwRLM51DbnX_AeK-y2G82LO6nYmXq7zyABw/w539-h339/2.png"
                  alt=""
                />
              </Col>
              <Col flex="750px">
                <div className="primaryText">
                  <img
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=384,quality=100/front-static/pages/product/spot/spot-workflow.png"
                    alt=""
                  />
                  <h1>Build the workflow you want</h1>
                  <p>
                    Customize Notion to make it work the way you want it to.
                    Just drag and drop to craft the dashboard, website, doc, or
                    system you need.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="primarySection">
              <Col flex="auto" className="primaryImage">
                <img
                  src="https://media.glassdoor.com/template/l/3304926/notion-labs-template-1639769045149.jpg"
                  alt=""
                />
              </Col>
              <Col flex="750px">
                <div className="primaryText">
                  <img
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=64,quality=100/front-static/pages/product/spot/spot-ecosystem.png"
                    alt=""
                  />
                  <h1>Benefit from a global ecosystem of creators</h1>
                  <p>
                    Get inspiration from thousands of community-made templates,
                    integrations, and events.
                    <br />
                    You'll never want for resources or support.
                  </p>
                </div>
              </Col>
            </Row>

            <hr />

            <div className="secondarySection">
              <Row className="firstRow">
                <Col flex="auto">
                  <div className="secondaryText">
                    <h1>
                      Built for endless uses.
                      <br />
                      Across all teams.
                    </h1>
                    <p>
                      Notion solves problems common and unique to every team.
                      These are just a few.
                    </p>
                    <button className="btn">Get Dols Free</button>
                  </div>
                </Col>
                <Col flex="auto" className="secondaryImg">
                  <img
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/bookshelf-spot.png"
                    alt=""
                  />
                </Col>
              </Row>

              <Row className="secondRow">
                <Col flex="450px" className="secondaryMenu">
                  <Menu onClick={onClick} items={carouselItem} />
                </Col>
                <Col flex="auto" className="secondarySlideshow">
                  <Carousel
                    className="secondaryCarousel"
                    ref={refCarousel}
                    autoplay
                  >
                    <div>
                      <img
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/figma.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/design-docs/en-US.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/multiverse-v2.png"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </Col>
              </Row>
            </div>

            <div className="secondarySection">
              <Row className="firstRow">
                <Col flex="auto">
                  <div className="secondaryText">
                    <h1>
                      Start with a template.
                      <br />
                      Modify it however you need.
                    </h1>
                    <p>
                      Choose from thousands of free, pre-built setups — for work
                      and life.
                    </p>
                    <button className="btn viewAll">
                      See all template <ArrowRightOutlined />
                    </button>
                  </div>
                </Col>
                <Col flex="auto" className="secondaryImg">
                  <img
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/blocks-spot.png"
                    alt=""
                  />
                </Col>
              </Row>

              <Row className="secondRow">
                <Col flex={1} className="secondaryTemplate">
                  <div className="imageWrapper">
                    <a href="">
                      <img
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/3rgtX4i8gix6nmIZGPXx10/3b828a7354b27fe894ae5ad145bc44e8/Hero.jpg"
                        alt=""
                      />
                      <button>View template</button>
                    </a>
                  </div>
                  <div className="textWrapper">
                    <a href="">Company home</a>
                  </div>
                </Col>
                <Col flex={1} className="secondaryTemplate">
                  <div className="imageWrapper">
                    <a href="">
                      <img
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/4436AdRCPMLYAHECuw6y3/0329c1cf2f7a3f0eca8ba1156774bf63/Hero.png"
                        alt=""
                      />
                      <button>View template</button>
                    </a>
                  </div>
                  <div className="textWrapper">
                    <a href="">Roadmap</a>
                  </div>
                </Col>
                <Col flex={1} className="secondaryTemplate">
                  <div className="imageWrapper">
                    <a href="">
                      <img
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/2tpiTr9meibfgSPFKexFjs/a3ae2e8911a8d956e7b5d392c33ef8f8/meeting-notes.png"
                        alt=""
                      />
                      <button>View template</button>
                    </a>
                  </div>
                  <div className="textWrapper">
                    <a href="">Meeting notes</a>
                  </div>
                </Col>
              </Row>
            </div>

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
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/illustrations/teamwork.png"
                    alt=""
                  />
                </Col>
              </Row>

              <Row className="secondRow">
                <Col flex={1} className="secondaryTemplate">
                  <div className="imageAssociateWrapper">
                    <img
                      src="https://www.notion.so/front-static/shared/logos/color/match-v2.png"
                      alt=""
                    />
                  </div>
                  <div className="textWrapper">
                    <blockquote>
                      <p>
                        Notion is a workspace that adapts to your needs. It’s as
                        minimal or as powerful as you need it to be.
                      </p>
                    </blockquote>
                  </div>
                  <div className="commentorWrapper">
                    <img
                      src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/rahim-makani.png"
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
                      src="https://www.notion.so/front-static/shared/logos/color/loom.png"
                      alt=""
                    />
                  </div>
                  <div className="textWrapper">
                    <blockquote>
                      <p>
                        Notion continues to be the easiest way to get
                        information centralized somewhere and shout it out to
                        someone else. For us, that’s extremely important because
                        half our team is remote.
                      </p>
                    </blockquote>
                  </div>
                  <div className="commentorWrapper">
                    <img
                      src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/vinay-hiremath.png"
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
                      src="https://www.notion.so/front-static/shared/logos/color/figma.png"
                      alt=""
                    />
                  </div>
                  <div className="textWrapper">
                    <blockquote>
                      <p>
                        Notion’s ease of use is one of its hallmarks. It helps
                        you visually navigate content and remember where
                        something is.
                      </p>
                    </blockquote>
                  </div>
                  <div className="commentorWrapper">
                    <img
                      src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/marie-szuts.png"
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

            <Row className="tertiarySection">
              <div className="imgWrapper">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/icons/notion-app-icon-3d.png"
                  alt=""
                />
              </div>
              <div className="textWrapper">
                <h1>Try Notion today</h1>
                <p>
                  Get started for free. Add your whole team as your needs grow.
                </p>
                <button className="btn">Try Notion Free</button>
                <p>
                  On a big team? <u>Contact sales</u>
                </p>
              </div>
              <div className="backgroundImg">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=384,quality=100/front-static/pages/product/sitting-character.png"
                  alt=""
                />
              </div>
            </Row>

            <hr />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
