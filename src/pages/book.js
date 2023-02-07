import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function Book() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBooks {
        edges {
          node {
            bookTitle
            author
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ol>
        {data.allContentfulBooks.edges.map((edge) => {
          return (
            <li>
              <Link>
                <h1>{edge.node.bookTitle}</h1>
                <p>{edge.node.author}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Book
