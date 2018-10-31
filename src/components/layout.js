import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
// import classNames from 'class-names'
import { StaticQuery, graphql } from 'gatsby'

import GlobalCssTag from './globalCss'
// import Card3d from './card3d'
import Header from './header'
import styles from './layout.module.css'

export default class Layout extends PureComponent  {
  scrollRef = React.createRef()
  state = {
    isSticky: false
  }

  onScroll = (event) => {
    // console.log('wtf', window.scrollTop)
    if (window.scrollY > window.__BGVID_HEIGHT__) {
      this.setState({ isSticky: true })
    } else if (window.scrollY < (window.__BGVID_HEIGHT__ - 20)) {
      this.setState({ isSticky: false  })
    }
  }

  componentDidMount = () => {
    // this.scrollRef.current.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener('scroll', this.onScroll, { passive: true })
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll, { passive: true })
  }

  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
              <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Montserrat" rel="stylesheet" />
            </Helmet>

            <Header isSticky={this.state.isSticky} siteTitle={data.site.siteMetadata.title} />

            <div className={styles.layout} ref={this.scrollRef}>
              {children}
            </div>
            <GlobalCssTag />
          </>
        )}
      />
    )
  }
}
