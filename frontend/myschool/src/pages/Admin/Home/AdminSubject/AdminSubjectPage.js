import React from 'react'
import AdminSubject from '../../../../components/AdminComponent/AdminSubjectComponent/AdminSubject'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AdminSubjectPage = () => {
  return (
    <div>
        <SideDrawer>
            <AdminSubject/>
        </SideDrawer>
    </div>
  )
}

export default AdminSubjectPage