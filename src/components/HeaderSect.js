import React from 'react'

import logo from '../img/logo.jpg';
import monkey from '../img/monkey.jpg';

 function HeaderSect() {


    return (
        <>

        
        {/* nav  */}
            <nav>
                {/* logo */}
                <div id='logo'>
                        <img src={logo} alt="" />
                        <p >
                            Block Explorer
                        </p>
                </div>

                {/* links */}

                <div id='nav-links'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
            </nav>

                <div className='clear'></div>
        
            {/* hero section */}
            <header>

                    {/* header text */}
                    <div id='hero-text'>
                        <h1>
                            Explore , Create and Mint your images as NFTs  Collections 
                        </h1>

                        {/* header button */}
                        <div id='btn-section'>
                            <p className='btn'> Create Nft</p>
                            <p className='btn'> Explore</p>
                            <p className='btn'> Search Nft</p>
                        </div>
                    </div>

                    {/* image */}
                    <div id='hero-image'>
                        <img src={monkey} alt="" />
                    </div>
            </header>

            <div className='clear'></div>
        </>
    )
}

export default HeaderSect
