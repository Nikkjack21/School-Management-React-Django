import React from 'react'
import AdminSubjectOutlet from '../../../../components/AdminComponent/AdminSubjectComponent/AdminSubjectOutlet'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AdminSubjectPage = () => {
  return (
    <div>
        <SideDrawer>
            <AdminSubjectOutlet/>
        </SideDrawer>
    </div>
  )
}

export default AdminSubjectPage