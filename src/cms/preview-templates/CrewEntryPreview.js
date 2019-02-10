import React from 'react'
import PropTypes from 'prop-types'
import { CrewPageTemplate } from '../../templates/crew-entry'

const CrewEntryPreview = ({ entry, widgetFor }) => {
  const cardData = {
    since: entry.getIn(['data', 'since']),
    role: entry.getIn(['data', 'role']),
    soundcloud: entry.getIn(['data', 'soundcloud']),
    mixcloud: entry.getIn(['data', 'mixcloud']),
    facebook: entry.getIn(['data', 'facebook']),
    instagram: entry.getIn(['data', 'instagram']),
  }

  return (
    <CrewPageTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      cardData={cardData}
      image={entry.getIn(['data', 'image'])}
    />
  )
}

CrewEntryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CrewEntryPreview
