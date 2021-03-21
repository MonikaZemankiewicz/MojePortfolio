import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { FaGithub, FaGlobe } from "react-icons/fa"


const ProjectTemplate = ({
  data: {
    project: { title, img, tags, url, github },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <section className="single-project"> <article className="project">
      <div className="project-img">
        <a href={url}>
          <Image fluid={img.fluid} className="p-img" />
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
    <p>Danish lemon drops pudding jelly beans jujubes. Chocolate cake gummi bears chupa chups macaroon cake sweet roll pastry. Dessert cake gingerbread tiramisu candy canes chocolate bar pie. Cake tiramisu muffin icing chocolate cake. Bear claw cake sugar plum biscuit soufflé pie bear claw. Gummi bears powder chocolate pie apple pie croissant fruitcake gingerbread jujubes. Chocolate bar liquorice ice cream macaroon bear claw. Tart sugar plum tootsie roll. Croissant fruitcake lemon drops apple pie sugar plum. Chocolate bar jelly-o halvah. Candy canes marzipan croissant cake chocolate bar candy. Candy canes powder sweet cheesecake tiramisu.

Toffee sweet danish. Bonbon caramels bonbon pudding cupcake wafer marzipan carrot cake. Topping candy jelly liquorice cookie. Gummi bears lollipop pudding sesame snaps tiramisu gummies caramels donut donut. Dragée cupcake jelly cotton candy cake pastry gummi bears. Macaroon dessert ice cream candy canes oat cake toffee chupa chups caramels toffee. Cookie cake marzipan chocolate muffin pastry. Halvah cupcake biscuit. Tiramisu muffin candy canes tootsie roll cheesecake cheesecake cake jelly beans brownie. Donut oat cake chocolate cake cake jelly sugar plum chocolate cake ice cream pie. Macaroon sweet chocolate chupa chups cake dragée. Lemon drops muffin pie.</p>
    </section>
     
    
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: contentfulProjects (slug: { eq: $slug }) {
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
