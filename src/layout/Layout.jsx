import React from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'

export default function Layout({children, handleCreateFormOpen}) {
  const { pathname } = useLocation()

  return (
  <div>   
    { pathname !== "/" && <Navigation setShowForm={handleCreateFormOpen} /> }
    {children}   
  </div>
  )
}
