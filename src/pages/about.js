import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const AboutPage = ({
  data: {
    allContentfulProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
       <section className="about-page">
         <h2>In creation :)</h2>
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
export default AboutPage
