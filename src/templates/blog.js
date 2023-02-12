import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
