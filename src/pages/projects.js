import React from "react"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

function Projects(props) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBooks {
        edges {
          node {
            bookCover {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>My beautiful projects section</h2>
      <p>Contentful images will be render here</p>
      {data.allContentfulBooks.edges.map((node) => {
        return (
          <div>
            <GatsbyImage
              image={node.bookCover.gatsbyImageData}
              alt="book cover"
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default Projects
