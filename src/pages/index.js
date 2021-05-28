import { graphql, Link} from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import * as styles from  '../styles/home.module.css'

export default function Home({data}) {
console.log(data);
  return (
    <Layout>
    <section className={styles.header}>
      <div>
        <h2 >Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX designer & web developer based in Manchester.</p>
        <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
      </div>
     <Img fixed={data.file.childImageSharp.fixed} />
    </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
}
`