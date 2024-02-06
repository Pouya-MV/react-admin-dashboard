import React, { useState, useContext } from 'react'
import './Sidbar.css'
import { SidbarStatusContext } from '../../context/SidbarStatusContext';
import { Link } from 'react-router-dom'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Sidbar() {

    const [menuItem, setMenuItem] = useState([
        { id: 1, name: 'Overview',path:'/', icon: <GridViewRoundedIcon className='sidbar-menu-icon' /> },
        { id: 2, name: 'Product',path:'/product', icon: <ViewInArIcon className='sidbar-menu-icon' /> },
        { id: 3, name: 'User',path:'/user', icon: <PersonOutlineIcon className='sidbar-menu-icon' /> },
        { id: 4, name: 'Newuser',path:'/newuser', icon: <PersonAddAltIcon className='sidbar-menu-icon' /> },
        { id: 5, name: 'Analytics',path:'/', icon: <AssessmentOutlinedIcon className='sidbar-menu-icon' /> },
        { id: 6, name: 'Payment',path:'/', icon: <AccountBalanceWalletOutlinedIcon className='sidbar-menu-icon' /> },
    ])

    const [activeItem, setActiveItem] = useState(null)
    const menuStatus = useContext(SidbarStatusContext);



    const HandelItemClick = (id) => {
        setActiveItem(id)
        menuStatus.setMenuStatus(false)
    }


    return (
        <>
            <div className={ menuStatus.menuStatus ? 'sidbar open' : 'sidbar'}>  
                <div className="sidbar-wrapper">
                    <div className="logo-box">
                        <h3 className="logo">P.MV</h3>
                        <p className="logo-caption">front-end developer</p>
                    </div>
                    <div className="sidbar-menu">
                        <p className="sidbar-menu-title">Main Menu</p>
                        <ul className="sidbar-menu-ul">

                            {menuItem.map((item) => (

                                <li className="sidbar-menu-li" key={item.id}>
                                    <Link className={activeItem === item.id ? 'sidbar-menu-link active' : 'sidbar-menu-link'} to={item.path} onClick={() => HandelItemClick(item.id)}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                </li>

                            ))}

                        </ul>
                    </div>
                    <div className="sidbar-option">
                        <p className="sidbar-menu-title">other option</p>
                        <ul className="sidbar-menu-ul">
                            <li className="sidbar-menu-li">
                                <Link className='sidbar-menu-link' to="/">
                                    <InfoOutlinedIcon className='sidbar-menu-icon' />
                                    <span>Help</span>
                                </Link>
                            </li>
                            <li className="sidbar-menu-li">
                                <Link className='sidbar-menu-link' to="/">
                                    <SettingsOutlinedIcon className='sidbar-menu-icon' />
                                    <span>Setting</span>
                                </Link>
                            </li>
                            <li className="sidbar-menu-li">
                                <Link className='sidbar-menu-link' to="/">
                                    <LogoutOutlinedIcon className='sidbar-menu-icon' />
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sidbar-update-box">
                        <p className="sidbar-update-title">Become a <span>PRO</span></p>
                        <p className="sidbar-update-txt">To get more features</p>
                        <button className="sidbar-update-btn">Upgrade Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
