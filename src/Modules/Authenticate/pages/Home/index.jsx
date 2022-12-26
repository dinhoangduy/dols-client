import React from "react";
import { useState, useEffect, useRef } from "react";
import "./style.scss";
import logo from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";
// AntD
import { Layout, Menu, Col, Row, Space, Typography, Carousel } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import AuthenHeader from "../../../../Component/Common/AuthenHeader";
import AuthenFooter from "../../../../Component/Common/AuthenFooter";

//

function getItem(label, key) {
  return {
    label,
    key,
  };
}

const { Header, Content, Footer } = Layout;

const Home = () => {
  const language = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" },
  ];
  const carouselItem = [
    getItem("Trang chủ doanh nghiệp", "1"),
    getItem("Thiết kế tài liệu", "2"),
    getItem("Xuất bản trang web", "3"),
  ];

  const refCarousel = useRef(null);

  const onClick = (e) => {
    refCarousel.current.goTo(e.key - 1);
  };

  return (
    <>
      <AuthenHeader />

      <div className="mainPage">
        <Layout className="layout">
          <Content>
            <div className="site-layout-content">
              <Row className="mainSection">
                <Col flex="auto">
                  <div className="textIntro">
                    <h1>
                      Một không gian làm việc.
                      <br />
                      Cho mọi nhóm.
                    </h1>
                    <p>
                      Chúng tôi nhiều hơn chỉ là doc. Hay một table. Tùy chỉnh
                      DOLS để làm việc theo cách của bạn.
                    </p>
                  </div>
                  <Link to="/sign-up">
                    <button className="btnPrimary">
                      Sử dụng DOLS miễn phí
                    </button>
                  </Link>
                  <div className="textAssociate">
                    <p>Được tin bởi</p>
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
                    <h1>Hợp tác với không sự hỗn loạn</h1>
                    <p>
                      Kết nối với nhóm, dự án và docs ở DOLS - Để bạn có thể
                      hoàn thành một lần và hợp sức với nhau.
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
                    <h1>again Không cần phải hỏi "Cái này có gì vậy?" nữa</h1>
                    <p>
                      Các từ điển cũ không có giúp ích gì. Hay các docs nổi.
                      Trong DOLS, các việc hằng ngày và kiến thức của bạn sẽ
                      đồng hành - vì thế bạn sẽ không vào lạc hướng
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
                    <h1>Xây dựng quy trình làm việc theo ý bạn</h1>
                    <p>
                      Tùy chỉnh DOLS để làm việc theo ý bạn muốn. Chi cần kéo và
                      thả để tạo một bảng điều khiển, website, tài liệu, hoặc hệ
                      thống bạn cần.
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
                    <h1>
                      Hưởng lợi từ hệ sinh thái toàn cầu của những người sáng
                      tạo
                    </h1>
                    <p>
                      Lấy cảm hứng từ hàng ngàn sản phẩm do cộng đồng tạo ra -
                      mẫu, tích hợp và sự kiện.
                      <br />
                      Bạn sẽ không bao giờ muốn tài nguyên hoặc hỗ trợ.
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
                        Được xây dựng để sử dụng vô tận.
                        <br />
                        Trên tất cả các nhóm.
                      </h1>
                      <p>
                        DOLS giải quyết các vấn đề thường gặp và duy nhất cho
                        các team. Đây chỉ là chút ít.
                      </p>
                      <Link to="/sign-up">
                        <button className="btn">Sử dụng DOLS miễn phí</button>
                      </Link>
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
                        Bắt đầu với một mẫu.
                        <br />
                        Chỉnh sửa theo nhu cầu của bạn.
                      </h1>
                      <p>
                        Chọn trong hàng nghìn mẫu miễn phí đã có sẵn - cho công
                        việc và cuộc sống.
                      </p>
                      <button className="btn viewAll">
                        Xem tất cả mẫu <ArrowRightOutlined />
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
                        <button>Xem mẫu</button>
                      </a>
                    </div>
                    <div className="textWrapper">
                      <a href="">Trang chủ doanh nghiệp</a>
                    </div>
                  </Col>
                  <Col flex={1} className="secondaryTemplate">
                    <div className="imageWrapper">
                      <a href="">
                        <img
                          src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/4436AdRCPMLYAHECuw6y3/0329c1cf2f7a3f0eca8ba1156774bf63/Hero.png"
                          alt=""
                        />
                        <button>Xem mẫu</button>
                      </a>
                    </div>
                    <div className="textWrapper">
                      <a href="">Lộ trình</a>
                    </div>
                  </Col>
                  <Col flex={1} className="secondaryTemplate">
                    <div className="imageWrapper">
                      <a href="">
                        <img
                          src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/2tpiTr9meibfgSPFKexFjs/a3ae2e8911a8d956e7b5d392c33ef8f8/meeting-notes.png"
                          alt=""
                        />
                        <button>Xem mẫu</button>
                      </a>
                    </div>
                    <div className="textWrapper">
                      <a href="">Ghi chú cuộc họp</a>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="secondarySection">
                <Row className="firstRow">
                  <Col flex="auto">
                    <div className="secondaryText">
                      <h1>Được sử dụng bởi các nhóm sáng tạo nhất thế giới</h1>
                      <button className="btn viewAll">
                        Đọc tất cả các câu chuyện của khách hàng{" "}
                        <ArrowRightOutlined />
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
                          DOLS là một không gian làm việc thích nghi với nhau
                          cầu của bạn. Nó tối thiểu hoặc mạnh mẽ theo cách bạn
                          muốn.
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
                        <small>Giám đốc sản phẩm</small>
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
                          DOLS là cách dễ nhất để có được thông tin tập trung ở
                          đâu đó và truyền và cho người khác. Đối với chúng tôi,
                          đó là một điều cực kỳ quan trọng vì nửa nhóm tôi làm
                          việc tại nhà.
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
                        <small>Đồng sáng lập và Trưởng phòng Kỹ thuật</small>
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
                          DOLS tiện lợi sử dụng là một dấu ấn của nó. Nó giúp
                          bạn dễ dàng điều hướng thông tin và nhớ cái gì đó.
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
                        <small>Trưởng phòng Nhân sự</small>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <hr />

              <Row className="tertiarySection">
                <div className="imgWrapper">
                  <img src={logo} alt="" />
                </div>
                <div className="textWrapper">
                  <h1>Thử ngày hôm nay</h1>
                  <p>
                    Bắt đầu miễn phí. Thêm cả nhóm bạn với nhu cầu phát triển.
                  </p>
                  <button className="btn">Thử DOLS miễn phí</button>
                  <p>
                    Trong một nhóm lớn ? <u>Liên hệ bán hàng ngay</u>
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
      <AuthenFooter />
    </>
  );
};

export default Home;
