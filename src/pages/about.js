import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import * as aboutStyles from "./about.module.css"
import picture from "../assets/profile.jpg"

function About() {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        aboutMe {
          raw
        }
      }
      allContentfulEducation(sort: { session: DESC }) {
        edges {
          node {
            universityName
            courseName
            session
          }
        }
      }
      allContentfulSkills(sort: { createdAt: ASC }) {
        edges {
          node {
            skillset
            skillList {
              raw
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={aboutStyles.aboutHeader}>
        <div className={aboutStyles.aboutSection}>
          {documentToReactComponents(
            JSON.parse(data.contentfulAbout.aboutMe.raw)
          )}
        </div>
        <div className={aboutStyles.aboutSidebar}>
          <img src={picture} alt="Profile" />
          <div className={aboutStyles.aboutEducation}>
            <h1 className={aboutStyles.aboutEduHead}>Education</h1>
            <hr />
            {data.allContentfulEducation.edges.map((edge) => {
              return (
                <ul>
                  <li>
                    <h4 className={aboutStyles.uniName}>
                      {edge.node.universityName}
                    </h4>
                    <p className={aboutStyles.courseName}>
                      {edge.node.courseName}
                    </p>
                    <p className={aboutStyles.session}>
                      Session: {edge.node.session}
                    </p>
                  </li>
                </ul>
              )
            })}
            <h1 className={aboutStyles.aboutEduHead}>Skills</h1>
            <hr />
            <br />
            {data.allContentfulSkills.edges.map((edge) => {
              return (
                <div>
                  <h4>{edge.node.skillset}</h4>
                  {documentToReactComponents(
                    JSON.parse(edge.node.skillList.raw)
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
