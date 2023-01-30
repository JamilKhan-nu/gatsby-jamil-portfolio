import * as React from "react"
import Layout from "../components/layout"
import * as indexStyles from "../components/index.module.css"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <div className={indexStyles.hero}>
        <h2 className={indexStyles.hi}>Hey,</h2>
        <h1 className={indexStyles.name}>I'm Jamil Khan</h1>
        <h3 className={indexStyles.title}>Full-stack Software Developer</h3>
        <p className={indexStyles.job}>
          I build digital products with React, TypeScript, Gatsby and GraphQl
        </p>
      </div>
      <div className={indexStyles.social}>
        <Link to="/" className={indexStyles.socialLink}>
          Linkedin
        </Link>
        <Link to="/" className={indexStyles.socialLink}>
          Twitter
        </Link>
        <Link to="/" className={indexStyles.socialLink}>
          GitHub
        </Link>
        <Link to="/" className={indexStyles.socialLink}>
          Mail
        </Link>
      </div>
    </Layout>
  )
}
