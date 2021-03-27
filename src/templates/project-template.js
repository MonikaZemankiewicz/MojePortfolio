import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { FaGithub, FaGlobe } from "react-icons/fa"
import { graphql } from "gatsby"

const ProjectTemplate = ({
  data: {
    project: { title, img, tags, url, github, description },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <section className="single-project">
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
          </article>
          <div className="description">
            <p>{description.description}</p>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: contentfulProjects(slug: { eq: $slug }) {
      title
      url
      github
      description {
        description
      }
      img {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tags
    }
  }
`

export default ProjectTemplate
