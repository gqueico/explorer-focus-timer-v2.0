import state from './state.js'
import * as element from './elements.js'
import { stop } from './actions.js'
import { kichenTimer } from './sounds.js'

export function countdown() {
  clearTimeout(state.countdownId)

  if(!state.isRunning) {
    return
  }
  
  let minutes = Number(element.minutes.textContent)
  let seconds = Number(element.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    stop()
    kichenTimer.play()
    updateDisplay()
    return
  }

  updateDisplay(minutes, seconds)
  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  element.minutes.textContent = String(minutes).padStart(2, '0')
  element.seconds.textContent = String(seconds).padStart(2, '0')
}