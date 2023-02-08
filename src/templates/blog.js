import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { renderRichText } from "gatsby-source-contentful/rich-text"

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: (text) => <strong>{text}</strong>,
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
//   },
// }

export const query = graphql`
  query ($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedData(formatString: "MMMM Do, YYYY")
      postBody {
        raw
      }
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlog.title}</h1>
      <p>{props.data.contentfulBlog.publishedData}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlog.postBody.raw)
      )}
    </Layout>
  )
}

export default Blog
