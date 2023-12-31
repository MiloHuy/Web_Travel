import React from 'react'
import './home.css'
import video from '../../Videos/sea_video.mp4'
import { GrFormLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type = "video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Holidays</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...'/>
              <GrFormLocation className = "icon"/>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
           <div className="label_total flex">
            <label htmlFor="price">Max Price:</label>
            <p className='total'>$5000</p>
           </div>
           <div className="input flex">
            <input type="range" max={5000} min= {1000} />
           </div>
          </div>
          <div className="searchOption flex">
            <HiFilter className = "icon"/>
            <span>MORE FILLTER</span>
          </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className = "icon"/>
            <AiOutlineInstagram className = "icon"/>
            <AiOutlineTwitter className = "icon"/>
          </div>
          <div className="leftIcons">
            <BsListUl className = "icon"/>  
            <TbApps className = "icon"/> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home