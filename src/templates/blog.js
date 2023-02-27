import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import { GatsbyImage } from "gatsby-plugin-image"
import * as blogStyles from "../styles/blogtemplate.module.scss"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedData(formatString: "MMMM Do, YYYY")
      postBody {
        raw
      }
      blogImage {
        gatsbyImage(width: 470, height: 300)
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlog.title} />
      <div>
        {" "}
        <h1 className={blogStyles.blogTitle}>
          {props.data.contentfulBlog.title}
        </h1>
        <p>{props.data.contentfulBlog.publishedData}</p>
        <GatsbyImage
          className={blogStyles.blogImage}
          image={props.data.contentfulBlog.blogImage.gatsbyImage}
          alt="blog image"
        />
        {documentToReactComponents(
          JSON.parse(props.data.contentfulBlog.postBody.raw, options)
        )}
      </div>
    </Layout>
  )
}

export default Blog
