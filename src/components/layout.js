import React from 'react'
import MainMenu from './MainMenu'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
)

export default Layout
