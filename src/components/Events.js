import React from 'react'
import { Link } from 'gatsby'

export default ({ events }) => (
  <>
    <h1 className="has-text-weight-bold is-size-2">Latest Events</h1>
    {events.map(({ node: event }) => (
      <div
        className="content"
        style={{ border: '1px solid #333', padding: '2em 4em' }}
        key={event.id}
      >
        <p>
          <Link className="has-text-primary" to={event.fields.slug}>
            {event.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <small>{event.frontmatter.date}</small>
        </p>
        <p>
          {event.excerpt}
          <br />
          <br />
          <Link className="button is-small" to={event.fields.slug}>
            Keep Reading →
          </Link>
        </p>
      </div>
    ))}
  </>
)
