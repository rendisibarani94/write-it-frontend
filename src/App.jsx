import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NoteDetail from "./components/NoteDetail";
import ToDoDetail from "./components/ToDoDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return(

    <Router>
      <Routes>
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* route detail */}
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/todo/:id" element={<ToDoDetail />} />

      </Routes>
    </Router>
    
  );

}

export default App
