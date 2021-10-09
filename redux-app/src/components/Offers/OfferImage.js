import React from 'react'
import offer1 from "../images/offer.jfif"
import offer2 from "../images/offers1.jfif"
function OfferImage() {

    const offer = {
        display: "flex",
        alignItems: "center",
        paddinTop: "10%",
        justifyContent: "space-around"

    }
    const offerBack = {
        marginTop: "13vh",
        backgroundColor: "blue",
        borderRadius: "20px"
    }
    const addFeature = {
        textAlign: "center",
        color: "white"
    }
    return (
        <div>
            <div className="offerImage" style={offerBack}>
                <div className="setImage" style={offer}>
                    <img src={offer1} alt="" style={{ borderRadius: "30%" }} />
                    <div className="addFeature" style={addFeature}>
                        <p style={{ fontSize: "40px" }}>
                            Special Offers In Maharaja Days
                            Comming Soon 🧡
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferImage
