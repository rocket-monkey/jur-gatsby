import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import classNames from 'class-names'
import { StaticQuery, graphql } from 'gatsby'

import Card3d from './card3d'
import Header from './header'
import styles from './layout.module.css'

export default class Layout extends PureComponent  {
  scrollRef = React.createRef()
  state = {
    isHeaderTiny: false
  }

  onScroll = (event) => {
    if (this.scrollRef.current.scrollTop > 300) {
      this.setState({ isHeaderTiny: true })
    } else if (this.scrollRef.current.scrollTop < 100) {
      this.setState({ isHeaderTiny: false  })
    }
  }

  componentDidMount = () => {
    this.scrollRef.current.addEventListener('scroll', this.onScroll, { passive: true })
  }

  componentWillUnmount = () => {
    this.scrollRef.current.removeEventListener('scroll', this.onScroll, { passive: true })
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
            </Helmet>

            <Header isHeaderTiny={this.state.isHeaderTiny} siteTitle={data.site.siteMetadata.title} />

            <div className={styles.parallax} ref={this.scrollRef}>
              <div className={classNames(styles.pLayer, styles.pLayerBack)}>
                back
              </div>
              <div className={classNames(styles.pLayer, styles.pLayerDeep)}>
                <div className={styles.cardWrapper}>
                  <Card3d />
                </div>
              </div>
              <div className={classNames(styles.pLayer, styles.pLayerBase, styles.layout)}>
                {children}
              </div>
            </div>
          </>
        )}
      />
    )
  }
}
