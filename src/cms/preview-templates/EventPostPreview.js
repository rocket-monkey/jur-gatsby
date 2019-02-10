import React from 'react'
import PropTypes from 'prop-types'
import { EventPageTemplate } from '../../templates/event-post'

const EventPostPreview = ({ entry, widgetFor }) => (
  <EventPageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    timeTable={entry.getIn(['data', 'timeTable'])}
  />
)

EventPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPostPreview
