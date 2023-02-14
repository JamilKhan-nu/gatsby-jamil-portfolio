import * as React from "react"
import Layout from "../components/layout"
import * as indexStyles from "../components/index.module.css"
import { Link } from "gatsby"
import carton from "../assets/profileCarton.png"
import Book1 from "../assets/Book1.png"
import Book2 from "../assets/Book2.png"
import Book3 from "../assets/Book3.png"
import Book4 from "../assets/Book4.png"
import Book5 from "../assets/Book5.png"
import Book6 from "../assets/Book6.png"

export default function Home() {
  return (
    <Layout>
      <div className={indexStyles.container}>
        <div>
          <div className={indexStyles.hero}>
            <h3>Hey,</h3>
            <h1 className={indexStyles.name}>I'm Jamil Khan</h1>
            <h3 className={indexStyles.title}>Full-stack Software Developer</h3>
            <p className={indexStyles.job}>
              I build digital products with React, TypeScript, Gatsby and
              GraphQl
            </p>
          </div>
          <div className={indexStyles.social}>
            <Link
              to="https://www.linkedin.com/in/jamilkhan-nu/"
              className={indexStyles.socialLink}
            >
              Linkedin
            </Link>
            <Link
              to="https://twitter.com/JamilkhanInfo"
              className={indexStyles.socialLink}
            >
              Twitter
            </Link>
            <Link
              to="https://github.com/JamilKhan-nu"
              className={indexStyles.socialLink}
            >
              GitHub
            </Link>
            <Link
              to="hellojamilkhan@gmail.com"
              className={indexStyles.socialLink}
            >
              Mail
            </Link>
          </div>
        </div>
        <div>
          <img className={indexStyles.imgSection} src={carton} alt="profile" />
        </div>
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
        <div className={indexStyles.imgSection}>
          <img className={indexStyles.img} src={Book1} alt="Book1" />
          <img className={indexStyles.img} src={Book2} alt="Book2" />
          <img className={indexStyles.img} src={Book3} alt="Book3" />
          <img className={indexStyles.img} src={Book4} alt="Book4" />
          <img className={indexStyles.img} src={Book5} alt="Book5" />
          <img className={indexStyles.img} src={Book6} alt="Book6" />
        </div>
      </div>
    </Layout>
  )
}
