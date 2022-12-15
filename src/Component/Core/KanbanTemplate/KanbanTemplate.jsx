import {
    Box,
    Button,
    Typography,
    Divider,
    TextField,
    IconButton,
    Card,
    Tooltip,
} from "@mui/material";
import Moment from "moment";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import sectionApi from "/src/api/sectionApi";
import taskApi from "/src/api/taskApi";
import TaskModal from "./TaskModal";
import boardApi from "../../../api/boardApi";
import dataApi from "../../../api/dataApi";
import { DatePicker, message, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteBoard, upadateIconBoard, upadateTitleBoard } from "../../../redux/features/currentWorkspaceSlice";
import { useDispatch } from "react-redux";
import EmojiPicker from "../../../Modules/Workspace/EmojiPicker";

let timer;
const timeout = 500;

const KanbanTemplate = ({ boardId, workspaceData, setCurrentBoardID }) => {
    const dispatch = useDispatch();
    const [selectedTask, setSelectedTask] = useState(undefined);
    const [currentBoardData, setCurrentBoardData] = useState({});
    const [data, setData] = useState([]);
    useEffect(() => {
        workspaceData.board.forEach((item) => {
            if (item.id === boardId) {
                setCurrentBoardData(item);
            }
        });
    }, [boardId]);
    useEffect(() => {
        setData(currentBoardData?.datas);
    }, [currentBoardData]);
    console.log(data);

    useEffect(() => {
        refreshBoard();
    },[boardId])

    const onDragEnd = async ({ source, destination }) => {
        if (!destination) return;
        const sourceColIndex = data.findIndex(
            (e) => e.id === source.droppableId
        );
        const destinationColIndex = data.findIndex(
            (e) => e.id === destination.droppableId
        );
        const sourceCol = data[sourceColIndex];
        const destinationCol = data[destinationColIndex];

        console.log("sourceCol", sourceCol);
        console.log("destinationCol", destinationCol);
        console.log("source", source);
        console.log("destination", destination);

        const sourceSectionId = sourceCol.id;
        const destinationSectionId = destinationCol.id;

        const sourceTasks = [...sourceCol.task];
        const destinationTasks = [...destinationCol.task];

        console.log("sourceTasks", sourceTasks);
        console.log("destinationTasks", destinationTasks);

        console.log(data);

        let taskId = sourceTasks[source.index].id;

        if (source.droppableId !== destination.droppableId) {
            const [removed] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, removed);

            const clone = [];
            data.forEach((item) => {
                let taskClone = [...item.task];
                let itemClone = { ...item };
                itemClone.task = taskClone;

                clone.push(itemClone);
            });
            clone[sourceColIndex].task = [...sourceTasks];
            clone[destinationColIndex].task = [...destinationTasks];

            setData(clone);

            try {
                await taskApi.update(taskId, {
                    dataId: clone[destinationColIndex].id,
                });
            } catch (err) {
                alert(err);
            }
        } else {
            const [removed] = destinationTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, removed);
           
            
            // ** update position
            destinationTasks.forEach((item,index) => {
                item.position = index + 1;
            })
            // ** save
            try {
                await taskApi.updateTaskOfData({
                    tasks: destinationTasks,
                    dataId: data[destinationColIndex].id
                });
                refreshBoard();
            } catch (err) {
                alert(err);
            }
        }
    };

    const refreshBoard = async () => {
        let boardAfterUpdate = await boardApi.getOne(boardId);
        let res = boardAfterUpdate.data.datas.sort((a,b) => {
           return parseInt(a.content) - parseInt(b.content);
        })
        console.log("resss",res);
        setData(res);
    }

    const createSection = async () => {
        try {
            const section = await dataApi.create({
                heading: "Chưa có tiêu đề",
                boardId: boardId,
                content: `${data.length + 2}`
            });
            if (section) {
                const res = await dataApi.getOne(section.data);
                if (res) {
                    let clone = [...data, res.data];
                    console.log(clone);
                    setData(clone);
                }
            }
        } catch (err) {
            alert(err);
        }
    };
    const deleteSection = async (sectionId) => {
        try {
            await dataApi.delete(sectionId);
            refreshBoard();
        } catch (err) {
            alert(err);
        }
    };

    const updateSectionTitle = async (e, sectionId) => {
        clearTimeout(timer);
        const newTitle = e.target.value;
        const newData = [...data];
        const index = newData.findIndex((e) => e.id === sectionId);

        const clone = [];
        data.forEach((item) => {
            let heading = item.heading;
            let itemClone = { ...item };
            itemClone.heading = heading;
            clone.push(itemClone);
        });
        clone[index].heading = newTitle;

        setData(clone);

        try {
            await dataApi.update(sectionId, {
                heading: newTitle,
                boardId: boardId,
            });
            // let board = boardApi.getOne(boardId);
        } catch (err) {
            alert(err);
        }
    };

    const createTask = async (sectionId) => {
        try {
            let res = data.filter(item => item.id === sectionId);
            console.log(res[0]);

            const task = await taskApi.create({
                title: "Task mới",
                content: "",
                position: res[0].task.length + 2,
                dataId: sectionId,
            });
            console.log(task);

            refreshBoard();

        } catch (err) {
            alert(err);
        }
    };

    const onUpdateTask = (task) => {
        refreshBoard();
    };

    const onDeleteTask = (task) => {
        refreshBoard();
    };

    const handleDeleteBoard = async () => {
        try {
            let res = await boardApi.delete(boardId);
            if (res) {
                dispatch(deleteBoard({ boardID: boardId }));
                setCurrentBoardID(workspaceData.board[0].id);
                message.success("Xóa thành công!");
            }
        } catch {}
    };
    const [title, setTitle] = useState("");

    const [icon, setIcon] = useState("");
    useEffect(() => {
        setTitle(currentBoardData.title);
        setIcon(currentBoardData.icon);
    }, [currentBoardData]);

    const updateTitle = async (e) => {
        setTitle(e.target.value);
        try {
            let res = await boardApi.update(boardId, {
                title: e.target.value,
                workspaceId: workspaceData.id,
            });
            if (res) {
                dispatch(upadateTitleBoard({ boardID: boardId, title: e.target.value }));
            }
        } catch (err) {
            alert(err);
        }
    };
    const onIconChange = async (newIcon) => {
        setIcon(newIcon);
        try {
            let res = await boardApi.update(boardId, {
                icon: newIcon,
                workspaceId: workspaceData.id,
            });

            if (res) {
                dispatch(upadateIconBoard({ boardID: boardId, newIcon }));
            }
        } catch (err) {
            alert(err);
        }
    };
    return (
        <>
            <div style={{ display: "flex" }}>
                <EmojiPicker icon={icon} onChange={onIconChange} />
                <TextField
                    value={title}
                    onChange={updateTitle}
                    placeholder="Untitled"
                    variant="outlined"
                    fullWidth
                    sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-input": { padding: 0 },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "unset ",
                        },
                        "& .MuiOutlinedInput-root": {
                            fontSize: "2.5rem",
                            fontWeight: "700",
                        },
                        marginBottom: "10px",
                    }}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" fontWeight="700" fontSize="10px" style={{paddingLeft: "10px"}}>
                    Lần cập nhật cuối{" "}
                    {data !== undefined
                        ? Moment(data.updateAt).format("HH:mm A DD-MM-YYYY")
                        : ""}
                </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop:"10px", paddingLeft:"10px"}}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Button onClick={createSection} style={{backgroundColor: "#fff"}}>Thêm cột</Button>
                </Box>
                <Popconfirm
                    title="Bạn thật sự muốn xóa chứ？"
                    placement="bottomLeft"
                    okText="Xóa"
                    cancelText="Trở về"
                    onConfirm={handleDeleteBoard}
                >
                    <Tooltip title="Xóa bảng" placement="bottom">
                        <DeleteOutlined
                            style={{
                                color: "red",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        />
                    </Tooltip>
                </Popconfirm>
            </div>
            <Divider sx={{ margin: "40px 0" }} />
            <DragDropContext onDragEnd={onDragEnd}>
                <Box
                    className="kannban-wrappers"
                
                >
                    {data?.map((section) => (
                        <div
                            key={section.id}
                            style={{
                                width: "300px",
                                minHeight: "400px",
                                backgroundColor: "#1d3557",
                                marginRight: "10px",
                            }}
                        >
                            <Droppable
                                key={section.id}
                                droppableId={section.id}
                            >
                                {(provided) => (
                                    <Box
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        sx={{
                                            width: "300px",
                                            padding: "10px",
                                            marginRight: "10px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                marginBottom: "10px",
                                                backgroundColor: "#faedcd",
                                            }}
                                        >
                                            <TextField
                                                value={section.heading}
                                                onChange={(e) =>
                                                    updateSectionTitle(
                                                        e,
                                                        section.id
                                                    )
                                                }
                                                placeholder="Untitled"
                                                variant="outlined"
                                                sx={{
                                                    flexGrow: 1,
                                                    "& .MuiOutlinedInput-input":
                                                        { padding: 0 },
                                                    "& .MuiOutlinedInput-notchedOutline":
                                                        { border: "unset" },
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            fontSize: "1rem",
                                                            fontWeight: "700",
                                                        },
                                                }}
                                                style={{ paddingLeft: "10px" }}
                                            />
                                            <IconButton
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    color: "gray",
                                                    "&:hover": {
                                                        color: "green",
                                                    },
                                                }}
                                                onClick={() =>
                                                    createTask(section.id)
                                                }
                                            >
                                                <AddOutlinedIcon />
                                            </IconButton>
                                            <IconButton
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    color: "gray",
                                                    "&:hover": { color: "red" },
                                                }}
                                                onClick={() =>
                                                    deleteSection(section.id)
                                                }
                                            >
                                                <DeleteOutlinedIcon />
                                            </IconButton>
                                        </Box>
                                        {/* task */}
                                        {section.task.map((task, index) => (
                                            <Draggable
                                                key={task.id}
                                                draggableId={task.id}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <Card
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        sx={{
                                                            padding: "10px",
                                                            marginBottom:
                                                                "10px",
                                                            cursor: snapshot.isDragging
                                                                ? "grab"
                                                                : "pointer!important",
                                                        }}
                                                        onClick={() =>
                                                            setSelectedTask(
                                                                task
                                                            )
                                                        }
                                                    >
                                                        <Typography>
                                                            {task.title === ""
                                                                ? "Untitled"
                                                                : task.title}
                                                        </Typography>
                                                    </Card>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </Box>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </Box>
            </DragDropContext>
            <TaskModal
                task={selectedTask}
                boardId={boardId}
                onClose={() => setSelectedTask(undefined)}
                onUpdate={onUpdateTask}
                onDelete={onDeleteTask}
            />
        </>
    );
};

export default KanbanTemplate;
