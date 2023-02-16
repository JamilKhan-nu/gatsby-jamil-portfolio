import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as bookStyles from "../components/book.module.css"

function Book() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBooks(sort: { bookTitle: ASC }) {
        edges {
          node {
            bookTitle
            author
            date(formatString: "MMMM Do, YYYY")
            type
            slug
            summary
          }
        }
      }
      contentfulBookHeading {
        heading
        mainText {
          raw
        }
      }
    }
  `)
  return (
    <Layout>
      <h2>{data.contentfulBookHeading.heading}</h2>
      <p>
        {documentToReactComponents(
          JSON.parse(data.contentfulBookHeading.mainText.raw)
        )}
      </p>
      <ol>
        {data.allContentfulBooks.edges.map((edge) => {
          return (
            <li className={bookStyles.books}>
              <div className={bookStyles.bookThumbnail}>
                <div>
                  <img
                    className={bookStyles.bookCover}
                    src={edge.node.bookCover}
                    alt="Book Cover"
                  />
                </div>
                <div>
                  <Link to={`/book/${edge.node.slug}`}>
                    <h3 className={bookStyles.title}>{edge.node.bookTitle}</h3>
                  </Link>
                  <h5 className={bookStyles.author}>
                    Author: {edge.node.author}
                  </h5>
                  <h6 className={bookStyles.type}>Type: {edge.node.type}</h6>
                  <p className={bookStyles.date}>Date Read: {edge.node.date}</p>
                  <p className={bookStyles.summary}> {edge.node.summary}</p>
                  <Link to={`/book/${edge.node.slug}`}>
                    <p className={bookStyles.fullnotes}>Read full book notes</p>
                  </Link>
                </div>
              </div>
              <hr />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Book
