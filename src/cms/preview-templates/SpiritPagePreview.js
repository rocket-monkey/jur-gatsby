import React from 'react'
import PropTypes from 'prop-types'
import { SpiritPageTemplate } from '../../templates/spirit-page'

const SpiritPagePreview = ({ entry, widgetFor }) => (
  <SpiritPageTemplate
    title={entry.getIn(['data', 'title'])}
    hero={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

SpiritPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SpiritPagePreview
