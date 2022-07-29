import React from 'react'

import nft1 from '../img/nft1.jpg'
import nft2 from '../img/nft6.jpg'
import nft3 from '../img/nft3.jpg'
import nft4 from '../img/nft4.jpg'

export function Explorer() {


    return (
        <>
            <main>

                    <h2 className='title'>
                        Nft Collections
                    </h2>

                <div id='explore-image'>
                    <img src={nft1} alt="" />
                    <img src={nft2} alt="" />
                    <img src={nft3} alt="" />
                    <img src={nft4} alt="" />
                </div>
            </main>

            <div className='clear'></div>

            
        </>
    )
}
