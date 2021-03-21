import React from "react"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects }) => {
  return (
    <section className="section projects">
      <div className="section-center projects-center">
        <h1>My projects</h1>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
