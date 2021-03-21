const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProjects {
      projects: allContentfulProjects {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        slug: project.slug,
      },
    })
  })
}
