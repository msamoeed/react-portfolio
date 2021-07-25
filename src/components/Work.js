import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                // <Card
                //   key={index}
                //   heading={project.title}
                //   paragraph={project.para}
                //   imgUrl={project.imageSrc}
                //   projectLink={project.url}
                // >


                // </Card>

                <img height={600} src={project.imageSrc} alt="about"></img>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
