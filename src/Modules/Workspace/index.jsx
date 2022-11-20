import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    FileAddOutlined,
    SaveOutlined,
    LogoutOutlined,
    AppstoreAddOutlined
} from "@ant-design/icons";
import {
    Divider
} from "@mui/material";
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
    const navigate = useNavigate();

    // ** Menu slider
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // ** End of -> Menu slider

    // ** Util Functions
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/home");
    }
    // ** End of -> Util Functions

    const handleChangeBoard = (item) => {
        setCurrentTemplate(item.templateId);
        setCurrentBoardID(item.id);
    };

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }


  
    const renderWorkspaceTitle = (item) => {
        return getItem(item.name, item.id)
    }

    const renderBoardTitle = (item) => {
        console.log("item::",item.id);
        return getItem( <span onClick={()=> {handleChangeBoard(item)}}>{item.description}</span>,item.id,<PieChartOutlined/>)
    }

    const renderAllWorkspaceAndBoard = () => {
        let res = [];
        let allTitle = getItem("Bảng điều khiển",'bangdieukhine',<ContainerOutlined/>);
        allTitle[`children`] = [];
        let allBoard = [];
        allWorkspaceData.forEach(item => {
            allTitle?.children.push(renderWorkspaceTitle(item))
        })
        allTitle?.children.push(getItem("Tạo vùng làm việc", 'taovunglamviec',<FileAddOutlined />))
        allTitle?.children.push(getItem(<span onClick={handleLogout}>Đăng xuất</span>, "dangxuat",<LogoutOutlined />))
        res.push(allTitle);

        res.push(getItem("Thêm bảng mới", 'thembangmoi',<AppstoreAddOutlined />))
        res.push(getItem(<Divider/>, 'divider2',<Divider/>));
        currentWorkspaceData?.board?.forEach(item => {
            res.push(renderBoardTitle(item))
        })

        return res;
    }
    

    // ** Get board ID and load board
    const nameMapTemplate = {
        "674e1995-80a0-467a-b48f-312502538210": {
            handle: (boardID) => {
                return <BlankTemplate />;
            },
        },
        // kanbantemplate: {
        //     blanktemplate: {
        //         handle: (boardID) => {
        //             return <KanbanTemplate />;
        //         },
        //     },
        // },
    };
    const [workspaceID, setWorkspaceID] = useState("");
    const [allWorkspaceData, setAllWorkspaceData] = useState([]);
    const [currentWorkspaceData, setCurrentWorkspaceData] = useState({});
    const [currentBoardID, setCurrentBoardID] = useState("");
    const [items, setItems] = useState([]);
    const [currentTemplate, setCurrentTemplate] = useState('');
    // const [template, setTemplate] = useState('BlankTemplate');
    console.log("currentBoardID",currentBoardID);
    useEffect(() => {
        setWorkspaceID(location.pathname.split("/").slice(-1)[0]);
    }, [location]);

    useEffect(() => {
        const fetchWorkspace = async () => {
            let data = await workspaceApi.getAll();
            data = data.data;
            setAllWorkspaceData(data);
            // setCurrentWorkspaceData(data[0]);
        };

        fetchWorkspace();
    }, [workspaceID]);

    useEffect(() => {
        let current = allWorkspaceData.filter(item => item.id === workspaceID);
        setCurrentWorkspaceData(current[0])
        setCurrentBoardID(current[0]?.board[0].id);
    },[allWorkspaceData])

    useEffect(() => {
        let res = renderAllWorkspaceAndBoard();
          setItems(res);
    }, [workspaceID,currentWorkspaceData])

    useEffect(() => {
        let res = currentWorkspaceData?.board?.filter(item => item.id === currentBoardID);
        console.log("Res", res);
        if(res){
            setCurrentTemplate(res[0].templateId)
        }
    },[currentBoardID])

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
                    // defaultSelectedKeys={[currentBoardID]}
                    selectedKeys={[currentBoardID]}
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
                    {nameMapTemplate[currentTemplate]?.handle(currentBoardID)}
                </div>
            </div>
        </div>
    );
};

export default Workspace;
