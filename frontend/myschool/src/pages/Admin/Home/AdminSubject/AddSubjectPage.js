import React from 'react'
import AddSubjectComp from '../../../../components/AdminComponent/AdminSubjectComponent/AddSubjectComp'
import SideDrawer from '../../../../components/AdminComponent/Sidebar&Navbar/SideDrawer'

const AddSubjectPage = () => {
  return (
    <div>
        <SideDrawer>
            <AddSubjectComp/>
        </SideDrawer>
    </div>
  )
}

export default AddSubjectPage