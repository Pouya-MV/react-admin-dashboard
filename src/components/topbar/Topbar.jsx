import React, { useState , useContext } from 'react'
import './Topbar.css'
import { SidbarStatusContext } from '../../context/SidbarStatusContext';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function Topbar() {


    const menuStatus = useContext(SidbarStatusContext);



    const openMunuHandler = () => {
        menuStatus.setMenuStatus(prev => !prev)
    }


    return (
        <>
            <div className="topbar">
                <MenuIcon className='menu-icon' onClick={openMunuHandler} />
                <div className="topbar-search">
                    <SearchIcon className='topbar-search-icon' />
                    <input type="text" className="topbar-search-input" placeholder='search here...' />
                </div>
                <div className="topbar-details">
                    <div className="topber-notif-box">
                        <div className="notif-spot"></div>
                        <NotificationsOutlinedIcon className='topbar-notif' />
                    </div>
                    <div className="admin-info">
                        <img src="image/admin.jpg" alt="admin" className="topbar-admin-img" />
                        <div className="admin-name-box">
                            <p className="admin-name">Pouya Mousayi</p>
                            <p className="admin-job">front-end developer</p>
                        </div>
                        <KeyboardArrowDownOutlinedIcon className='topbar-arrow' />
                    </div>
                </div>
            </div>
        </>
    )
}
