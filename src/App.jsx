import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.scss";
import "antd/dist/antd.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./Component/Layouts/AuthLayout/AuthLayout";
import AppLayout from "./Component/Layouts/AppLayout/AppLayout";
import Authenticate from "./Modules/Authenticate";

import Workspace from "./Modules/Workspace";
import NotFound from "./Modules/NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route
                            path="/id/:workspaceID"
                            element={<Workspace />}
                        />
                    </Route>
                    <Route path="/" element={<AuthLayout />}>
                        <Route path="login" element={<Authenticate />} />
                        <Route
                            path="forgot-password"
                            element={<Authenticate />}
                        />
                        <Route path="sign-up" element={<Authenticate />} />
                        <Route index element={<Authenticate />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
