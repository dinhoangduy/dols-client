import React from "react";
import logo from "../../../assets/images/logo.png";
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
        <Col flex={1} className="logo">
          <p>
            <img src={logo} alt="" />
          </p>
        </Col>
        <Col flex={1}>
          <p>Sản phẩm</p>
          <ul>
            <a href="#">
              <li>Tổng quan</li>
            </a>
            <a href="#">
              <li>Giả cả</li>
            </a>
            <a href="#">
              <li>Mẩu truyện khách hàng</li>
            </a>
            <a href="#">
              <li>Ứng dụng máy tính</li>
            </a>
            <a href="#">
              <li>Ứng dụng điện thoại</li>
            </a>
            <a href="#">
              <li>Ghim trang web</li>
            </a>
            <a href="#">
              <li>Bảo mật</li>
            </a>
            <a href="#">
              <li>Điểu khoản sử dụng</li>
            </a>
          </ul>
        </Col>
        <Col flex={1}>
          <p>DOLS dành cho</p>
          <ul>
            <a href="#">
              <li>Doanh nghiệp</li>
            </a>
            <a href="#">
              <li>Doanh nghiệp nhỏ</li>
            </a>
            <a href="#">
              <li>Cá nhân</li>
            </a>
            <a href="#">
              <li>Làm việc tại nhà</li>
            </a>
            <a href="#">
              <li>Khởi nghiệp</li>
            </a>
            <a href="#">
              <li>Học tập</li>
            </a>
            <a href="#">
              <li>Phi lợi nhuận</li>
            </a>
            <a href="#">
              <li>Kỹ thuật</li>
            </a>
            <a href="#">
              <li>Sản phẩm</li>
            </a>
            <a href="#">
              <li>Thiết kế</li>
            </a>
            <a href="#">
              <li>Quản lý</li>
            </a>
          </ul>
        </Col>
        <Col flex={1}>
          <p>Tài nguyên</p>
          <ul>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Hướng dẫn</li>
            </a>
            <a href="#">
              <li>Hỗ trợ</li>
            </a>
            <a href="#">
              <li>Hội thảo</li>
            </a>
            <a href="#">
              <li>Thư viện mẫu</li>
            </a>
            <a href="#">
              <li>Cộng động</li>
            </a>
            <a href="#">
              <li>Tin mới</li>
            </a>
            <a href="#">
              <li>Tìm người tư vấn</li>
            </a>
            <a href="#">
              <li>Tài liệu API</li>
            </a>
            <a href="#">
              <li>Chuyển từ Evernote</li>
            </a>
            <a href="#">
              <li>Chuyển từ Confluence</li>
            </a>
          </ul>
        </Col>
        <Col flex={1}>
          <p>Mẫu</p>
          <ul>
            <a href="#">
              <li>Trảng chủ công ty</li>
            </a>
            <a href="#">
              <li>Ghi chú cuộc họp</li>
            </a>
            <a href="#">
              <li>Việc cần làm</li>
            </a>
            <a href="#">
              <li>Chương trình hàng tuần</li>
            </a>
            <a href="#">
              <li>Tài liệu</li>
            </a>
            <a href="#">
              <li>Lộ trình</li>
            </a>
            <a href="#">
              <li>Hệ thống thiết kế</li>
            </a>
            <a href="#">
              <li>Tuyển dụng mới</li>
            </a>
            <a href="#">
              <li>Từ điển sản phẩm</li>
            </a>
            <a href="#">
              <li>Nội dung lịch</li>
            </a>
          </ul>
        </Col>
        <Col flex={1}>
          <p>Doanh nghiệp</p>
          <ul>
            <a href="#">
              <li>Về chúng tôi</li>
            </a>
            <a href="#">
              <li>Nghề nghiệp</li>
            </a>
            <a href="#">
              <li>Bộ phương tiện</li>
            </a>
            <a href="#">
              <li>Liên hệ bán hàng</li>
            </a>
            <a href="#">
              <li>Liên hệ hỗ trợ</li>
            </a>
            <a href="#">
              <li>Email chúng tôi</li>
            </a>
          </ul>
        </Col>
      </Row>

      <Row className="footerFinal">
        <Col flex="auto" className="col">
          <a href="#">
            <p>Ngôn ngữ</p>
          </a>
          <a href="#">
            <p>Chinh Cookie</p>
          </a>
          <a href="#">
            <p>Trạng thái</p>
          </a>
          <p>©2022 DOLS Labs, Inc.</p>
        </Col>
        <Col flex="100px" className="col">
          <a href="#">
            <TwitterOutlined />
          </a>
          <a href="#">
            <LinkedinFilled />
          </a>
          <a href="#">
            <FacebookFilled />
          </a>
          <a href="#">
            <InstagramOutlined />
          </a>
          <a href="#">
            <YoutubeFilled />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AuthenFooter;
