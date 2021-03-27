import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3> Contact me</h3>
          <form action="https://formspree.io/f/xdopppzk" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                required
              />
              <button type="submit" className="submit-btn btn">
                send
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
