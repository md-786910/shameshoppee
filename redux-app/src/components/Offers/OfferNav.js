import React from 'react'

import { Link, useHistory } from "react-router-dom"
function OfferNav() {

    const history = useHistory()
    // console.log(history);

    const header_nav = {
        backgroundColor: "indigo",
        width: "100%"
    }

    return (
        <div>
            <header class="text-gray-600 body-font fixed z-10 " style={header_nav}>
                <div class=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <Link to="/offers" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span class="ml-3 text-lg" style={{ fontSize: 40, color: 'white' }} >Offers</span>
                    </Link>
                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to="/offers/mobile" class="mr-5 hover:text-gray-900 text-white">Mobile</Link>
                        <Link to="/offers/laptop" class="mr-5 hover:text-gray-900 text-white">Laptop</Link>
                        <Link to="/offers/face_wash_cream" class="mr-5 hover:text-gray-900 text-white">Face Wash & Cream </Link>
                        <Link to="/offers/television" class="mr-5 hover:text-gray-900 text-white">Laptop & Television</Link>
                    </nav>

                    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={() => history.goBack()}  >Back
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>

                </div>
            </header>
        </div>
    )
}

export default OfferNav
