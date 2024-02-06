import React from 'react'
import './ProductChart.css'
import Chart from '../chart/Chart'
import { productSale } from '../../Datas'

export default function ProductChart() {
    return (
        <>
            <div className="product-chart">
                <Chart grid data={productSale} datakey="sale" className="dddddddd" />
            </div>
        </>
    )
}
