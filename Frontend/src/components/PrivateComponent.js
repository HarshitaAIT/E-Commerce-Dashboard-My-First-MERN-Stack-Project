import React from 'react'
import {Navigate,Outlet } from 'react-router-dom'
//outlet allow to render child nodes in react router dom 

const PrivateComponent = () => {
  const auth=localStorage.getItem('user');
  return auth ? <Outlet/>:<Navigate to="/signup"/>
}

export default PrivateComponent
