import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as blogStyles from "./blog.module.css"
import Head from "../components/head"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { publishedData: DESC }) {
        edges {
          node {
            title
            slug
            publishedData(formatString: "MMMM Do yyyy")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <ol className={blogStyles.posts}>
        {data.allContentfulBlog.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link
                className={blogStyles.postList}
                to={`/blog/${edge.node.slug}`}
              >
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedData}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
