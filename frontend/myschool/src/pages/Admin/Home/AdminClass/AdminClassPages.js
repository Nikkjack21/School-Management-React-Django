import React from 'react'
import AdminClassComponent from '../../../../components/AdminComponent/NewClassComponent/AdminClassComponent'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AdminClassPages = () => {
  return (
    <div>
        <SideDrawer>
            <AdminClassComponent/>
        </SideDrawer>
    </div>
  )
}

export default AdminClassPages