import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-section">
          <h2>This page doesn't exist</h2>
        </div>
      </main>
    </Layout>
  )
}

export default Error
