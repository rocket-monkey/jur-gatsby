import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

export default ({ events }) => (
  <>
    <h1>Latest Events</h1>
    {events.map(({ node: post }) => (
      <Link key={post.id} className={styles.event} to={post.fields.slug}>
        <Img {...post.frontmatter.image.childImageSharp} />
        <h5>
          <span>{post.frontmatter.title}</span>
          <small>{post.frontmatter.date}</small>
        </h5>
      </Link>
    ))}
  </>
)
