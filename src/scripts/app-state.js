let subscriberId = 0
let debounce, oldState
const newState = {}
const subscribers = new Map()

const state = {
  view: '',
  detailId: ''
}

const appState = new Proxy(state, {
  set(state, key, value) {
    if (state[key] !== value) {
      newState[key] = value
      cancelAnimationFrame(debounce)
      debounce = requestAnimationFrame(() => {
        oldState = { ...state }
        for (let key in newState) {
          state[key] = newState[key]
          delete newState[key]
        }
        for (let obj of subscribers.values()) {
          obj.callback.call(obj.context, state, oldState)
        }
      })
    }
    return state
  },
  get(target, prop) {
    return newState[prop] ?? target[prop]
  }
})

state.subscribe = function (callback, context = null) {
  subscriberId++
  subscribers.set(subscriberId, { callback, context })
  return {
    id: subscriberId,
    unsubscribe() {
      subscribers.delete(this.id)
    }
  }
}

export { appState }
