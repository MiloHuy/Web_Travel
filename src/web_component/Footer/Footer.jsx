import React from 'react'
import './footer.css'
import video2 from '../../Videos/video_footer.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"> </video>
      </div>
      <div className="setContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className="btn flex" type="submit">
              SEND<FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />Travel
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non luctus
            </div>
            <div className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillFacebook className='icon' />
              <AiFillInstagram className='icon' />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group one*/}
            <div className="linkGroup">
              <span className="groupTilte">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurances
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>
            {/* Group two*/}
            <div className="linkGroup">
              <span className="groupTilte">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostlWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>
            {/* Group three*/}
            <div className="linkGroup">
              <span className="groupTilte">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer