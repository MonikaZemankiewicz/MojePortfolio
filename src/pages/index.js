import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import { graphql } from "gatsby"

export default ({ data }) => {
  const {
    allContentfulProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProjects(
      filter: { featured: { eq: true } }
      sort: { order: ASC, fields: number }
    ) {
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
