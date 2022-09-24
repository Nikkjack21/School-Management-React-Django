import React from 'react'
import NewClass from '../../../../components/AdminComponent/NewClassComponent/NewClass'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AdminClassPages = () => {
  return (
    <div>
        <SideDrawer>
            <NewClass/>
        </SideDrawer>
    </div>
  )
}

export default AdminClassPages