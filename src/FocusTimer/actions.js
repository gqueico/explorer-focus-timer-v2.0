import state from './state.js'
import * as timer from './timer.js'
import * as element from './elements.js'

export function toggleRunning() {
  document.documentElement.classList.add('running')
  state.isRunning = true

  timer.countdown()
}

export function stop() {
  document.documentElement.classList.remove('running')
  state.isRunning = false
}

export function increaseTime() {
  let minutes = Number(element.minutes.textContent)

  minutes+= 5

  if(minutes > 60) {
    return
  }
  
  timer.updateDisplay(minutes)
}