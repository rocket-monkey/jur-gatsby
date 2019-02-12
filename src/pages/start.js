import React, { PureComponent } from 'react'

class Magic extends PureComponent {
  componentDidMount() {
    localStorage.setItem('beta', true)

    setTimeout(() => {
      window.location.pathname = '/'
    }, 800)
  }

  render() {
    return (
      <div>
        <h1>Magic black box detected</h1>
        <p>
          ..now just go back to <a href="/">home</a> and reload the page
        </p>
      </div>
    )
  }
}

export default Magic
