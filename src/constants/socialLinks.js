import React from "react"
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/MonikaZemankiewicz",
  },
  {
    id: 2,
    icon: <FaRegEnvelope className="social-icon"></FaRegEnvelope>,
    url: "mailto:monika.zemankiewicz.2015@gmail.com",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/monika-zemankiewicz-675920207/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
