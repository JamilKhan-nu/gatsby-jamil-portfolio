import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from "./footer.module.css"

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
      <h5>Copyright {data.site.siteMetadata.author} © 2023</h5>
      <p>
        Thanks for visiting my little digital corner. Your visit is my
        motivation.
      </p>
    </div>
  )
}

export default Footer
