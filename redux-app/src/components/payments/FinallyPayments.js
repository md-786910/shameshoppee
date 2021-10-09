import React, { useState, useEffect } from 'react'

function loadRazorPay(src) {
    console.log(src)
    return new Promise(Resolve => {

        const script = document.createElement('script');
        script.src = src

        script.onload = () => {
            Resolve(true);
        }
        script.onerror = () => {
            Resolve(false);
        }

        document.body.appendChild(script);
    })

}

const __DEV__ = document.domain === "localhost"


function FinallyPayments(props) {

    // const { firstName, lastName, phone, country, postalCode, city, state, address } = (props.userDetail)
    const [user, setUser] = useState([])

    const [userInfo, setUserInfo] = useState()
    const [userOrdersDetails, setUserOrdersDetails] = useState()

    const fetchUserData = async () => {
        try {
            const res = await fetch("/checkAuth", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            if (res.status === 200) {
                setUser(data)
                setUserInfo(data.information)
                setUserOrdersDetails(data.carts)
            }
        } catch (error) {
            console.log("error fetching user data")
        }
    }

    // fetch userData from server
    useEffect(() => {
        fetchUserData()
    }, [])


    // set all price
    const price = ((props.product.reduce((inprice, v) => inprice = inprice + v.price, 0)))

    const nameuser = user.name;
    const emailUser = user.email;
    const contact = user.phone;
    const id = user._id;
    // make payment 
    // const script_key = "https://checkout.razorpay.com/v1/checkout.js"
    async function payMoney() {
        alert("Payment")

        try {
            const script = await loadRazorPay("https://checkout.razorpay.com/v1/checkout.js")
            console.log(script);
            if (!script) {
                alert("razorpay sdk failed to laod")
                return
            }

            // get userInfo of user 
            const { firstName, lastName, city, state, postalCode, email, country, address, phone } = userInfo[userInfo.length - 1]

            const res = await fetch("/razorpayMoney", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    price, firstName, lastName, city, state, postalCode, country, address, id, phone, email
                })
            })
            const data = await res.json()


            const options = {
                "key": __DEV__ ? "rzp_test_MgNn5wEsqPADa4" : "production__key ",
                "amount": data.amount.toString(),
                "order_id": data.order_id,
                "currency": data.currency,
                "receipt_id": data.receipt_id,
                "name": "Pay now for your item ",

                "description": "Shoppee may lead to payment details",

                "image": "http://localhost:5000/logo",

                "order_id": data.id,

                "handler": function (response) {
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                },
                "prefill": {
                    "name": nameuser,
                    "email": emailUser,
                    "contact": contact,
                },

            };

            var paymentObject = new window.Razorpay(options);
            paymentObject.open()

            // set orders cart
            const resOrders = await fetch("/cartsFinallyOrders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userOrdersDetails, id: id
                })
            })
            const dataOrders = await resOrders.json()

            if (resOrders.status === 200 || dataOrders === null) {

                alert("successfully payment orders")
            }
            else {
                alert(" payment not found")
            }

        } catch (error) {
            console.log("Error from catch")
        }
    }

    return (
        <div className="paymentContainer">
            <div className="payments">
                <div className="card">
                    <h1>
                        Welcome To Payment Gateway</h1>

                    <div className="paymentCard">
                        <h1>
                            Your Subtotal Price : Rs {price}
                        </h1>
                    </div>

                    <div className="payBtn">
                        <button id="rzp-button1" onClick={payMoney}>Pay Now {price}</button>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default FinallyPayments
