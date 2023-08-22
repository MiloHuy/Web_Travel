import React,{useState} from 'react'
import '../Navbar/navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
const Navbar = () => {
  const [active,setActive] = useState("navBar")
  const showNav = ()=>{
    setActive("navBar activeNavBar")
  }
  const removeNav = ()=>{
    setActive("navBar")
  }
  return (
    <section className = "navBarSection">
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className="logo flex">
            <h1> <MdOutlineTravelExplore className='icon'/>Travel</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItems">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Package</a>
              </li>
              <li className="navItems">
                <a href="#" className="navLink">Shop</a>
              </li>
              <li className="navItems">
                <a href="#" className="navLink">About</a>
              </li>
              <li className="navItems">
                <a href="#" className="navLink">Pages</a>
              </li>
              <li className="navItems">
                <a href="#" className="navLink">News</a>
              </li>
              <li className="navItems">
                <a href="#" className="navLink">Contact</a>
            </li>
            <button className="btn">BOOKNOW</button>
          </ul>
          <div onClick ={removeNav} className="closeNavBar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavBar">
            <PiDotsNineBold className='icon'/>
        </div>  
      </header>
    </section>
  )
}

export default Navbar;