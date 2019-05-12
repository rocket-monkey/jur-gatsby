import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import MasonryLayout from 'react-masonry-layout'
import styles from './styles.module.scss'

const isSameDay = (date1, date2) =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getYear() === date2.getYear()

export default ({ events: eventsRaw, teaser }) => {
  const now = new Date()

  console.log('event count', eventsRaw.length)

  const events = eventsRaw.filter(
    event =>
      event.node.frontmatter.image &&
      event.node.frontmatter.image.childImageSharp
  )
  const eventsWithoutImage = eventsRaw.filter(
    event =>
      !event.node.frontmatter.image ||
      !event.node.frontmatter.image.childImageSharp
  )

  if (eventsWithoutImage.length) {
    console.log(
      'events without image are unusable! Found: ',
      eventsWithoutImage.length
    )

    eventsWithoutImage.forEach(e => {
      console.log(e.node.fields.slug)
    })
  }

  let upcoming = events.filter(event => {
    const eventDate = new Date(event.node.frontmatter.dateJs)
    return isSameDay(eventDate, now) || eventDate.getTime() > now.getTime()
  })

  const past = events
    .filter(event => {
      const eventDate = new Date(event.node.frontmatter.dateJs)
      return !isSameDay(eventDate, now) && eventDate.getTime() < now.getTime()
    })
    .sort((a, b) => {
      const eventDateA = new Date(a.node.frontmatter.dateJs)
      const eventDateB = new Date(b.node.frontmatter.dateJs)
      if (eventDateA.getTime() < eventDateB.getTime()) {
        return 1
      }
      return -1
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
          { mq: '768px', columns: 3, gutter: 15 },
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
