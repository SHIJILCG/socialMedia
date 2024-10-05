import { Route,Routes } from "react-router-dom";
import "./App.css";
import HomeUserListPage from "./pages/HomeUserListPage";
import { UserPostPage } from "./pages/UserPostPage";
function App() {
  return (
    <div className="App">
         <Routes>
              <Route path="/" element={<UserPostPage />} />
         </Routes>
    </div>
  );
}

export default App;
