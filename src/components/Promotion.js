import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
         
          {/* <div className="image-wrapper">
            <img height={500} src={data.promotionPara} alt="about"></img>
            

          </div> */}
         < div className="image-wrapper">
         <img height={650} src={data.reactApp} alt="abouts"></img>            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
