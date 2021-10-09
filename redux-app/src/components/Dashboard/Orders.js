import React from 'react'

function Orders({ dress }) {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-20 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            dress.map((elem, index) => {
                                return (

                                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">

                                        <a class="block relative h-48 rounded overflow-hidden">

                                            <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={elem.image} />
                                        </a>
                                        <div class="mt-4">
                                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Women Dress</h3>
                                            <h2 class="text-gray-900 title-font text-lg font-medium">{elem.name.slice(0, 80)}</h2>
                                            <p class="mt-1">price : ${elem.price}</p>
                                            {/* <p class="mt-1">starting price : ${elem.price_string}</p> */}

                                        </div>

                                    </div>


                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Orders
