import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query ($slug: String!) {
    contentfulBooks(slug: { eq: $slug }) {
      bookTitle
      date(formatString: "MMMM Do, YYYY")
      notes {
        raw
      }
      author
    }
  }
`

const Book = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulBooks.bookTitle}</h1>
      <p>{props.data.contentfulBooks.author}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBooks.notes.raw)
      )}
    </Layout>
  )
}

export default Book
