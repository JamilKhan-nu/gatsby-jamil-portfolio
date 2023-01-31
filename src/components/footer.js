import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
    <div>
      <p>created by {data.site.siteMetadata.author} © copyright 2023</p>
    </div>
  )
}

export default Footer
