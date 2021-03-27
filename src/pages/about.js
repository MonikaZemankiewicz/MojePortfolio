import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Courses from "../components/Courses"

const query = graphql`
  {
    file(relativePath: { eq: "profile-picture.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Layout>
      <section className="about-page">
        <section className="about-section">
          <Image fluid={fluid} className="about-img"></Image>
          <div className="about-info">
            <h3> About me</h3>
            <p>
              I'm a computer science student at Wroclaw University of Science
              and Technology. I've been interested in programming since high
              school. In the past few years I've done many projects using
              various technologies. I'm especially interested in web
              technologies, design and UI/UX.
            </p>
          </div>
        </section>
        {/*<Courses />*/}
      </section>
    </Layout>
  )
}

export default About
