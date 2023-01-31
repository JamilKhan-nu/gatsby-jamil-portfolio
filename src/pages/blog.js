import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <li>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        )
      })}
    </Layout>
  )
}

export default Blog
