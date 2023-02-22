import React from "react"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"

function Projects(props) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBooks {
        edges {
          node {
            bookCover {
              gatsbyImage(fit: COVER, height: 250, width: 180, layout: FIXED)
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Projects" />
      <h2>My beautiful projects section</h2>
      <p>Contentful images will be render here</p>
      {data.allContentfulBooks.edges.map((node) => {
        return (
          <div>
            <img />
          </div>
        )
      })}
    </Layout>
  )
}

export default Projects
