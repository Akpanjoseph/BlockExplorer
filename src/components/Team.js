import React from 'react'

import ceo from '../img/human1.jpg'
import cto from '../img/human4.jpg'
import softwareDev from '../img/human3.jpg'

export function Team() {


    return (
        <>
            <section id='team-section' >

                <h2 className='title'>
                    Our Team
                </h2>

                <div id='team-mate'>
                    <div>
                        <img src={ceo} alt="" />
                        <p>Akpan Joseph </p>
                        <p>Co-founder</p>
                    </div>

                    <div>
                        <img src={cto} alt="" />
                        <p>Akpan Joseph </p>
                        <p>Co-founder</p>
                    </div>


                    <div>
                        <img src={softwareDev} alt="" />
                        <p>Akpan Joseph </p>
                        <p>Co-founder</p>
                    </div>


                </div>
            </section>
            <div className='clear'></div>
        </>
    )
}
