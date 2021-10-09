import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Ecomerce from './Ecomerce'

import carProduct from "../productJson/productCar"
import productDress from "../productJson/productDress"

// console.log(carProduct) this is json object

function FeatureProduct() {

    const [state, setstate] = useState(carProduct)
    const [dress, setDress] = useState(productDress)

    // const [load, setLoad] = useState(true)

    // const ball = "ball";

    // const getProduct = async () => {
    //     let res = await fetch(`/amazonProduct/${ball}`, {
    //         "method": "GET",
    //         "headers": {
    //             "Content-Type": "application/json"
    //         }
    //     })

    //     setLoad(false)
    //     let data = await res.json()
    //     console.log(data.result)
    //     setstate(data.results)
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         getProduct()
    //     }, 4000);
    // }, [])

    // console.log(state)
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="women_dress">
                <h2 class="text-4xl font-bold text-center tracking-tight text-indigo-900 ml-16">Women Dress</h2>
                <Ecomerce dress={dress} />
            </div>
        </div>
    )
}

export default FeatureProduct
