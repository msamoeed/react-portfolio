import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import tawkTo from "tawkto-react";


const tawkToPropertyId = '521727297ca1334016000005'
const tawkToKey = '18nms7gql'




const Header = () => {
  React.useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey)
  }, [])

  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade >
            <h2>
              Hi, We are {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade >
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Hybrid Mobile Applications"}
              </h1>

              <h1>
           


              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Web Apps"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "Desktop Applications and years of experience"}
              </h1>
            </div>
          </Fade>
          <Fade >
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade >
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "msamoeed@gmail.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH US
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
