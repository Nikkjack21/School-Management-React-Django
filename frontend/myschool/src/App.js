import AdminLoginPage from "./pages/Admin/Login/AdminLoginPage";
import { Routes, Route } from "react-router-dom";
import AdminDashboardPage from "./pages/Admin/Home/AdminDashboard/AdminDashboardPage";
import { AuthProvider } from "./context/AuthContext";
import AdminClassPages from "./pages/Admin/Home/AdminClass/AdminClassPages";
import AdminSubjectPage from "./pages/Admin/Home/AdminSubject/AdminSubjectPage";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/class" element={<AdminClassPages/>} />

          <Route path="/subject" element={<AdminSubjectPage/>}/>
          
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
