import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./mycomponents/ProtectedRoute";
import HomePage from "./pages/Home";
import TaskForm from "./mycomponents/TasksComponents/TaskForm";
import SelectedTask from "./pages/SelectedTask";
import { Navbar } from "./mycomponents/HomePageComponents/NavbarComponents/Navbar";
import { useUsernameStore } from "./store/userStore";
import { Footer } from "./mycomponents/Footer";

function Logout() {
  const setUsername = useUsernameStore((state) => state.setUsername);

  localStorage.clear();
  setUsername("");
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <TaskPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/tasks/:id"
          element={
            <ProtectedRoute>
              <SelectedTask />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/tasks/create"
          element={
            <ProtectedRoute>
              <TaskForm />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/register" element={<RegisterAndLogout />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
