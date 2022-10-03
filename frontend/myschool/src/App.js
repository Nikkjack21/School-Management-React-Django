import AdminLoginPage from "./pages/Admin/Login/AdminLoginPage";
import { Routes, Route } from "react-router-dom";
import AdminDashboardPage from "./pages/Admin/Home/AdminDashboard/AdminDashboardPage";
import { AuthProvider } from "./context/AuthContext";
import AdminClassPages from "./pages/Admin/Home/AdminClass/AdminClassPages";
import AdminSubjectPage from "./pages/Admin/Home/AdminSubject/AdminSubjectPage";
import AddClassPage from "./pages/Admin/Home/AdminClass/AddClassPage";
import Test from "./Test";
import AddSubjectPage from "./pages/Admin/Home/AdminSubject/AddSubjectPage";
import AdminStudentPage from "./pages/Admin/Home/AdminStudent/AdminStudentPage";
import StudentListComponent from "./components/AdminComponent/AdminStudentComponent/StudentListComponent";
import StudentFormComponent from "./components/AdminComponent/AdminStudentComponent/StudentFormComponent";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/class" element={<AdminClassPages/>} />
          <Route path="/addclass" element={<AddClassPage/>} />
          <Route path="/subject" element={<AdminSubjectPage/>}/>
          <Route path="/add-subject" element={<AddSubjectPage/>}/>
          <Route  path="/student" element={<AdminStudentPage/>}>
              <Route path="" element={<StudentListComponent/>}/>
              <Route path="add-student" element={<StudentFormComponent/>}/>
          </Route>




        {/* Test Component */}
          <Route path="/test" element={<Test/>}/>

          {/*  */}
          
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
