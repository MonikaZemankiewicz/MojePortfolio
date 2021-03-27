import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Image from "gatsby-image"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

const query = graphql`
  {
    allContentfulCourses {
      nodes {
        name
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Courses = () => {
  const {
    allContentfulCourses: { nodes: courses },
  } = useStaticQuery(query)
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const lastIndex = courses.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, courses])

  return (
    <section className="courses-section">
      <h2> Courses</h2>
      <div className="section-center">
        {courses.map((course, courseIndex) => {
          let position = "nextSlide"
          if (courseIndex === index) {
            position = "activeSlide"
          }
          return (
            <article className={position} key={courseIndex}>
              <Image fluid={course.image.fluid} className="course-img" />
            </article>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaCaretLeft className="slider-icon" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaCaretRight className="slider-icon" />
        </button>
      </div>
    </section>
  )
}

export default Courses
