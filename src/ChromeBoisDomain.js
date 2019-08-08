import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
     const x = event.clientX
     const y = event.clientY
     drawChromeBoiAtCoords(x,y)
  }

  clickHandler = (event) => {
    toggleCycling()
  }

  handleKeypress = (event) => {
    if (event.key === 'a') {
      resize('+')
    }
    else if (event.key === 's') {
      resize('-')
    }
  }

  render() {
    return (
      <canvas
        onClick={this.clickHandler}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeypress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
