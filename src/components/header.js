import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as headerStyle from "./header.module.css"

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          logo
        }
      }
    }
  `)
  return (
    <div className={headerStyle.header}>
      <Link to="/" className={headerStyle.logo}>
        {data.site.siteMetadata.logo}
      </Link>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link to="/about" className={headerStyle.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className={headerStyle.navItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/book" className={headerStyle.navItem}>
              Book
            </Link>
          </li>
          <li>
            <Link to="/projects" className={headerStyle.navItem}>
              Projects
            </Link>
            <Link to="/" className={headerStyle.navItem}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
