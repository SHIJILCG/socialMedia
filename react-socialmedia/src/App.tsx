import { Route,Routes } from "react-router-dom";
import "./App.css";
import { UserPostPage } from "./pages/UserPostPage";
import { UserListHomePage } from "./pages/UserListHomePage";
function App() {
  return (
    <div className="App">
         <Routes>
              <Route path="/" element={<UserListHomePage />} />
         </Routes>
    </div>
  );
}

export default App;
