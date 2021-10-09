import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import DashNav from "./DashNav"


function Dashboard() {

    const params = useParams().orderDetails;

    const history = useHistory()

    const [user, setUser] = useState()
    const [cart, setCartLength] = useState()
    const [dress, setDressUser] = useState([])
    const [orderDress, setOrderDress] = useState([])

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
                setUser(data.name)
                setCartLength(data.carts.length)
                setDressUser(data.carts)
                setOrderDress(data.cartsOrder)
            }
            else {
                alert('Error for dashboard')
            }

        } catch (error) {
            history.push("/login")

        }
    }

    useEffect(() => {
        chechIsAuth()
    }, [])


    // add all monet as subtotal
    const price = ((dress.reduce((inprice, v) => inprice = inprice + v.price, 0)))

    return (
        <div>
            <DashNav user={user} length={cart} dress={dress} params={params} totalPrice={price} orderDress={orderDress} />

        </div>
    )
}

export default Dashboard
