import CMS from 'netlify-cms'

import SpiritPagePreview from './preview-templates/SpiritPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import StorePagePreview from './preview-templates/StorePagePreview'
import CrewEntryPreview from './preview-templates/CrewEntryPreview'
import EventPostPreview from './preview-templates/EventPostPreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('spirit', SpiritPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('store', StorePagePreview)
CMS.registerPreviewTemplate('crew', CrewEntryPreview)
CMS.registerPreviewTemplate('event', EventPostPreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
