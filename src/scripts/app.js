import './views/post-list.js'
import './views/post-detail.js'
import './components/bg-anim.js'
import './components/post-card.js'
import { appState } from './app-state.js'

let viewEl
const urlParams = new URLSearchParams(document.location.search)

async function init() {
  appState.subscribe(handleAppState)
  window.addEventListener('popstate', handleHistory)

  if (urlParams.has('id')) {
    appState.detailId = urlParams.get('id')
    appState.view = 'post-detail'
  } else {
    appState.view = 'post-list'
  }
}

function handleAppState(state, oldState) {
  if (state.view !== oldState.view) renderView(state.view)
}

function handleHistory(e) {
  appState.detailId = e.state?.detailId ?? ''
  appState.view = e.state?.view ?? 'post-list'
}

function renderView(viewName) {
  const newViewEl = document.createElement(viewName)
  const url = appState.detailId ? `/?id=${appState.detailId}` : null

  if (viewEl) {
    viewEl.replaceWith(newViewEl)
    history.pushState({ view: viewName, id: appState.detailId }, null, url)
  } else {
    document.body.append(newViewEl)
  }

  window.scroll(0, 0)
  viewEl = newViewEl
}

init()
