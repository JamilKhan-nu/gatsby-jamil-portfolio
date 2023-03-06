import React from "react"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import Head from "../components/head"
import * as projectStyles from "../styles/projects.module.scss"

function Projects(props) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(sort: { updatedAt: DESC }) {
        edges {
          node {
            projectTitle
            techStack
            projectDescription
            projectsLink
            githublink
            projectImage {
              gatsbyImage(width: 470, height: 300)
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Projects" />
      <div className={projectStyles.works}>
        <h1 className={projectStyles.myWorks}>MY WORKS</h1>
        <h3 className={projectStyles.funProject}>
          These are my recent fun projects.
        </h3>
        <p className={projectStyles.pera}>
          I always put my learning things into practice. These projects
          demonstrates my learning outcome.
        </p>
      </div>
      <hr />
      <hr />
      <br />
      <ul className={projectStyles.projects}>
        {data.allContentfulProjects.edges.map((edge) => {
          return (
            <li className={projectStyles.project}>
              <div>
                <GatsbyImage
                  className={projectStyles.image}
                  image={edge.node.projectImage.gatsbyImage}
                  alt="project img"
                />
              </div>
              <div className={projectStyles.details}>
                <h4>{edge.node.projectTitle}</h4>
                <p>{edge.node.projectDescription}</p>
                <h5 className={projectStyles.techStack}>
                  Tech Stack : {edge.node.techStack}
                </h5>
                <div className={projectStyles.links}>
                  <Link
                    external
                    to={edge.node.githublink}
                    target="_blank"
                    className={projectStyles.link}
                  >
                    GitHub
                  </Link>
                  <Link
                    external
                    to={edge.node.projectsLink}
                    target="_blank"
                    className={projectStyles.link}
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Projects
