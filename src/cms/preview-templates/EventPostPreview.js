import React from 'react'
import PropTypes from 'prop-types'
import { EventPageTemplate } from '../../templates/event-post'

const EventPostPreview = ({ entry, widgetFor }) => {
  console.log(entry.getIn(['data', 'image']))
  console.log(entry)
  return (
    <EventPageTemplate
      isPreview
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'image'])}
      timeTable={entry.getIn(['data', 'timeTable'])}
      image={entry.getIn(['data', 'location'])}
    />
  )
}

EventPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPostPreview
