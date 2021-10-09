import React from 'react'
import image from "../images/delevery.jfif"

export default function MapContainer() {

    return (

        <div>
            <img src={image} alt="" style={{ width: '50vw', height: '50vh', objectFit: "contain", borderRadius: "10px" }} />
        </div>
    )
}


