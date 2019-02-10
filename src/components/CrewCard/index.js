import React from 'react'
import PropTypes from 'prop-types'

const CrewCard = ({ content, className }) => (
  <div className={className}>{content}</div>
)

CrewCard.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default CrewCard
