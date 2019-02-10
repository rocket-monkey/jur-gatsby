import React from 'react'
import { Link } from 'gatsby'

export default ({ posts }) => (
  <>
    <h1>Latest Stories</h1>
    {posts.map(({ node: post }) => (
      <div
        className="content"
        style={{ border: '1px solid #333', padding: '2em 4em' }}
        key={post.id}
      >
        <p>
          <Link className="has-text-primary" to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
        </p>
        <p>
          {post.excerpt}
          <br />
          <br />
          <Link className="button is-small" to={post.fields.slug}>
            Keep Reading →
          </Link>
        </p>
      </div>
    ))}
  </>
)
