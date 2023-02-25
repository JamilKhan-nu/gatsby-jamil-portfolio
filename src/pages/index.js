import * as React from "react"
import Layout from "../components/layout"
import * as indexStyles from "../components/index.module.css"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import carton from "../assets/profileCarton.png"
import Head from "../components/head"

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
      allContentfulBooks(limit: 5, sort: { bookTitle: ASC }) {
        edges {
          node {
            slug
            bookCover {
              gatsbyImage(fit: COVER, height: 250, layout: FIXED)
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
      <div className={indexStyles.latestProjects}>
        <h1>Latest Projects</h1>
        <ul className={indexStyles.projectsList}>
          {data.allContentfulProjects.edges.map((edge) => {
            return (
              <li className={indexStyles.projects}>
                <GatsbyImage
                  image={edge.node.projectImage.gatsbyImage}
                  alt="project img"
                />
                <h4 className={indexStyles.title}>{edge.node.projectTitle}</h4>
                <h6 className={indexStyles.techStack}>{edge.node.techStack}</h6>
                <div>
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
      <div>
        <div>
          <h1>Books I've read lately</h1>
        </div>
        <div className={indexStyles.imgSection}>
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
