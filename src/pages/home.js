import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/banner.jpg"
function Home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Burger</h1>
        <p>Özel Burger <br/> 33 Tl farkla</p>
        <Link to="/menu">
        <button>Satın Al</button>
        </Link>
      </div>
    </div>
  )
}

export default Home