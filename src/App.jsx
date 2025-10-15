import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NoteDetail from "./components/NoteDetail";
import ToDoDetail from "./components/ToDoDetail";
import NotesList from "./components/SectionNote";
import ToDoList from "./components/SectionToDo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Nested routes di dalam HomePage */}
        <Route path="/home" element={<HomePage />}>
          <Route path="note" element={<NotesList />} />
          <Route path="note/:id" element={<NoteDetail />} />
          <Route path="todo" element={<ToDoList />} />
          <Route path="todo/:id" element={<ToDoDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
