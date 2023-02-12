import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function Book() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBooks(sort: { bookTitle: ASC }) {
        edges {
          node {
            bookTitle
            author
            notes {
              raw
            }
            slug
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
              <Link to={`/book/${edge.node.slug}`}>
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
