import React, { useState } from 'react'
import './Main.css'
import Sale from '../../components/sale/Sale';
import MainTop from '../../components/mainTop/MainTop';
import MainTable from '../../components/mainTable/MainTable';
import Chart from '../../components/chart/Chart';
import { chartInfo } from './../../Datas'
import Costumer from '../../components/cosumer/Costumer';
import Analytics from '../../components/analytics/Analytics';
import PaymentsIcon from '@mui/icons-material/Payments';
import CallMadeIcon from '@mui/icons-material/CallMade';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export default function Main() {

    const [saleInfo, setSaleInfo] = useState([
        { id: 1, price: '$456,826,143', caption: 'Total Revenue', description: '24% than last week', classname: "price-icon", saleIcon: <PaymentsIcon className='sale-price-icon' />, descIcon: <CallMadeIcon className='sale-disc-icon' /> },
        { id: 1, price: '$75,266,578', caption: 'Total Sales', description: '12% than last week', classname: "price-icon green", saleIcon: <AssignmentTurnedInIcon className='sale-price-icon green' />, descIcon: <CallMadeIcon className='sale-disc-icon' /> },
        { id: 1, price: '$124,622,456', caption: 'Total Expenses', description: '10% than last week', classname: "price-icon red", saleIcon: <MonetizationOnIcon className='sale-price-icon red' />, descIcon: <CallReceivedIcon className='sale-disc-icon red' /> },
    ])





    return (
        <>
            <div className="main-container">
                <div className="main-left-content">

                    <div className="main-top">
                        <MainTop />
                    </div>

                    <div className="main-sale">
                        <Sale {...saleInfo[0]} />
                        <Sale {...saleInfo[1]} />
                        <Sale {...saleInfo[2]} />
                    </div>

                    <div className="main-chart">
                        <div className="main-chart-top">
                            <div className="main-chart-title">
                                <p>Sales Statistics</p>
                                <InfoOutlinedIcon className='main-chart-icon' />
                            </div>
                            <button className="main-chrt-btn">
                                Monthly
                                <KeyboardArrowDownIcon className='chrt-btn-icon' />
                            </button>
                        </div>
                        <Chart grid data={chartInfo} datakey="sale" />
                    </div>

                    <div className="main-table-box">
                        <MainTable />
                    </div>

                </div>
                <div className="main-right-content">
                    <div className="main-costumer">
                        <Costumer />
                    </div>
                    <div className="main-analytics">
                        <Analytics />
                    </div>
                </div>
            </div>
        </>
    )
}
