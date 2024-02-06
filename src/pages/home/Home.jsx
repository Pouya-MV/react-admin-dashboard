import React, { useContext } from 'react'
import './Home.css'
import { useRoutes } from 'react-router-dom'
import routes from '../../routes/routes'
import Topbar from '../../components/topbar/Topbar'
import { SidbarStatusContext } from '../../context/SidbarStatusContext'

export default function Home() {

  let router = useRoutes(routes)

  const menuStatus = useContext(SidbarStatusContext);



  const closeMenu = () => {
    menuStatus.setMenuStatus(prev => !prev)
  }

  return (
    <>
      <div className="home-container">
        <div className="home-topbar">
          <Topbar />
        </div>
        <div className="home-content">
        {router}
        </div>
      </div>
      <div className={menuStatus.menuStatus ? 'darkBg open-bg' : 'darkBg'} onClick={closeMenu}></div>
    </>
  )
}
