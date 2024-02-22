import React from 'react'
import "./NavBar.css"
function NavBar() {


    return (
        <div className="navbar navbar_black">
            <div className="navbar_content">
                <div className='logo_container'>
                    <img className="navbar_logo1"

                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                        alt="Netflix Logo"
                    />
                    <img className='navbar_logo2' src="/logo2.png" alt='' />
                </div>

                {/*<div className='navbar_links'>
                    <p className='navbar_link'>Home</p>
                    <p className='navbar_link'>Tv shows</p>
                    <p className='navbar_link'>Movies</p>
                    <p className='navbar_link'>New & Popular</p>
                    <p className='navbar_link'>My List</p>
                    <p className='navbar_link'>Browse by Languages</p>
                </div>*/}


                <div class="scrollmenu grad">
                    <p >Home</p>
                    <p className='navbar_link'>Tv shows</p>
                    <p className='navbar_link'>Movie</p>
                    <p className='navbar_link'>New & Popular</p>
                    <p className='navbar_link'>My List</p>
                    <p className='navbar_link'>Browse by Languages</p>
                </div>


                <img className='bell_icon' src='/musical-bell-outline.png' alt='' />
                <img
                    className="navbar_avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                    alt="Netflix Logo"
                />
                <img className='dropDown_icon' src="/arrow-216-16.ico" alt='' />
            </div>
        </div>
    )
}

export default NavBar