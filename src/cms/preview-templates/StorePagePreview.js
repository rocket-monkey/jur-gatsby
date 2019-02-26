import React from 'react'
import PropTypes from 'prop-types'
import { StorePageTemplate } from '../../templates/store-page'

const StorePagePreview = ({ entry, widgetFor }) => (
  <StorePageTemplate
    title={entry.getIn(['data', 'title'])}
    hero={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

StorePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default StorePagePreview
