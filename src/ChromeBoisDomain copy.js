import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'

// Add an event listener to the <canvas> element to capture a click. Create an event handler which, 
// when fired, invokes the provided toggleCycling function (with no arguments)

// Add an event listener to the <canvas> element to capture when a key is pressed.
//  When a key is pressed, an event handler should invoke the the provided resize function 
// with a single argument of either '+' or '-':

// If the key pressed was 'a', then it should call resize with '+'

// If the key pressed was 's', then it should call resize with '-'





export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    // console.log("clientX = " + event.clientX)
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        
        onKeyPress={
          (event) => {
            if (event.key == "a") {
              resize("+")
            } else if (event.key == "s") {
              resize("-")
            }
          }
          //onKeyPress uses callback as function, so if/else if's return values can be regular function calls
          //since they are already in callback
          // (event) => {event.key == "k" ? console.log("K was pressed"): console.log("not k")  }
        
        }
        onClick={toggleCycling}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
