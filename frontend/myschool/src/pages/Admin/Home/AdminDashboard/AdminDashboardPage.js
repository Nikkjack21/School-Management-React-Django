import React from "react";
import AdminDashboard from "../../../../components/AdminComponent/AdminHomeComponent/AdminDashboard/AdminDashboard";
import SideDrawer from "../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer";

const AdminDashboardPage = () => {
  return (
    <div>
      <SideDrawer>

        <AdminDashboard />
      </SideDrawer>
    </div>
  );
};

export default AdminDashboardPage;
