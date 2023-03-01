import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as blogStyles from "./blog.module.scss"
import Head from "../components/head"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { updatedAt: DESC }) {
        edges {
          node {
            title
            publishedData(formatString: "MMMM Do, YYYY")
            blogImage {
              gatsbyImage(width: 470, height: 300)
            }
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <div className={blogStyles.blog}>
        <h1>WRITINGS</h1>
        <h3>
          For somebody who quite enjoys reading and writing, I'm not much of a
          blogger...
        </h3>
        <p>
          Here you will find irregular and occasional writings; sometimes about
          front-end web development, the technologies behind it, and the ongoing
          forward movement of web development in general.
        </p>
      </div>
      <hr />
      <hr />
      <br />
      <ol className={blogStyles.posts}>
        {data.allContentfulBlog.edges.map((edge) => {
          const image = getImage(edge.node.blogImage)
          return (
            <li className={blogStyles.post}>
              <Link
                className={blogStyles.postList}
                to={`/blog/${edge.node.slug}`}
              >
                <p>{edge.node.publishedData}</p>
                <h4>{edge.node.title}</h4>
                <GatsbyImage image={image} alt="blog image" />
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
