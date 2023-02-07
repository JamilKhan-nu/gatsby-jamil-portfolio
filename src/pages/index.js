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
      <div className={indexStyles.latestArticles}>
        <h1>Latest Articles</h1>
        <div className={indexStyles.articleLists}>
          <div className={indexStyles.articleList}>
            <h2 className={indexStyles.articleHeading}>Programming</h2>
            <h4 className={indexStyles.articleSubheading}>
              How to build a text editor with gatsby js
            </h4>
            <p className={indexStyles.articleDate}>Jan 14, 2013</p>
          </div>
          <div className={indexStyles.articleList}>
            <h2 className={indexStyles.articleHeading}>Books notes</h2>
            <h4 className={indexStyles.articleSubheading}>
              How to build a text editor with gatsby js
            </h4>
            <p className={indexStyles.articleDate}>Jan 14, 2013</p>
          </div>
          <div className={indexStyles.articleList}>
            <h2 className={indexStyles.articleHeading}>Photography</h2>
            <h4 className={indexStyles.articleSubheading}>
              How to build a text editor with gatsby js
            </h4>
            <p className={indexStyles.articleDate}>Jan 14, 2013</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Books I've read lately</h1>
        </div>
        <div></div>
      </div>
    </Layout>
  )
}
