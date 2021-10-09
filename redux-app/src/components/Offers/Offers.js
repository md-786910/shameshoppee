import React, { useState } from 'react'

import { useParams } from 'react-router-dom'

import OfferNav from './OfferNav'
import OfferImage from './OfferImage'
import OfferCard from './OfferCard'
function Offers() {

    const data = useParams().offerValue

    console.log(data)

    return (
        <div>
            <OfferNav /><hr />
            <OfferImage />
            <OfferCard name="Master Offers" value={data} />

            <OfferCard name="Tik Tok Offer" value={data} />

            <OfferCard name="Most Loved" value={data} />

        </div>
    )
}

export default Offers
