import { controls } from './elements.js'
import { sounds } from './elements.js'
import * as actions from './actions.js'
import * as Sounds from './sounds.js'
import state from './state.js'

let counter = 0

export function registerControls() {
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}

export function registerSoundsButtons() {
  sounds.addEventListener('click', event => {
    const selected = event.target.classList.toggle('selected')
    const music = event.target.dataset.music

    if(selected) {
      actions.playMusic(music)
      counter++
    } else {
      Sounds[music].pause()
      counter--

      if(counter == 0) {
        document.documentElement.classList.remove('music-on')
        state.itsPlaying = false
      }
    }
    
    if(music === undefined) {
      return
    }
  })
}