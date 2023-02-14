import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as blogStyles from "./blog.module.css"

function Book() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBooks(sort: { bookTitle: ASC }) {
        edges {
          node {
            bookTitle
            author
            slug
            createdAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ol className={blogStyles.posts}>
        {data.allContentfulBooks.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link
                className={blogStyles.postList}
                to={`/book/${edge.node.slug}`}
              >
                <h2>{edge.node.bookTitle}</h2>
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
