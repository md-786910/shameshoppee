import React from 'react'
import MainNav from '../Navbar/MainNav'

import FeatureProduct from './FeatureProduct'

function ShopNow() {
    return (
        <div>
            <MainNav />
            <hr />
            <br />
            <br />
            <br />
            <div className="form_container">
                <div className="title" style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: "40px", color: "white" }}>
                        Filter Own Products</p>
                </div>
                {/* make input field to filter out */}

                <form action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", marginTop: "1%" }}>

                    <input type="text" placeholder="filter product" style={{ width: "50%", border: "1px solid blue", fontSize: "20px", padding: "4px" }} name="filter" />

                    <button type="submit" style={{ width: "20%", border: "1px solid blue", backgroundColor: "white", padding: "5px", fontSize: "20px", color: "indigo", boarderRadius: "10px", marginTop: "20px", }}>
                        Filter
                    </button>

                </form>
            </div>


            <FeatureProduct />

        </div >
    )
}

export default ShopNow
