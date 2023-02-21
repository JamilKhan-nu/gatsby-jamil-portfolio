import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as booktemstyles from "../styles/bookTemplate.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import Head from "../components/head"

export const query = graphql`
  query ($slug: String!) {
    contentfulBooks(slug: { eq: $slug }) {
      bookTitle
      author
      date(formatString: "MMMM Do, YYYY")
      type
      bookCover {
        gatsbyImage(fit: COVER, height: 250, width: 180, layout: FIXED)
      }
      slug
      summary
      notes {
        raw
      }
    }
  }
`

const Book = (props) => {
  return (
    <Layout>
      <Head title={props.data.contentfulBooks.bookTitle} />
      <div className={booktemstyles.bookThumbnail}>
        <div className={booktemstyles.bookCover}>
          <GatsbyImage
            image={props.data.contentfulBooks.bookCover.gatsbyImage}
            alt="book cover"
          />
        </div>
        <div>
          <h3 className={booktemstyles.title}>
            {props.data.contentfulBooks.bookTitle}
          </h3>
          <h5 className={booktemstyles.author}>
            Author: {props.data.contentfulBooks.author}
          </h5>
          <h6 className={booktemstyles.type}>
            Type: {props.data.contentfulBooks.type}
          </h6>
          <p className={booktemstyles.date}>
            Date Read: {props.data.contentfulBooks.date}
          </p>
          <p className={booktemstyles.summary}>
            {" "}
            {props.data.contentfulBooks.summary}
          </p>
        </div>
      </div>
      <hr />
      <br />
      <div>
        {documentToReactComponents(
          JSON.parse(props.data.contentfulBooks.notes.raw)
        )}
      </div>
    </Layout>
  )
}

export default Book
