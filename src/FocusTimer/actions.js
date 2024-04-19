import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
  document.documentElement.classList.add('running')
  state.isRunning = true

  timer.countdown()
}

export function stop() {
  document.documentElement.classList.remove('running')
  state.isRunning = false
}