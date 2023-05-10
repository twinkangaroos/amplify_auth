import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserEdit from "./pages/UserEdit";

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user_edit" element={<UserEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
