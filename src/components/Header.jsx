import React from 'react'
import image from './assets/images/pngwing.com.png'
import   './assets/css/Header.css';

export default function Header() {
  return (
    <>
    <div className="header">
        <div className="left">
            <img className="w-full" src={image} alt="no images found" />
        </div>
        <div className="right">
          <button className="lang"><p>English</p></button>
          <button className="sign-in"><p>Sign-In</p></button>
        </div>
    </div>
    </>
  )
}
