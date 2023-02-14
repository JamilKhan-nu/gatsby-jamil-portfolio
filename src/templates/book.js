import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query ($slug: String!) {
    contentfulBooks(slug: { eq: $slug }) {
      bookTitle
      author
      notes {
        raw
      }
    }
  }
`

const Book = (props) => {
  return (
    <Layout>
      <div>
        <img src={props.data.contentfulBooks.bookCover} alt="book cover" />{" "}
      </div>
      <div>
        <h1>{props.data.contentfulBooks.bookTitle}</h1>
        <p>{props.data.contentfulBooks.author}</p>
      </div>
      <div>
        {documentToReactComponents(
          JSON.parse(props.data.contentfulBooks.notes.raw)
        )}
      </div>
    </Layout>
  )
}

export default Book
