import React, { useEffect, useState } from 'react'

import { Link, useHistory, useLocation } from "react-router-dom"

import MainNav from "../Navbar/MainNav"
import FinallyPayments from "./FinallyPayments"
import UserFormDetail from "./UserFormDetail"

import ConfirmProductDetails from "./ConfirmProductDetails"

function Payment() {
    const location = useLocation()
    const history = useHistory()

    const [userDetail, setUserDetail] = useState()

    const [product, setProduct] = useState([])
    const [userInfo, setUserInfo] = useState()

    const chechIsAuth = async () => {
        try {
            let res = await fetch('/checkAuth', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            let data = await res.json();
            if (res.status === 200) {
                setProduct(data.carts)
                setUserInfo({ name: data.name, email: data.email, phone: data.phone })
            }
            else {
                alert("404 error payment page")
            }

        } catch (error) {
            history.push("/login")
            console.log("error" + error)
        }
    }

    useEffect(() => {
        chechIsAuth()
    }, [])


    // const userFormDetail = (props) => {

    //     setUserDetail(props)
    // }

    return (
        <div>
            <div>
                <MainNav />
                <ConfirmProductDetails product={product} />
                <UserFormDetail />
                <FinallyPayments product={product} userInfo={userInfo} />

                {/* userFormDetail={userFormDetail} */}
                {/* userDetail={userDetail} */}
            </div>
        </div>
    )
}

export default Payment
