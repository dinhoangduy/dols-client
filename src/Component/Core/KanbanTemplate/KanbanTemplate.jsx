import {
    Box,
    Button,
    Typography,
    Divider,
    TextField,
    IconButton,
    Card,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import sectionApi from "/src/api/sectionApi";
import taskApi from "/src/api/taskApi";
import TaskModal from "./TaskModal";
import boardApi from "../../../api/boardApi";
import dataApi from "../../../api/dataApi";

let timer;
const timeout = 500;

const KanbanTemplate = ({ boardId, workspaceData }) => {
    const [data, setData] = useState([]);
    const [selectedTask, setSelectedTask] = useState(undefined);
    const [currentBoardData, setCurrentBoardData] = useState({});
    useEffect(() => {
        workspaceData.board.forEach((item) => {
            if (item.id === boardId) {
                setCurrentBoardData(item);
            }
        });
    }, [boardId]);
    console.log(currentBoardData);

    useEffect(() => {
        setData(currentBoardData?.datas);
    }, [currentBoardData]);

    console.log(data);

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

        const sourceSectionId = sourceCol.id;
        const destinationSectionId = destinationCol.id;

        const sourceTasks = [...sourceCol.task];
        const destinationTasks = [...destinationCol.task];

        if (source.droppableId !== destination.droppableId) {
            const [removed] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, removed);
            data[sourceColIndex].task = sourceTasks;
            data[destinationColIndex].task = destinationTasks;
        } else {
            const [removed] = destinationTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, removed);
            data[destinationColIndex].task = destinationTasks;
        }

        try {
            await taskApi.updatePosition(boardId, {
                resourceList: sourceTasks,
                destinationList: destinationTasks,
                resourceSectionId: sourceSectionId,
                destinationSectionId: destinationSectionId,
            });
            setData(data);
        } catch (err) {
            alert(err);
        }
    };

    const createSection = async () => {
        try {
            const section = await sectionApi.create(boardId);
            setData([...data, section]);
        } catch (err) {
            alert(err);
        }
    };

    const deleteSection = async (sectionId) => {
        try {
            await sectionApi.delete(boardId, sectionId);
            const newData = [...data].filter((e) => e.id !== sectionId);
            setData(newData);
        } catch (err) {
            alert(err);
        }
    };

    const updateSectionTitle = async (e, sectionId) => {
        clearTimeout(timer);
        const newTitle = e.target.value;
        const newData = [...data];
        const index = newData.findIndex((e) => e.id === sectionId);
        newData[index].title = newTitle;
        setData(newData);
        timer = setTimeout(async () => {
            try {
                await sectionApi.update(boardId, sectionId, {
                    title: newTitle,
                });
            } catch (err) {
                alert(err);
            }
        }, timeout);
    };

    const createTask = async (sectionId) => {
        try {
            const task = await taskApi.create(boardId, { sectionId });
            const newData = [...data];
            const index = newData.findIndex((e) => e.id === sectionId);
            newData[index].task.unshift(task);
            setData(newData);
        } catch (err) {
            alert(err);
        }
    };

    const onUpdateTask = (task) => {
        const newData = [...data];
        const sectionIndex = newData.findIndex((e) => e.id === task.section.id);
        const taskIndex = newData[sectionIndex].task.findIndex(
            (e) => e.id === task.id
        );
        newData[sectionIndex].task[taskIndex] = task;
        setData(newData);
    };

    const onDeleteTask = (task) => {
        const newData = [...data];
        const sectionIndex = newData.findIndex((e) => e.id === task.section.id);
        const taskIndex = newData[sectionIndex].task.findIndex(
            (e) => e.id === task.id
        );
        newData[sectionIndex].task.splice(taskIndex, 1);
        setData(newData);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Button onClick={createSection}>
                    {currentBoardData.title}
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Button onClick={createSection}>Thêm cột</Button>
            </Box>
            <Divider sx={{ margin: "40px 0" }} />
            <DragDropContext onDragEnd={onDragEnd}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        width: "100%",
                        minHeight: "calc(100% - 100px)",
                        overflowX: "auto",
                    }}
                >
                    {data?.map((section) => (
                        <div
                            key={section.id}
                            style={{
                                width: "300px",
                                minHeight: "400px",
                                backgroundColor: "#1d3557",
                                marginRight: "10px"
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
                                                style={{paddingLeft: "10px"}}
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
