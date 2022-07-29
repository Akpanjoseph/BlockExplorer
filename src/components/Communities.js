import React from 'react';

import discord from '../img/discord.png'
import fb from '../img/facebook-icon.png'
import tw from '../img/twitter.png'
import ins from '../img/instagram.jpg'

export function Communities() {


    return (
        <>

            <section id='social-media'>
                <h2 className='title'>
                    Join our Community
                </h2>

                <div id='social-media-cont'>

                    <a href="#"><img src={fb} alt="facebook" className='img-lg' /></a>
                    <a href="#"><img src={discord} alt="discord"  className='img-lg'/></a>
                    <a href="#"><img src={tw} alt="twitter"  className='Img-sm'/></a>
                    <a href="#"><img src={ins} alt="instergram" className='Img-sm' /></a>
                </div>
            </section>

        </>
    )
}
