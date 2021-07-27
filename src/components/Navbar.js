import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import data from '../images/logo.png'
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          > 
         
            DevAll
          </div>
           <div>
          <img height={50} src={data} alt="abouts"></img>            

          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            {/* <button onClick={() => scrollTo("#contact")}>Get Quote</button> */}

            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
