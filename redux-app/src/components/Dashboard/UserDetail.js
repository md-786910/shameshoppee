import React, { useEffect, useState } from 'react'

import { useHistory } from "react-router-dom"

function UserDetail() {
    const history = useHistory()

    const [user, setUser] = useState([])

    const fetchData = async () => {
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
                // console.log(data)

                setUser(data)
            }
            else {
                alert("cant get user data at profile page")
            }

        } catch (error) {
            console.log("error for fetching profile data")
        }
    }


    useEffect(() => {

        fetchData()
    }, [])


    return (
        <div>

            <div className="userDetails">
                <div class=" shadow overflow-hidden sm:rounded-lg userDetails">
                    <div class="px-4 py-5 sm:px-6">


                        <div className="divBtnBack" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <h3 class="text-3xl leading-6 font-medium text-red-100">
                                User Information
                            </h3>
                            <p class="mt-2 max-w-2xl mx-3 text-sm text-tomato-500" style={{ color: 'white' }}>
                                Personal details and application.
                            </p>
                            <div className="btn" style={{ textAlign: 'right', transform: 'translateX(53vw)' }}>
                                <button style={{ color: 'indigo', backgroundColor: 'white', width: "10vw", padding: "10px", borderRadius: "5px" }} onClick={() => history.goBack()}  >Back &nbsp;
                                    <i className="fa fa-arrow-right"> </i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-indigo-200">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Full name
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.name}
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Phone
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.phone}
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.email}
                                </dd>
                            </div>

                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    About
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Your Order Details
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div class="w-0 flex-1 flex items-center">

                                                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                                                </svg>
                                                <span class="ml-2 flex-1 w-0 truncate">
                                                    Download Your Orders
                                                </span>
                                            </div>
                                            <div class="ml-4 flex-shrink-0">
                                                <a href="splash.png" class="font-medium text-indigo-600 hover:text-indigo-500" download style={{ cursor: "pointer" }}>
                                                    Download
                                                </a>
                                            </div>
                                        </li>

                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UserDetail
