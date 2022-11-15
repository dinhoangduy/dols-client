import React from "react";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import useApi from "../shared/hooks/api";
import { updateArrayItemById } from "../shared/utils/javascript";
import { createQueryParamModalHelpers } from "../shared/utils/queryParamModal";
import { PageLoader, PageError, Modal } from "../shared/components";

import NavbarLeft from "./NavbarLeft";
import Sidebar from "./Sidebar";
import Board from "./Board";
import IssueSearch from "./IssueSearch";
import IssueCreate from "./IssueCreate";
import ProjectSettings from "./ProjectSettings";
import { ProjectPage } from "./Styles";

const Project = () => {
    const match = useLocation();
    const history = useNavigate();

    const issueSearchModalHelpers =
        createQueryParamModalHelpers("issue-search");
    const issueCreateModalHelpers =
        createQueryParamModalHelpers("issue-create");

    // const [{ data, error, setLocalData }, fetchProject] = useApi.get("/project");
    const [fetchProject] = useApi.get("/project");

    const data = {
        project: {
            id: 95066,
            name: "singularity 1.0",
            url: "https://www.atlassian.com/software/jira",
            description:
                "Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.",
            category: "software",
            createdAt: "2022-11-15T14:39:52.328Z",
            updatedAt: "2022-11-15T14:39:52.328Z",
            users: [
                {
                    id: 285942,
                    name: "Pickle Rick",
                    email: "rick@jira.guest",
                    avatarUrl: "https://i.ibb.co/7JM1P2r/picke-rick.jpg",
                    createdAt: "2022-11-15T14:39:52.323Z",
                    updatedAt: "2022-11-15T14:39:52.328Z",
                    projectId: 95066,
                },
                {
                    id: 285941,
                    name: "Baby Yoda",
                    email: "yoda@jira.guest",
                    avatarUrl: "https://i.ibb.co/6n0hLML/baby-yoda.jpg",
                    createdAt: "2022-11-15T14:39:52.319Z",
                    updatedAt: "2022-11-15T14:39:52.328Z",
                    projectId: 95066,
                },
                {
                    id: 285940,
                    name: "Lord Gaben",
                    email: "gaben@jira.guest",
                    avatarUrl: "https://i.ibb.co/6RJ5hq6/gaben.jpg",
                    createdAt: "2022-11-15T14:39:52.316Z",
                    updatedAt: "2022-11-15T14:39:52.328Z",
                    projectId: 95066,
                },
            ],
            issues: [
                {
                    id: 771681,
                    title: "Try dragging issues to different columns to transition their status.",
                    type: "story",
                    status: "backlog",
                    priority: "3",
                    listPosition: 3,
                    createdAt: "2022-11-15T14:39:52.339Z",
                    updatedAt: "2022-11-15T14:39:52.339Z",
                    userIds: [],
                },
                {
                    id: 771682,
                    title: "This is an issue of type: Task.",
                    type: "task",
                    status: "backlog",
                    priority: "4",
                    listPosition: 1,
                    createdAt: "2022-11-15T14:39:52.339Z",
                    updatedAt: "2022-11-15T14:39:52.339Z",
                    userIds: [285942],
                },
                {
                    id: 771683,
                    title: "You can track how many hours were spent working on an issue, and how many hours remain.",
                    type: "task",
                    status: "inprogress",
                    priority: "1",
                    listPosition: 7,
                    createdAt: "2022-11-15T14:39:52.361Z",
                    updatedAt: "2022-11-15T14:39:52.361Z",
                    userIds: [],
                },
                {
                    id: 771684,
                    title: "Each issue can be assigned priority from lowest to highest.",
                    type: "task",
                    status: "selected",
                    priority: "5",
                    listPosition: 5,
                    createdAt: "2022-11-15T14:39:52.365Z",
                    updatedAt: "2022-11-15T14:39:52.365Z",
                    userIds: [],
                },
                {
                    id: 771685,
                    title: "Try leaving a comment on this issue.",
                    type: "task",
                    status: "done",
                    priority: "3",
                    listPosition: 7,
                    createdAt: "2022-11-15T14:39:52.360Z",
                    updatedAt: "2022-11-15T14:39:52.360Z",
                    userIds: [285941],
                },
                {
                    id: 771686,
                    title: "Each issue has a single reporter but can have multiple assignees.",
                    type: "story",
                    status: "selected",
                    priority: "4",
                    listPosition: 6,
                    createdAt: "2022-11-15T14:39:52.364Z",
                    updatedAt: "2022-11-15T14:39:52.364Z",
                    userIds: [285940, 285941],
                },
                {
                    id: 771687,
                    title: "You can use rich text with images in issue descriptions.",
                    type: "story",
                    status: "inprogress",
                    priority: "1",
                    listPosition: 8,
                    createdAt: "2022-11-15T14:39:52.378Z",
                    updatedAt: "2022-11-15T14:40:09.322Z",
                    userIds: [285940],
                },
                {
                    id: 771680,
                    title: "Click on an issue to see what's behind it.",
                    type: "task",
                    status: "selected",
                    priority: "2",
                    listPosition: 7,
                    createdAt: "2022-11-15T14:39:52.338Z",
                    updatedAt: "2022-11-15T14:40:08.336Z",
                    userIds: [285942],
                },
            ],
        },
    };

    if (!data) return <PageLoader />;
    // if (error) return <PageError />;

    const { project } = data;

    const updateLocalProjectIssues = (issueId, updatedFields) => {
        setLocalData((currentData) => ({
            project: {
                ...currentData.project,
                issues: updateArrayItemById(
                    currentData.project.issues,
                    issueId,
                    updatedFields
                ),
            },
        }));
    };

    return (
        <ProjectPage>
            <NavbarLeft
                issueSearchModalOpen={issueSearchModalHelpers.open}
                issueCreateModalOpen={issueCreateModalHelpers.open}
            />

            <Sidebar project={project} />

            {issueSearchModalHelpers.isOpen() && (
                <Modal
                    isOpen
                    testid="modal:issue-search"
                    variant="aside"
                    width={600}
                    onClose={issueSearchModalHelpers.close}
                    renderContent={() => <IssueSearch project={project} />}
                />
            )}

            {issueCreateModalHelpers.isOpen() && (
                <Modal
                    isOpen
                    testid="modal:issue-create"
                    width={800}
                    withCloseIcon={false}
                    onClose={issueCreateModalHelpers.close}
                    renderContent={(modal) => (
                        <IssueCreate
                            project={project}
                            fetchProject={fetchProject}
                            onCreate={() => history(`${match.url}/board`)}
                            modalClose={modal.close}
                        />
                    )}
                />
            )}
            <Routes>
                <Route
                    path="settings"
                    element={
                        <ProjectSettings
                            project={project}
                            fetchProject={fetchProject}
                        />
                    }
                />
                <Route
                    index
                    element={
                        <Board
                            project={project}
                            fetchProject={fetchProject}
                            updateLocalProjectIssues={updateLocalProjectIssues}
                        />
                    }
                />
            </Routes>
        </ProjectPage>
    );
};

export default Project;
