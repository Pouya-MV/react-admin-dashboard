import React, { useState } from 'react'
import './Analytics.css'
import AnalyticsInfo from '../analyticsInfo/AnalyticsInfo'
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Analytics() {

    const [analytics, setAnalytics] = useState([
        {id:1, title:'Total Users', num1:'123,456',num2:'456', calsname:'analytics-num red', icon1:<AccountCircleIcon className='analytics-icon' />,icon2:<CallReceivedIcon className='analytics-arrow-icon red' />},
        {id:1, title:'Total Orders', num1:'123,456',num2:'456', calsname:'analytics-num', icon1:<ShoppingCartIcon className='analytics-icon' />,icon2:<CallMadeIcon className='analytics-arrow-icon' />},
        {id:1, title:'Total Products', num1:'123,456',num2:'456', calsname:'analytics-num', icon1:<ShoppingBagIcon className='analytics-icon' />,icon2:<CallMadeIcon className='analytics-arrow-icon' />},
    ])




    return (
        <>
            <div className="main-analytics-title">
                <p>Sales Analytics</p>
            </div>
            <div className="main-analytics-box">
                <AnalyticsInfo {...analytics[0]} />
                <AnalyticsInfo {...analytics[1]} />
                <AnalyticsInfo {...analytics[2]} />
            </div>
            <button className="main-analytics-btn">Add Product</button>
        </>
    )
}
