import React from 'react'
import TeacherComponent from '../../../../components/AdminComponent/AdminTeacherComponent/TeacherComponent'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AdminTeacherPage = () => {
  return (
    <div>
        <SideDrawer>
            <TeacherComponent/>
        </SideDrawer>
    </div>
  )
}

export default AdminTeacherPage