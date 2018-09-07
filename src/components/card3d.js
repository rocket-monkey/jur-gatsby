import React, { PureComponent } from 'react'
import styles from './card3d.module.css'

export default class Card3d extends PureComponent {
  state = {
    lightGradient: '',
    cardTransform: '',
    layerTransform1: '',
    layerTransform2: '',
    layerTransform3: '',
    layerTransform4: '',
    layerTransform5: ''
  }

  cardRef = React.createRef()

  componentDidMount = () => {
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('touchmove', this.onMouseMove)
  }

  componentWillUnmount = () => {
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('touchmove', this.onMouseMove)
  }

  onMouseMove = (e) => {
    const layers = this.getLayerDivs(this.cardRef.current)

    const w = window.innerWidth; //window width
    const h = window.innerHeight; //window height
    const offsetX = 0.5 - e.pageX / w; //cursor position X
    const offsetY = 0.5 - e.pageY / h; //cursor position Y
    const dy = e.pageY - h / 2; //@h/2 = center of poster
    const dx = e.pageX - w / 2; //@w/2 = center of poster
    const theta = Math.atan2(dy, dx); //angle between cursor and center of poster in RAD
    let angle = theta * 180 / Math.PI - 90; //convert rad in degrees
    const offsetPoster = this.cardRef.current.getAttribute('data-offset');
    const transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

    //get angle between 0-360
    if (angle < 0) {
      angle = angle + 360;
    }

    //gradient angle and opacity
    const newState = {
      lightGradient: `linear-gradient(${angle}deg, rgba(255,255,255, ${e.pageY / h * .5}) 0%,rgba(255,255,255,0) 80%)`
    }
    // $light.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + e.pageY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');

    //poster transform
    newState.cardTransform = transformPoster
    // $card.css('transform', transformPoster);

    //parallax foreach layer
    layers.forEach((layer, index) => {
      const offsetLayer = layer.getAttribute('data-offset')
      const transformLayer = `translateX(${offsetX * offsetLayer}px) translateY(${offsetY * offsetLayer}px)`
      newState[`layerTransform${index}`] = transformLayer
    })
    this.setState(newState)
    // $layer.each(function () {
    //   var $this = $(this),
    //     offsetLayer = $this.data('offset') || 0,
    //     transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';
    //   $this.css('transform', transformLayer);
    // });
  }

  getLayerDivs = (container) => {
    const layers = []
    for (let i = 0, len = container.childNodes.length; i < len; i++) {
      const el = container.childNodes[i]
      if (el.className.indexOf('layer') > -1) {
        layers.push(el)
      }
    }

    return layers
  }

  render() {
    const {
      cardTransform,
      lightGradient,
      layerTransform1,
      layerTransform2,
      layerTransform3,
      layerTransform4,
      layerTransform5,
    } = this.state
    const cardStyle = cardTransform ? { transform: cardTransform } : {}
    const lightStyle = lightGradient ? { background: lightGradient } : {}
    const layerStyle1 = layerTransform1 ? { transform: layerTransform1 } : {}
    const layerStyle2 = layerTransform2 ? { transform: layerTransform2 } : {}
    const layerStyle3 = layerTransform3 ? { transform: layerTransform3 } : {}
    const layerStyle4 = layerTransform4 ? { transform: layerTransform4 } : {}
    const layerStyle5 = layerTransform5 ? { transform: layerTransform5 } : {}
    return (
      <article ref={this.cardRef} style={cardStyle} data-offset="5" className={styles.card}>
        <div key="1" style={lightStyle} className={styles.light}></div>
        <div key="2" data-offset="-2" style={layerStyle1} className={styles.layer1}></div>
        <div key="3" style={layerStyle2} className={styles.layer2}></div>
        <div key="4" data-offset="1" style={layerStyle3} className={styles.layer3}></div>
        <div key="5" data-offset="3" style={layerStyle4} className={styles.layer4}></div>
        <div key="6" data-offset="10" style={layerStyle5} className={styles.layer5}></div>
      </article>
    )
  }
}