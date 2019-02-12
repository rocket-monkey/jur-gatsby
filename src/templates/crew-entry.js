import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'
import CrewCard from '../components/CrewCard'
import BackTo from '../components/BackTo'
import HorizontalLine from '../components/HorizontalLine'

export const CrewPageTemplate = ({
  title,
  content,
  image,
  cardData,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <BackTo to="/crew">Crew</BackTo>
            <h1>{title}</h1>
            {image && !!image.fluid ? (
              <Img {...image} />
            ) : (
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            )}
            <HorizontalLine half />
            <CrewCard data={cardData} />
            <HorizontalLine />
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

CrewPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CrewPage = ({ data }) => {
  const { markdownRemark: post } = data

  const cardData = {
    since: post.frontmatter.since,
    role: post.frontmatter.role,
    soundcloud: post.frontmatter.soundcloud,
    mixcloud: post.frontmatter.mixcloud,
    facebook: post.frontmatter.facebook,
    instagram: post.frontmatter.instagram,
  }

  return (
    <CrewPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      cardData={cardData}
      image={post.frontmatter.image.childImageSharp}
    />
  )
}

CrewPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CrewPage

export const crewPageQuery = graphql`
  query CrewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        since
        role
        soundcloud
        mixcloud
        facebook
        instagram
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
