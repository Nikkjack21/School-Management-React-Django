import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminEmployeeView = () => {
  return (
    <div className='mx-5'>
        <Outlet/>
    </div>
  )
}

export default AdminEmployeeView