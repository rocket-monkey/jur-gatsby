import CMS from 'netlify-cms'

import SpiritPagePreview from './preview-templates/SpiritPagePreview'
import CrewEntryPreview from './preview-templates/CrewEntryPreview'
import EventPostPreview from './preview-templates/EventPostPreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('spirit', SpiritPagePreview)
CMS.registerPreviewTemplate('crew', CrewEntryPreview)
CMS.registerPreviewTemplate('event', EventPostPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
