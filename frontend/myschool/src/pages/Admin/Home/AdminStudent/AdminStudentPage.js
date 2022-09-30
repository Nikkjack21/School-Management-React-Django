import React from 'react'
import AdminStuentComp from '../../../../components/AdminComponent/AdminStudentComponent/AdminStuentComp'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AdminStudentPage = () => {
  return (
    <div>
        <SideDrawer>
            <AdminStuentComp/>
        </SideDrawer>
    </div>
  )
}

export default AdminStudentPage