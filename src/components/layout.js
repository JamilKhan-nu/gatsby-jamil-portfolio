import React from "react"
import Footer from "./footer"
import Header from "./header"
import * as layoutStyles from "./layout.module.css"

function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
