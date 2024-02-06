import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import './ProductDetails.css'
import ProductInfo from '../productInfo/ProductInfo'
import ProductStat from '../productStat/ProductStat'
import ProductChart from '../productChart/ProductChart'
import { productRows } from '../../Datas'

export default function ProductDetails() {

    const [productDetail,setProductDetail] = useState(productRows)
    let productID = useParams()
    let intendedProduct = productDetail.filter(detail => detail.id == productID.id)
    console.log(intendedProduct)


    return (
        <>
            <div className="product-detail-box">
                <div className="product-detail-top">
                    <ProductInfo {...intendedProduct[0]} />
                </div>
                <div className="product-detail-bottom">
                    <div className="product-detail-bottom-left">
                        <ProductStat {...intendedProduct[0]} />
                    </div>
                    <div className="product-detail-bottom-right">
                        <ProductChart />
                    </div>
                </div>
            </div>
        </>
    )
}
