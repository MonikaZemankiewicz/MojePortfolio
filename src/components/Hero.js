import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "logo1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="snow">
        <div className="hero-img-container">
          <a href="https://www.canva.com/design/DAEYjX89iWQ/view">
            <Image fluid={fluid} className="hero-img"></Image>
          </a>
            <Image fluid={fluid} className="hero-img"></Image>
        </div>
        <h2>Hi, I'm Monika. Welcome to my portfolio. </h2>
        {/*<h4 class="neon">Hi, I'm Monika. Welcome to my portfolio</h4>*/}
      </div>
    </header>
  )
}

export default Hero
