import * as React from "react"
import Layout from "../components/layout"
import * as indexStyles from "../components/index.module.css"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import carton from "../assets/profileCarton.png"
import Head from "../components/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(limit: 3, sort: { createdAt: DESC }) {
        edges {
          node {
            projectTitle
            techStack
            projectDescription
            projectsLink
            githublink
            projectImage {
              gatsbyImage(fit: COVER, width: 470, height: 300)
            }
          }
        }
      }
      allContentfulBooks(limit: 5, sort: { updatedAt: DESC }) {
        edges {
          node {
            slug
            bookCover {
              gatsbyImage(fit: COVER, height: 250, layout: FIXED)
            }
          }
        }
      }
      allContentfulFeatureBlog(sort: { updatedAt: DESC }) {
        edges {
          node {
            featureBlogTitle
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            featureBlogBody {
              raw
            }
            featureBlogImage {
              gatsbyImage(width: 800, height: 700)
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.container}>
        <div>
          <div className={indexStyles.hero}>
            <h3>Hey,</h3>
            <h1 className={indexStyles.name}>I'm Jamil Khan</h1>
            <h3 className={indexStyles.titles}>
              Full-stack Software Developer
            </h3>
            <p className={indexStyles.job}>
              I build digital products with React, TypeScript, Gatsby and
              GraphQl
            </p>
          </div>
          <div className={indexStyles.social}>
            <Link
              to="https://www.linkedin.com/in/jamilkhan-nu/"
              className={indexStyles.socialLink}
            >
              Linkedin
            </Link>
            <Link
              to="https://twitter.com/JamilkhanInfo"
              className={indexStyles.socialLink}
            >
              Twitter
            </Link>
            <Link
              to="https://github.com/JamilKhan-nu"
              className={indexStyles.socialLink}
            >
              GitHub
            </Link>
            <Link
              to="hellojamilkhan@gmail.com"
              className={indexStyles.socialLink}
            >
              Mail
            </Link>
          </div>
        </div>
        <div>
          <img className={indexStyles.imgSection} src={carton} alt="profile" />
        </div>
      </div>
      {/* Feature blog section  =========================== */}

      {data.allContentfulFeatureBlog.edges.map((edge) => {
        return (
          <div>
            <h1>Latest Blog</h1>
            <div className={indexStyles.featureBlog}>
              <GatsbyImage
                className={indexStyles.blogImage}
                image={edge.node.featureBlogImage.gatsbyImage}
                alt="blog image"
              />
              <div className={indexStyles.blogtext}>
                <p>{edge.node.publishedDate}</p>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.featureBlogTitle}</h2>
                </Link>
                {documentToReactComponents(
                  JSON.parse(edge.node.featureBlogBody.raw)
                )}

                <Link
                  className={indexStyles.button}
                  to={`/blog/${edge.node.slug}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        )
      })}

      {/* Project section  =========================== */}

      <div className={indexStyles.latestProjects}>
        <h1>Some things I've built</h1>
        <ul className={indexStyles.projectsList}>
          {data.allContentfulProjects.edges.map((edge) => {
            return (
              <li className={indexStyles.projects}>
                <GatsbyImage
                  image={edge.node.projectImage.gatsbyImage}
                  alt="project img"
                />
                <h4 className={indexStyles.title}>{edge.node.projectTitle}</h4>

                <div className={indexStyles.links}>
                  <Link
                    className={indexStyles.link}
                    external
                    to={edge.node.githublink}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                  <Link
                    className={indexStyles.link}
                    external
                    to={edge.node.projectsLink}
                    target="_blank"
                  >
                    Demo
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Books section  =========================== */}
      <div className={indexStyles.books}>
        <div>
          <h1 className={indexStyles.bookHead}>Books I've read lately</h1>
        </div>
        <div className={indexStyles.bookCover}>
          {data.allContentfulBooks.edges.map((edge) => {
            return (
              <div className={indexStyles.pic}>
                <Link to={`/book/${edge.node.slug}`}>
                  <GatsbyImage
                    image={edge.node.bookCover.gatsbyImage}
                    alt="Book Cover"
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
