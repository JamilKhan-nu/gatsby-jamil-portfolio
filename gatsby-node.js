const path = require("path")

// =====================================================================================
// Blog
// =====================================================================================

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const bookTemplate = path.resolve("./src/templates/book.js")

  const res = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlog.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  const result = await graphql(`
    query {
      allContentfulBooks {
        edges {
          node {
            bookTitle
            author
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBooks.edges.forEach((edge) => {
    createPage({
      component: bookTemplate,
      path: `/book/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
