import { controls } from './elements.js';
import { sounds } from './elements.js'
import * as actions from './actions.js'

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
    event.target.classList.toggle('selected')
    const music = event.target.dataset.music

    if(music === undefined) {
      return
    }

    actions.playMusic(music)
  })
}