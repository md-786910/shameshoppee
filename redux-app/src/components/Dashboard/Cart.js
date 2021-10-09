import React, { useState, useEffect } from 'react'
import MainNav from '../Navbar/MainNav'
import { Link, useHistory, useLocation } from 'react-router-dom'
import FeatureProduct from '../ProductRelated/FeatureProduct'



function Cart() {

    const [product, setProduct] = useState([])


    // const [fullPrice, setFullPrice] = useState(0)


    const [close, setClose] = useState("block")

    // check is auth or not
    const history = useHistory()

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
            setProduct(data.carts)

            if (res.status === 200) {
                // alert("successfully go to cart")
            }
            else {
                alert("something went wrong")
            }
        } catch (error) {
            history.push("/login")
            console.log("error" + error)
        }
    }


    // add all monet as subtotal
    const price = ((product.reduce((inprice, v) => inprice = inprice + v.price, 0)))


    // remove cart item 
    const removeCartItem = async (e) => {
        try {
            e.preventDefault()

            const id = e.target.value;

            const res = await fetch("/removItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: id })
            })

            const data = await res.json()
            if (res.status === 200) {
                alert("item deleted successfully")
                console.log(data)
            }
            else {
                alert("erno deleted")
            }

            chechIsAuth()

        } catch (error) {

        }
    }




    useEffect(() => {
        chechIsAuth()
    }, [])


    return (
        <div>
            <MainNav />
            <hr />
            <br />
            <br />
            <br />
            <br />
            <div className="relatedProductCart">
                <h1 style={{ fontSize: "40px", paddingLeft: "65px", paddingTop: "1%" }}>
                    Related Product
                </h1>
            </div>
            {/* releted product */}

            <FeatureProduct />

            <div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true"

                style={{ display: close, }}
            >
                <br />
                <br />
                <br />
                <div class="absolute inset-0 overflow-hidden">

                    <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">

                        <div class="w-screen max-w-md">
                            <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                                            Shopping cart
                                        </h2>
                                        <div class="ml-3 h-7 flex items-center">
                                            <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setClose("none")}>
                                                <span class="sr-only">Close panel</span>

                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {
                                        product.length ?
                                            <div class="mt-8">
                                                {
                                                    product.map((elem, index) => {
                                                        return (
                                                            <div class="flow-root mt-8" key={index}>
                                                                <ul role="list" class="-my-6 divide-y divide-gray-200">

                                                                    <li class="py-6 flex">
                                                                        <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                                            <img src={elem.image} alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="w-full h-full object-center object-contain" />
                                                                        </div>

                                                                        <div class="ml-4 flex-1 flex flex-col">
                                                                            <div>
                                                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#">
                                                                                            {elem.name}
                                                                                        </a>
                                                                                    </h3>
                                                                                    <p class="ml-4">
                                                                                        ${elem.price}
                                                                                    </p>
                                                                                </div>
                                                                                <p class="mt-1 text-sm text-gray-500">
                                                                                    {elem.color}
                                                                                </p>
                                                                            </div>
                                                                            <div class="flex-1 flex items-end justify-between text-sm">
                                                                                <p class="text-gray-500">
                                                                                    Qty {elem.color}
                                                                                </p>


                                                                                <div class="flex">
                                                                                    <button type="button" value={index} class="font-medium text-indigo-600  hover:text-indigo-500" onClick={removeCartItem} >Remove</button>

                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            : <div style={{ marginTop: "30px", fontSize: "25px", color: "indigo", textAlign: "center" }}>
                                                <h1>
                                                    Cart is Empty</h1>

                                            </div>

                                    }

                                </div>

                                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    {
                                        product.length ? <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>${price}.00</p>
                                            </div>
                                            <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div class="mt-6">
                                                <Link to={{ pathname: "/payment", state: { purchaseProduct: product } }} class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Checkout</Link>
                                            </div>
                                        </div> : <h1> </h1>

                                    }
                                    <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                                        <p>
                                            or <button type="button" class="text-indigo-600 font-medium hover:text-indigo-500"><Link to="/product">
                                                Continue Shopping
                                            </Link><span aria-hidden="true"> &rarr;</span></button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Cart
