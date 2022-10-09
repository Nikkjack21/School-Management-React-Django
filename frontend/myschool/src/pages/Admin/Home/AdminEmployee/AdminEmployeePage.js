import React from 'react'
import AdminEmployeeView from '../../../../components/AdminComponent/AdminEmployeeComponent/AdminEmployeeView'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AdminEmployeePage = () => {
  return (
    <div>
        <SideDrawer>
            <AdminEmployeeView/>
        </SideDrawer>
    </div>
  )
}

export default AdminEmployeePage