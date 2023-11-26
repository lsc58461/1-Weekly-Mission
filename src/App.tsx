import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import "./assets/styles/colors.css";
import "./assets/styles/reset.css";
import FolderPage from "./pages/FolderPage";
import SharedPage from "./pages/SharedPage";
import NotFoundLink from "./components/Card/NotFoundLink";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/folder" element={<FolderPage />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route path="*" element={<NotFoundLink />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
