import { Link } from "gatsby"
import React from "react"
import * as headerStyle from "./header.module.css"

function Header() {
  return (
    <div className={headerStyle.header}>
      <Link to="/" className={headerStyle.logo}>
        JK
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
            <Link to="/projects" className={headerStyle.navItem}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
