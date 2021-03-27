import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithub, FaGlobe } from "react-icons/fa"

const Project = ({ title, github, tags, url, img, slug }) => {
  return (
    <article className="project">
      <div className="project-img-container">
        <a href={url}>
          <Image fluid={img.fluid} className="project-img" />
        </a>
      </div>

      <div className="project-info">
        <div className="project-stack">
          {tags.map(item => {
            return <span key={item.id}>{item},</span>
          })}
        </div>
        <h3>{title || "default title"}</h3>

        <div className="project-links">
          <a href={github}>
            <FaGithub className="project-icon" />
          </a>
          <a href={url}>
            <FaGlobe className="project-icon" />
          </a>
        </div>
      </div>

      <a href={`/projects/${slug}`} class="square_btn">
        More
      </a>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
