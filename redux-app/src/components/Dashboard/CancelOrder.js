import React from 'react'

function CancelOrder() {

    const container_cancel = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        padding: "20px",
        backgroundColor: "indigo",
        height: "20vh",
        width: "60%",
        borderRadius: "5px"

    }
    const btn = {
        color: "indigo",
        backgroundColor: "white",
        padding: "10px",
        width: "30%"
    }

    return (
        <div>
            <div className="cancel_order" style={container_cancel}>
                <button style={btn}>Cancel Order</button>
                {/* <button style={btn}></button> */}
            </div>
        </div>
    )
}

export default CancelOrder
