import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

//This variable will be responsible for our animation duration
const transitionDelay = 300

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStyles = status => {
  let styles = {
    entering: {
      position: 'absolute',
      transform:
        'translate3d(-60px, -40px, 150px) rotateY(23deg) rotateZ(-6deg)',
      opacity: '0',
    },
    entered: {
      transition: `opacity ${transitionDelay}ms ease-out, transform ${transitionDelay}ms ease-out`,
      transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateZ(0deg)',
      opacity: '1',
    },
    exiting: {
      transition: `all ${transitionDelay}ms ease-in`,
      transform: 'translate3d(60px, 80px, -150px) rotateY(-12deg)',
      opacity: '0',
    },
  }

  if (status === 'entered') {
    return styles[status]
  }

  const random = 1 // Math.floor(Math.random() * 4) + 1
  let extend = {}
  switch (random) {
    case 1:
      return styles[status]

    case 2:
      extend =
        status === 'entering'
          ? { transform: 'translate3d(-30%, 0, 0)' }
          : { transform: 'translate3d(100%, 0, 0)' }

    case 3:
      extend =
        status === 'entering'
          ? { transform: 'translate3d(0, 100%, 0)' }
          : { transform: 'translate3d(0, -30%, 0)' }

    case 4:
      extend =
        status === 'entering'
          ? { transform: 'translate3d(0, -30%, 0)' }
          : { transform: 'translate3d(0, 100%, 0)' }
  }

  return {
    ...styles[status],
    ...extend,
  }
}

class Transition extends React.PureComponent {
  render() {
    //Destructuring props to avoid garbage this.props... in return statement
    const { children, location } = this.props

    return (
      //Using TransitionGroup and ReactTransition which are both
      //coming from  'react-transition-group' and are required for transitions to work
      <TransitionGroup>
        <ReactTransition
          //the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
          key={location.pathname}
          //duration of transition
          timeout={{
            enter: transitionDelay,
            exit: transitionDelay,
          }}
        >
          {//Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
          status => (
            <div
              style={{
                ...getTransitionStyles(status),
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
