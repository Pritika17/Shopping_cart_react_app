import React, { useState } from "react"
import "../styles/nav.css"
import { BiMenu } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={require("../assets/logo.png")} alt="" />
      </div>
      <div className={
        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
      }>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Products</p>
          </li>
        </ul>
      </div>
      <div className="cart">
        <ul>
          <li>
          <BiCart size={34}/>
          <span>0</span>
          </li>
        </ul>
        <div className="hamburger-menu">
          <p onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <BiMenu size={34}/>
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Nav