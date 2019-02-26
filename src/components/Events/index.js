import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import MasonryLayout from 'react-masonry-layout'
import styles from './styles.module.scss'

export default ({ events, teaser }) => {
  const now = new Date()
  let upcoming = events.filter(event => {
    const eventDate = new Date(event.node.frontmatter.dateJs)
    if (eventDate.getTime() >= now.getTime()) {
      return true
    }
    return false
  })
  const past = events.filter(event => {
    const eventDate = new Date(event.node.frontmatter.dateJs)
    if (eventDate.getTime() >= now.getTime()) {
      return false
    }
    return true
  })

  if (teaser) {
    upcoming = [upcoming[0]]
  }

  const upcomingJsx = (
    <>
      <h1>{teaser ? 'Next Event' : 'Upcoming Events'}</h1>
      {upcoming.map(({ node: post }) => (
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

  if (teaser) {
    return upcomingJsx
  }

  return (
    <>
      {upcomingJsx}
      <h2>Past Events</h2>
      <MasonryLayout
        id="masonry-layout"
        sizes={[
          { columns: 2, gutter: 10 },
          { mq: '768px', columns: 2, gutter: 15 },
          { mq: '1024px', columns: 3, gutter: 25 },
        ]}
      >
        {past.map(({ node: post }, i) => {
          let height = i % 2 === 0 ? 200 : 100
          return (
            <Link
              key={post.id}
              className={styles.pastEvent}
              to={post.fields.slug}
              style={{
                height: `${height}px`,
                lineHeight: `${height}px`,
                color: 'white',
                fontSize: '32px',
                display: 'block',
                background: 'rgba(0,0,0,0.7)',
              }}
            >
              <Img {...post.frontmatter.image.childImageSharp} />
              <h5>
                <span>{post.frontmatter.title}</span>
                <small>{post.frontmatter.dateShort}</small>
              </h5>
            </Link>
          )
        })}
      </MasonryLayout>
    </>
  )
}
