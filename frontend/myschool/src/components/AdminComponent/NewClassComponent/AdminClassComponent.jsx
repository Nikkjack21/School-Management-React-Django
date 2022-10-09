import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminClassComponent = () => {
  return (
    <div className='mx-10'>
        <Outlet/>
    </div>
  )
}

export default AdminClassComponent