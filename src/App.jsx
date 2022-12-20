import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.scss';
import 'antd/dist/antd.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from './Component/Layouts/AuthLayout/AuthLayout';
import SingleLayout from './Component/Layouts/SingleLayout/SingleLayout';
import Authenticate from './Modules/Authenticate';
import TeamLayout from './Component/Layouts/TeamLayout/TeamLayout';
import TeamApp from './Modules/Team/App';

import Workspace from './Modules/Workspace';
import Profile from './Modules/Profile/Profile';
import Settings from './Modules/Settings/Settings';
import NotFound from './Modules/NotFound';
import SuccessPage from './Modules/SuccessPage/SuccessPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Authenticate />} />
            <Route path="forgot-password" element={<Authenticate />} />
            <Route path="sign-up" element={<Authenticate />} />
            <Route path="onboarding" element={<Authenticate />} />
            <Route path="home" element={<Authenticate />} />
            <Route path="pricing" element={<Authenticate />} />
          </Route>
          <Route path="/" element={<SingleLayout />}>
            <Route path="/single/:workspaceID" element={<Workspace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/success" element={<SuccessPage />} />

          </Route>
          <Route path="/" element={<TeamLayout />}>
            <Route path="/team" element={<TeamApp />}></Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
