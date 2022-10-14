import React from 'react'
import { useEffect } from 'react'

const EmployeeDashboard = () => {

  useEffect(()=>{
    document.title='Employee Home'
  },[ ])
  return (
    <div>EmployeeDashboard</div>
  )
}

export default EmployeeDashboard