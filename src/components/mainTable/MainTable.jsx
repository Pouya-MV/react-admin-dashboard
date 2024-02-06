import React, { useState } from 'react'
import './MainTable.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CircleIcon from '@mui/icons-material/Circle';


export default function MainTable() {

    const [tableInfo, setTableInfo] = useState([
        { id: 1, name: 'iphone13 Pro max', img: 'image/iphone13.png', price: '$1,600', sale: '$112,000', status: "in stock", statusclass: "main-table-td green size" },
        { id: 2, name: 'AirPods Pro 2021', img: 'image/air.png', price: '$215', sale: '$30,100', status: "in stock", statusclass: "main-table-td green size" },
        { id: 3, name: 'MacBook Pro', img: 'image/mac.png', price: '$2,220', sale: '$59,940', status: "out of stock", statusclass: "main-table-td red size" },
        { id: 4, name: 'Playstation 5', img: 'image/ps5.png', price: '$634', sale: '$43,112', status: "in stock", statusclass: "main-table-td green size" },
        { id: 5, name: 'Galaxy S23 Ultra', img: 'image/s23.png', price: '$1,198', sale: '$40,744', status: "out of stock", statusclass: "main-table-td red size" },
        { id: 6, name: 'hp EliteBook', img: 'image/hp.png', price: '$1,300', sale: '$31,200', status: "in stock", statusclass: "main-table-td green size" },
    ])


    return (
        <>
            <div className="main-table-top">

                <div className="main-table-title">
                    <p>Best Selling products</p>
                    <InfoOutlinedIcon className='main-chart-icon' />
                </div>
                <div className="main-table-date">
                    <CalendarMonthIcon className='table-date-icon' />
                    <p>13july-19july</p>
                </div>

            </div>

            <div className="main-table">
                <table className='table'>
                    <thead className='main-table-thead'>
                        <tr className="main-table-tr">
                            <th className="main-table-th id">NO</th>
                            <th className="main-table-th name">PRODUCT Name</th>
                            <th className="main-table-th size">Price</th>
                            <th className="main-table-th size">Sold</th>
                            <th className="main-table-th size">Status</th>
                        </tr>
                    </thead>
                    <tbody className="main-table-tbody">
                        {tableInfo.map((product) => (
                            <tr className="main-table-tr" key={product.id}>
                                <td className="main-table-td id">{product.id}</td>
                                <td className="main-table-td name">
                                    <img src={product.img} alt="product" className="main-table-img" />
                                    {product.name}
                                </td>
                                <td className="main-table-td size">{product.price}</td>
                                <td className="main-table-td size">{product.sale}</td>
                                <td className={product.statusclass}>
                                    <CircleIcon className='main-table-spot' />
                                    {product.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
