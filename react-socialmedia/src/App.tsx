import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserListHomePage } from "./pages/UserListHomePage";
import { UsersPostPage } from "./pages/UsersPostPage";
function App() {
  return (
    <div className="App">
         <Routes>
              <Route path="/" element={<UserListHomePage />} />
              <Route path="PostPage/:userId" element={<UsersPostPage />} />
         </Routes>
    </div>
  );
}

export default App;
