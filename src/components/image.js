import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default class Image extends PureComponent {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query GetAssetQuery {
            image: imageSharp(id: { regex: "/h4dsxjo/" }) {
              sizes(maxWidth: 1240) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        `}
        render={data => {
          console.log(data)
          return <div>image</div>
        }}
      />
    )
  }
}
