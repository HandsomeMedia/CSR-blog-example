import './views/post-list.js'
import './components/bg-anim.js'
import './components/post-card.js'
import { appState } from './app-state.js'

let viewEl

async function init() {
  appState.subscribe(handleAppState)
  appState.view = 'post-list'
}

function handleAppState(state, oldState) {
  if (state.view !== oldState.view) renderView(state.view)
}

function renderView(newViewName) {
  const newViewEl = document.createElement(newViewName)

  if (viewEl) {
    viewEl.replaceWith(newViewEl)
  } else {
    document.body.append(newViewEl)
  }
  viewEl = newViewEl
}

init()
