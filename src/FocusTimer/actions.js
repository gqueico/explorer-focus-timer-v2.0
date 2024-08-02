import state from './state.js'
import * as timer from './timer.js'
import * as element from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  document.documentElement.classList.add('running')
  state.isRunning = true

  sounds.buttonPressAudio.play()
  timer.countdown()
}

export function stop() {
  document.documentElement.classList.remove('running')
  state.isRunning = false

  sounds.buttonPressAudio.play()
}

export function increaseTime() {
  let minutes = Number(element.minutes.textContent)

  minutes+= 5

  if(minutes > 60) {
    return
  }
  
  timer.updateDisplay(minutes)
}

export function decreaseTime() {
  let minutes = Number(element.minutes.textContent)

  minutes-= 5

  if(minutes < 5) {
    return
  }

  timer.updateDisplay(minutes)
}

export function playMusic(music) {
  document.documentElement.classList.add('music-on')
  state.itsPlaying = true

  sounds[music].play()
}