import React from 'react'
import AddClass from '../../../../components/AdminComponent/NewClassComponent/AddClass'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'


const AddClassPage = () => {
  return (
    <div>
        <SideDrawer>
          <AddClass/>
        </SideDrawer>
    </div>
  )
}

export default AddClassPage