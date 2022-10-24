import React from 'react'
import TimetableCOmponent from '../../../../components/AdminComponent/AdminTimeTableComponent/TimetableCOmponent'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AdminTimeTbalePage = () => {
  return (
    <div>
            <SideDrawer>
                <TimetableCOmponent/>
            </SideDrawer>
        

    </div>
  )
}

export default AdminTimeTbalePage