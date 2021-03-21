import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h2>That page doesn't exist</h2>
          <Link to="/" className="btn">
            go to the home page
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
