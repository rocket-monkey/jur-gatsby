import React from 'react'
import PropTypes from 'prop-types'
import { EventPageTemplate } from '../../templates/event-post'

const EventPostPreview = ({ entry, widgetFor }) => (
  <EventPageTemplate
    isPreview
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    timeTable={entry.getIn(['data', 'timeTable'])}
    fbLink={entry.getIn(['data', 'fbLink'])}
    location={entry.getIn(['data', 'location'])}
    locationAlt={entry.getIn(['data', 'locationAlt'])}
  />
)

EventPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPostPreview
