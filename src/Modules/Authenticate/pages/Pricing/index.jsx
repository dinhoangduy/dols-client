import React from "react";
import { useState, useEffect, useRef } from "react";
import "./style.scss";
import vite from "./vite.svg";
import AuthenHeader from "../../../../Component/Common/AuthenHeader";
import AuthenFooter from "../../../../Component/Common/AuthenFooter";

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
      title: <p className="headerText gray">Được dùng</p>,
      dataIndex: "usage",
      key: "usage",
      render: (text) => (
        <p className="overallText gray">
          {text} <QuestionCircleOutlined />
        </p>
      ),
    },
    {
      title: <p className="headerText orange">Cá nhân</p>,
      dataIndex: "personal",
      key: "personal",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText blue">Cá nhân PRO</p>,
      dataIndex: "personalpro",
      key: "personalpro",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText red">Nhóm</p>,
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
          Trang & khối
        </Tooltip>
      ),
      personal: "Không giới hạn",
      personalpro: "Không giới hạn",
      team: "Không giới hạn",
      enterprise: "Không giới hạn",
    },
    {
      key: "2",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          Các thành viên
        </Tooltip>
      ),
      personal: "Chỉ bạn",
      personalpro: "Chỉ bạn",
      team: "Không giới hạn",
      enterprise: "Không giới hạn",
    },
    {
      key: "3",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          Khách
        </Tooltip>
      ),
      personal: "5",
      personalpro: "Không giới hạn",
      team: "Không giới hạn",
      enterprise: "Không giới hạn",
    },
    {
      key: "4",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          Tải lên tệp
        </Tooltip>
      ),
      personal: "5 MB",
      personalpro: "Không giới hạn",
      team: "Không giới hạn",
      enterprise: "Không giới hạn",
    },
    {
      key: "5",
      usage: (
        <Tooltip placement="right" title="lorem ipsum">
          Lịch sử phiên bản
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
      title: <p className="headerText gray">Sự hợp tác</p>,
      dataIndex: "collaboration",
      key: "collaboration",
      render: (text) => (
        <p className="overallText gray">
          {text} <QuestionCircleOutlined />
        </p>
      ),
    },
    {
      title: <p className="headerText orange">Cá nhân</p>,
      dataIndex: "personal",
      key: "personal",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText blue">Cá nhân PRO</p>,
      dataIndex: "personalpro",
      key: "personalpro",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText red">Nhóm</p>,
      dataIndex: "team",
      key: "team",
      render: (text) => <p className="overallText">{text}</p>,
    },
    {
      title: <p className="headerText purple">Doanh nghiệp</p>,
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
          Hợp tác thời gian thực
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
          Chia sẻ liên kết
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
          Không gian làm việc cộng tác
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
          Không gian nhóm (Mở & đóng)
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
          Không gian nhóm (Riêng tư)
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
          Quyền không gian nhóm nâng cao
        </Tooltip>
      ),
      personal: "",
      personalpro: "",
      team: "",
      enterprise: <CheckOutlined />,
    },
  ];

  return (
    <>
      <AuthenHeader />
      <div className="pricingPage">
        <Layout className="layout">
          <Content>
            <Row className="introSection">
              <Col flex="auto">
                <div className="textWrap">
                  <p>Giá cả</p>
                  <h1>
                    Một công cụ cho toàn bộ công ty của bạn.
                    <br />
                    Miễn phí cho các đội dùng thử.
                  </h1>
                </div>
                <div className="associateWrap">
                  <p>ĐƯỢC TIN BỞI</p>
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
                  <p>Mời nhóm của bạn miễn phí!</p>
                </div>
                <div className="cardWrap">
                  <div className="titleWrap">
                    <img
                      src="https://www.notion.so/front-static/pages/pricing/personal.png"
                      alt=""
                    />
                    <h1 className="orange">Cá nhân</h1>
                    <p>Để tổ chức mọi ngóc ngách trong cuộc sống của bạn.</p>
                  </div>
                  <div className="priceWrap">
                    <h1>Miễn phí</h1>
                    <small>Cho cá nhân</small>
                  </div>
                  <button className="btn">Bắt đầu</button>
                  <ul className="desWrap">
                    <Tooltip
                      title="Các khối là những phần nội dung bạn thêm vào một trang, chẳng hạn như một đoạn văn, một mục việc cần làm, một hình ảnh, một tệp nhúng, v.v. Các khối hiện không giới hạn cho tất cả các gói. Giới hạn 1.000 khối áp dụng cho các thử nghiệm Kế hoạch nhóm."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Trang & khối không giới hạn
                      </li>
                    </Tooltip>
                    <Tooltip title="Chia sẻ với 5 khách" placement="right">
                      <li>
                        <CheckOutlined />
                        Chia sẻ với 5 khách
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="DOLS chạy trong trình duyệt web của bạn mà không cần cài đặt. Hoặc tải ứng dụng của chúng tôi cho Mac, Windows, iOS, or Android."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Đồng bộ hóa trên các thiết bị
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="Truy cập API DOLS để tạo tích hợp tùy chỉnh cho nhóm của bạn."
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
                  <p>Mời nhóm của bạn miễn phí!</p>
                </div>
                <div className="cardWrap">
                  <div className="titleWrap">
                    <img
                      src="https://www.notion.so/front-static/pages/pricing/personal.png"
                      alt=""
                    />
                    <h1 className="blue">Cá nhân</h1>
                    <p>Để tổ chức mọi ngóc ngách trong cuộc sống của bạn.</p>
                  </div>
                  <div className="priceWrap">
                    <h1>Miễn phí</h1>
                    <small>Cho cá nhân</small>
                  </div>
                  <button className="btn">Bắt đầu</button>
                  <ul className="desWrap">
                    <Tooltip
                      title="Các khối là những phần nội dung bạn thêm vào một trang, chẳng hạn như một đoạn văn, một mục việc cần làm, một hình ảnh, một tệp nhúng, v.v. Các khối hiện không giới hạn cho tất cả các gói. Giới hạn 1.000 khối áp dụng cho các thử nghiệm Kế hoạch nhóm."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Trang & khối không giới hạn
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="Khách là những cá nhân bên ngoài không gian làm việc của bạn, chẳng hạn như bạn bè, gia đình, nhà thầu hoặc khách hàng. Cộng tác riêng tư bằng cách mời khách trên các trang cá nhân."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Chia sẻ với 5 khách
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="DOLS chạy trong trình duyệt web của bạn mà không cần cài đặt. Hoặc tải ứng dụng của chúng tôi cho Mac, Windows, iOS, or Android."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Đồng bộ hóa trên các thiết bị
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="Truy cập API DOLS để tạo tích hợp tùy chỉnh cho nhóm của bạn."
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
                  <p className="red">Mời nhóm của bạn miễn phí!</p>
                </div>
                <div className="cardWrap">
                  <div className="titleWrap">
                    <img
                      src="https://www.notion.so/front-static/pages/pricing/personal.png"
                      alt=""
                    />
                    <h1 className="red">Cá nhân</h1>
                    <p>Để tổ chức mọi ngóc ngách trong cuộc sống của bạn.</p>
                  </div>
                  <div className="priceWrap">
                    <h1>Miễn phí</h1>
                    <small>Cho cá nhân</small>
                  </div>
                  <button className="btn extra">Bắt đầu</button>
                  <ul className="desWrap">
                    <Tooltip
                      title="Các khối là những phần nội dung bạn thêm vào một trang, chẳng hạn như một đoạn văn, một mục việc cần làm, một hình ảnh, một tệp nhúng, v.v. Các khối hiện không giới hạn cho tất cả các gói. Giới hạn 1.000 khối áp dụng cho các thử nghiệm Kế hoạch nhóm."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Trang & khối không giới hạn
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="Khách là những cá nhân bên ngoài không gian làm việc của bạn, chẳng hạn như bạn bè, gia đình, nhà thầu hoặc khách hàng. Cộng tác riêng tư bằng cách mời khách trên các trang cá nhân."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Chia sẻ với 5 khách
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="DOLS chạy trong trình duyệt web của bạn mà không cần cài đặt. Hoặc tải ứng dụng của chúng tôi cho Mac, Windows, iOS, or Android."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Đồng bộ hóa trên các thiết bị
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="Truy cập API DOLS để tạo tích hợp tùy chỉnh cho nhóm của bạn."
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
                  <p>Mời nhóm của bạn miễn phí!</p>
                </div>
                <div className="cardWrap">
                  <div className="titleWrap">
                    <img
                      src="https://www.notion.so/front-static/pages/pricing/personal.png"
                      alt=""
                    />
                    <h1 className="purple">Personal</h1>
                    <p>Để tổ chức mọi ngóc ngách trong cuộc sống của bạn.</p>
                  </div>
                  <div className="priceWrap">
                    <h1>Miễn phí</h1>
                    <small>Cho cá nhân</small>
                  </div>
                  <button className="btn">Bắt đầu</button>
                  <ul className="desWrap">
                    <Tooltip
                      title="Các khối là những phần nội dung bạn thêm vào một trang, chẳng hạn như một đoạn văn, một mục việc cần làm, một hình ảnh, một tệp nhúng, v.v. Các khối hiện không giới hạn cho tất cả các gói. Giới hạn 1.000 khối áp dụng cho các thử nghiệm Kế hoạch nhóm."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Trang & khối không giới hạn
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="Khách là những cá nhân bên ngoài không gian làm việc của bạn, chẳng hạn như bạn bè, gia đình, nhà thầu hoặc khách hàng. Cộng tác riêng tư bằng cách mời khách trên các trang cá nhân."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Chia sẻ với 5 khách
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="DOLS chạy trong trình duyệt web của bạn mà không cần cài đặt. Hoặc tải ứng dụng của chúng tôi cho Mac, Windows, iOS, or Android."
                      placement="right"
                    >
                      <li>
                        <CheckOutlined />
                        Đồng bộ hóa trên các thiết bị
                      </li>
                    </Tooltip>
                    <Tooltip
                      title="Truy cập API DOLS để tạo tích hợp tùy chỉnh cho nhóm của bạn."
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
                <h1 className="tableTitle">So sánh các gói & tính năng</h1>
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
                    <h1 className="title orange">Cá nhân</h1>
                    <div className="price">
                      <h1>Miễn phí</h1>
                      <small>Cho cá nhân</small>
                    </div>
                    <button className="btn">Bắt đầu</button>
                  </Col>
                  <Col className="miniPrice" flex="auto">
                    <h1 className="title blue">Cá nhân PRO</h1>
                    <div className="price">
                      <h1>$4</h1>
                      <small>
                        Cho cá nhân
                        <br />
                        thanh toán hàng năm
                        <br />
                      </small>
                      <p>
                        <b>$5</b> thanh toán hàng tháng
                      </p>
                    </div>
                    <button className="btn">Dùng thử miễn phí</button>
                  </Col>
                  <Col className="miniPrice" flex="auto">
                    <h1 className="title red">Nhóm</h1>
                    <div className="price">
                      <h1>$8</h1>
                      <small>
                        mỗi người dùng / tháng
                        <br />
                        thanh toán hàng năm
                        <br />
                      </small>
                      <p>
                        <b>$5</b> thanh toán hàng tháng
                      </p>
                    </div>
                    <button className="btn extra">Dùng thử Miễn phí</button>
                  </Col>
                  <Col className="miniPrice" flex="auto">
                    <h1 className="title purple">Doanh nghiệp</h1>
                    <div className="price">
                      <WechatOutlined />
                    </div>
                    <button className="btn">Liên hệ bán hàng</button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <hr />

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
                        DOLS là một không gian làm việc thích ứng với nhu cầu
                        của bạn. Nó như tối thiểu hoặc mạnh mẽ như bạn cần.
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
                        DOLS tiếp tục là cách dễ dàng nhất để có được thông tin
                        tập trung ở đâu đó và hét lên một người nào khác. Đối
                        với chúng tôi, điều đó cực kỳ quan trọng bởi vì một nửa
                        nhóm của chúng tôi ở xa.
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
                        DOLS dễ sử dụng là một trong những đặc điểm nổi bật của
                        nó. Nó giúp bạn điều hướng nội dung một cách trực quan
                        và ghi nhớ vị trí một cái gì đó là.
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

            <Row className="questionSection">
              <Col flex="auto">
                <div className="titleWrap">
                  <h1>Hỏi & Đáp</h1>
                  <p>
                    Không thể tìm thấy câu trả lời ở đây?{" "}
                    <a href="#">Liên hệ hỗ trợ</a>
                  </p>
                </div>
                <div className="collapseWrap">
                  <Collapse bordered={false}>
                    <Panel
                      header="Điều gì xảy ra khi tôi vượt quá giới hạn khách trong Gói cá nhân của mình"
                      key="1"
                    >
                      <p>
                        Nâng cấp lên Gói cá nhân PRO cho số lượng khách không
                        giới hạn, hoặc Kế hoạch nhóm nếu bạn cộng tác với cùng
                        một nhóm người một cách tự động. Bạn cũng có thể xem lại
                        và xóa khách không hoạt động trong Cài đặt & Thành viên.
                      </p>
                    </Panel>
                    <Panel
                      header="Làm cách nào nhóm của tôi có thể dùng thử Dols miễn phí?"
                      key="2"
                    >
                      <p>
                        Chúng tôi muốn giúp bạn dễ dàng sử dụng Notion cho một
                        quay với nhiều thành viên trước khi bạn bắt đầu trả
                        tiền. Đây là cách để làm điều đó:
                      </p>
                      <ul>
                        <li>
                          <p>
                            Tạo không gian làm việc Notion mới và chọn Nhóm làm
                            loại khi được hỏi.
                          </p>
                        </li>
                        <li>
                          <p>
                            Bạn sẽ được đăng ký dùng thử Team Plan Miễn phí cho
                            phép bạn truy cập vào các tính năng của Kế hoạch
                            nhóm với giới hạn dùng thử đối với nội dung khối,
                            khách và phiên bản lịch sử. Khi bạn đạt đến những
                            giới hạn đó, bạn có thể nâng cấp.
                          </p>
                        </li>
                      </ul>
                    </Panel>
                    <Panel
                      header="Điều gì xảy ra khi tôi vượt quá giới hạn lưu trữ khối trong Bản dùng thử nhóm của mình"
                      key="3"
                    >
                      <p>
                        Bạn vẫn có thể đọc, chỉnh sửa và sắp xếp nội dung hiện
                        có các khối như bình thường, nhưng bạn sẽ không thể thêm
                        mới khối nội dung.
                        <br />
                        Tuy nhiên, bạn có thể xóa các khối nội dung hiện có vào
                        Miễn phí tăng dung lượng lưu trữ của bạn.
                      </p>
                    </Panel>
                  </Collapse>
                  <div className="smallText">
                    <small>Vẫn còn nhiều câu hỏi?</small>
                    <small>
                      Tìm hiểu thêm trong của chúng tôi{" "}
                      <a href="#">Trung tâm trợ giúp</a>.
                    </small>
                  </div>
                </div>
              </Col>
            </Row>

            <hr />

            <Row className="tertiarySection">
              <div className="imgWrapper">
                <img src={vite} alt="" />
              </div>
              <div className="textWrapper">
                <h1>Hãy thử DOLS ngay hôm nay</h1>
                <p>
                  Bắt đầu miễn phí. Thêm toàn bộ nhóm của bạn khi nhu cầu của
                  bạn tăng lên.
                </p>
                <button className="btn">Try DOLS Miễn phí</button>
                <p>
                  Trong một đội lớn? <u>Liên hệ bán hàng</u>
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
          </Content>
        </Layout>
      </div>
      <AuthenFooter />
    </>
  );
};

export default Pricing;
