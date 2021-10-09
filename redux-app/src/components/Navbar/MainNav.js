import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from "../images/logo.png"
function MainNav() {
    const history = useHistory()

    const NavTag = {
        color: 'white',
    };
    const btnhome = {
        backgroundColor: "white",
        padding: "5px",
        color: "indigo",
        borderRadius: "2px"
    }
    return (
        <div>

            <header class="text-gary-600 body-font " >
                <div class=" mx-auto flex flex-wrap  flex-col md:flex-row items-center fixed z-10 " style={{ backgroundColor: "indigo", width: "100%", }}>

                    <Link to="/product" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <img src={logo} alt="" style={{ width: 70 }} />
                        <span class="ml-3 text-3xl text-white">ShameShopee</span>
                    </Link>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/product/tshirt" style={NavTag} style={{ padding: "5px", color: "white" }} class="mr-5 hover:text-gray-900">Shirt & Tshirt</Link>

                        <Link to="/product/women_dress" style={NavTag} class="mr-5 hover:text-gray-900 ">Women Dress</Link>

                        <Link to="/product/computer_accessories" style={NavTag} class="mr-5 hover:text-gray-900 ">Computer Accessories</Link>

                        <Link to="/product/child_dress" style={NavTag} class="mr-5 hover:text-gray-900 ">child Dress</Link>

                        <Link to="/product/mens_ware" style={NavTag} class="mr-5 hover:text-gray-900 ">MensWare</Link>

                        <Link to="/product/mobile_laptop" style={NavTag} class="mr-5 hover:text-gray-900 ">Mobile & Laptop</Link>

                        <Link to="/dashboard" style={NavTag} class="mr-5 hover:text-gray-900 ">Dashboard</Link>
                    </nav>

                    <button style={btnhome} onClick={() => history.goBack()}>Back
                        Home
                        <i class="fa mx-3  fa-arrow-right"> </i>
                    </button>

                </div>
            </header>
        </div>
    )
}

export default MainNav
