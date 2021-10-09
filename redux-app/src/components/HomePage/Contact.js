import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router-dom"

function Contact() {
    const history = useHistory()

    const [textuser, setTextUser] = useState({
        name: "", email: "", message: ""
    })

    const handleText = (e) => {
        const name = e.target.name
        const value = e.target.value
        setTextUser({ ...textuser, [name]: value })
    }

    // send data to database
    const sendMessages = async (e) => {
        try {
            e.preventDefault()
            console.log(textuser);
            const { name, email, message } = textuser
            const res = await fetch("/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            })

            let data = await res.json()
            if (res.status === 200) {
                alert("Message send successfully")
            }
            else {
                alert("Message related error")
            }

            setTextUser({ name: "", email: "", message: "" })

        } catch (error) {
            history.push("/login")
            alert("plase login to  send message")
        }

    }


    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Please Notify me  If Any Problem</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                            We Comout <b>Shortly</b>
                        </p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <form method="post">
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={textuser.name} onChange={handleText} />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={textuser.email} onChange={handleText} />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-gray-600">Any Problem</label>
                                        <textarea id="" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={textuser.message} onChange={handleText}></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={sendMessages}>Send Query</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
