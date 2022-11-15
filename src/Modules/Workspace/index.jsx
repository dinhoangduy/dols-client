import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "antd";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    StarOutlined,
    SaveOutlined,
} from "@ant-design/icons";
import { Button, Menu, Layout } from "antd";
const { Header, Sider, Content } = Layout;
import { useEffect } from "react";
import "./styles.scss";
import BlankTemplate from "../../Component/Core/BlankTemplate/BlankTemplate";
import KanbanTemplate from "../../Component/Core/KanbanTemplate/KanbanTemplate";

// ** Api
import workspaceApi from "../../api/workspaceApi";
// ** End of-> Api

const Workspace = () => {
    const location = useLocation();

    // ** Menu slider
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // ** End of -> Menu slider

    // ** Get workspace ID and load all board
    // ** End of -> Get workspace ID and load all board
    const handleChangeBoard = () => {};

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    // ** Loop qua danh sach workspace de render danh sach workspace
    // ** Loop qua danh sach board cua workspce de render ra danh sach cac board
    // ** Them vao bang cach push vao mang, roi gop cac mang vao thang items
    const items = [
        getItem("Dinh hoang duy...", "1", <PieChartOutlined />, [
            getItem("Dinh hoang duy...", "2"),
            getItem("Oanh...", "3"),
            getItem("Create workspace", "4"),
            getItem("Log out", "5"),
        ]),
        getItem(
            <span onClick={handleChangeBoard}>Board 1</span>,
            "BlankTemplate",
            <DesktopOutlined />
        ),
        getItem(
            <span onClick={handleChangeBoard}>Board 2</span>,
            "KanbanTemplate",
            <ContainerOutlined />
        ),
    ];

    // ** Get board ID and load board
    const nameMapTemplate = {
        blanktemplate: {
            handle: (boardID) => {
                return <BlankTemplate />;
            },
        },
        kanbantemplate: {
            blanktemplate: {
                handle: (boardID) => {
                    return <KanbanTemplate />;
                },
            },
        },
    };
    const [workspaceID, setWorkspaceID] = useState("");
    const [workspaceData, setWorkspaceData] = useState({});
    const [currentBoardID, setCurrentBoardID] = useState("");
    // const [template, setTemplate] = useState('BlankTemplate');

    useEffect(() => {
        setWorkspaceID(location.pathname.split("/").slice(-1)[0]);
    }, [location]);

    useEffect(() => {
        const fetchWorkspace = async () => {
            const data = await workspaceApi.getAll();
            console.log(data);
        };

        fetchWorkspace();
    }, [workspaceID]);

    // useEffect(() => {
    //   setTemplate(boardID);
    // },[boardID])

    // ** End of -> Get workspace ID and load board

    return (
        <div className="workspace">
            <Sider
                collapsible
                collapsed={collapsed}
                theme="light"
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="logo" />
                <Menu
                    theme="light"
                    // defaultSelectedKeys={['BlankTemplate']}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <div className="main">
                <div className="main__top">
                    <p>Board 1</p>
                    <div className="other">
                        <StarOutlined />
                        <SaveOutlined />
                    </div>
                </div>
                <div className="main__content">
                    {/* Danh sach board, load ra roi render */}
                    {/* {nameMapTemplate[template].handle(boardID)} */}
                </div>
            </div>
        </div>
    );
};

export default Workspace;
