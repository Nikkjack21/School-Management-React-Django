import AdminLoginPage from "./pages/Admin/Login/AdminLoginPage";
import { Routes, Route } from "react-router-dom";
import AdminDashboardPage from "./pages/Admin/Home/AdminDashboard/AdminDashboardPage";
import { AuthProvider } from "./context/AuthContext";
import AdminClassPages from "./pages/Admin/Home/AdminClass/AdminClassPages";
import AdminSubjectPage from "./pages/Admin/Home/AdminSubject/AdminSubjectPage";
import AdminStudentPage from "./pages/Admin/Home/AdminStudent/AdminStudentPage";
import StudentListComponent from "./components/AdminComponent/AdminStudentComponent/StudentListComponent";
import StudentFormComponent from "./components/AdminComponent/AdminStudentComponent/StudentFormComponent";
import { AdminProtectRoute } from "./utils/ProtectRoute";
import NewClass from "./components/AdminComponent/NewClassComponent/NewClass";
import AddClass from "./components/AdminComponent/NewClassComponent/AddClass";
import AdminSubject from "./components/AdminComponent/AdminSubjectComponent/AdminSubject";
import AddSubjectComp from "./components/AdminComponent/AdminSubjectComponent/AddSubjectComp";
import EditStudentComponent from "./components/AdminComponent/AdminStudentComponent/EditStudentComponent";
import AdminEmployeePage from "./pages/Admin/Home/AdminEmployee/AdminEmployeePage";
import EmployeeLits from "./components/AdminComponent/AdminEmployeeComponent/EmployeeLits";
import AddEmployee from "./components/AdminComponent/AdminEmployeeComponent/AddEmployee";
import EmpSideDrawer from "./components/EmployeeComponent/EmpSideBar/EmpSideDrawer";
import EmployeeDashboard from "./components/EmployeeComponent/EmpDashBboardComponent/EmployeeDashboard";
import EmployeeAddStudent from "./components/EmployeeComponent/EmpAddStudentComp/EmployeeAddStudent";
import AddStudentComponent from "./components/EmployeeComponent/EmpAddStudentComp/AddStudentComponent";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <AdminProtectRoute>
                <AdminDashboardPage />
              </AdminProtectRoute>
            }
          />
          <Route
            path="/class"
            element={
              <AdminProtectRoute>
                <AdminClassPages />
              </AdminProtectRoute>
            }
          >
            <Route path="" element={<NewClass />} />
            <Route path="addclass" element={<AddClass />} />
          </Route>

          <Route
            path="/subject"
            element={
              <AdminProtectRoute>
                <AdminSubjectPage />{" "}
              </AdminProtectRoute>
            }
          >
            <Route path="" element={<AdminSubject />} />
            <Route path="add-subject" element={<AddSubjectComp />} />
          </Route>

          <Route
            path="/student"
            element={
              <AdminProtectRoute>
                <AdminStudentPage />
              </AdminProtectRoute>
            }
          >
            <Route path="" element={<StudentListComponent />} />
            <Route path="add-student" element={<StudentFormComponent />} />
            <Route path="edit-student/:id" element={<EditStudentComponent/>}/>
          </Route>
          <Route path="/admin-employee" element={<AdminEmployeePage/>}>
            <Route path="" element={<EmployeeLits/>}/>
            <Route path="add-employee" element={<AddEmployee/>}/>

          </Route>

          <Route path="" element={<EmpSideDrawer/>}>
            
          <Route path='/employee-home'  element={<EmployeeDashboard/>}/>
            <Route path='/employee-student' element={<EmployeeAddStudent/>}>

            </Route>
              <Route path="/employee-add-student" element={<AddStudentComponent/>}/>
          </Route>

            

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
