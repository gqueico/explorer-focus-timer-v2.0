import state from './state.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.add('running')
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}