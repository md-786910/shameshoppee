import React, { useState, useEffect } from 'react'

function OfferCard({ name, value }) {
    const [state, setstate] = useState([])


    // const getProduct = async () => {
    //     let res = await fetch(`https://amazon23.p.rapidapi.com/product-search?query=${value}&page=1&country=US`, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "amazon23.p.rapidapi.com",
    //             "x-rapidapi-key": "2feae67a2emsh92d0de018ae315ep15fecajsn4b297966b8de"
    //         }
    //     })

    //     let data = await res.json()

    //     console.log(data.result)
    //     setstate(data.result)
    // }

    // useEffect(() => {
    //     getProduct()
    // }, [state])

    // "https://source.unsplash.com/500x300/?dress,shirt"
    return (
        <div>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font text-blue-900 lg:w-1/3 lg:mb-0 mb-4">{name} </h1>

                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?dress,shirt" />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://source.unsplash.com/501x301?shirt,ball" />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://source.unsplash.com/600x360/?Tshirt,toy" />
                                {/* "https://source.unsplash.com/600x360/?Tshirt,toy" */}
                            </div>
                        </div >
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://source.unsplash.com/600x361/?laptop,football" />
                                {/* "https://source.unsplash.com/600x361/?laptop,football" */}
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://source.unsplash.com/502x302/?television,glass" />
                                {/* "https://source.unsplash.com/502x302/?television,glass" */}
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://source.unsplash.com/503x303/?frock,girl" />
                                {/* "https://source.unsplash.com/503x303/?frock,girl" */}
                            </div>
                        </div>
                    </div >
                </div >
            </section >

        </div >
    )
}

export default OfferCard
