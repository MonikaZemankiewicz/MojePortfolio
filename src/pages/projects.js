import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: {
    allContentfulProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProjects(sort: { order: ASC, fields: number }) {
      nodes {
        title
        description {
          description
        }
        img {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        number
        slug
        url
        tags
        github
      }
    }
  }
`
export default ProjectsPage
