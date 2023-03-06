import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from "../styles/footer.module.css"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className={footerStyles.footer}>
      <h5>
        Thanks for visiting my little digital corner. Your visit is my
        motivation.
      </h5>
      <p>
        Designed & Developed by {data.site.siteMetadata.author}, Copyright ©
        2023
      </p>
    </div>
  )
}

export default Footer
