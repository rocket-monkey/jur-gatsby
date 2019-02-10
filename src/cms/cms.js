import CMS from 'netlify-cms'

import SpiritPagePreview from './preview-templates/SpiritPagePreview'
import CrewEntryPreview from './preview-templates/CrewEntryPreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('spirit', SpiritPagePreview)
CMS.registerPreviewTemplate('crew', CrewEntryPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
