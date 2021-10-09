import React, { useEffect, useState } from 'react'
import Card from "./Card"
import Features from "./Features"
import Rating from "./Rating"
import Contact from "./Contact"
import HomeNav from "./HomeNav"

function Home() {

    const [das, setDas] = useState()

    const hideShow = async () => {
        try {
            let res = await fetch('/checkAuth', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            })
            let data = await res.json()
            if (res.status === 200) {
                setDas(true)
            }
            else {
                alert("cannot hide dashboard error login please")
            }

        } catch (error) {
            console.log("error for fetching token")
            setDas(false)
        }
    }
    useEffect(() => {
        hideShow()
    }, [])
    return (
        <div>
            <HomeNav das={das} />
            <hr />
            <Card name="Profile Owners" />
            <hr />
            <Features />
            <hr />
            <Rating />
            <hr />
            <Contact />
            <hr />
        </div>
    )
}

export default Home
