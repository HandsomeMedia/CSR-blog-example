import { appState } from '../app-state.js'
import { getPostDetail } from '../services/data.service.js'

const template = /*html*/ `
  <style>
    :host{
      display: block;
      max-width: var(--max-width);
      margin: auto;
    }
  </style>
  <article></article>
`

class PostDetail extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = template
  }

  async connectedCallback() {
    const data = await getPostDetail('./data.json', appState.detailId)

    console.log(data)

    this.addEventListener('click', this)
  }

  handleEvent(e) {
    const target = e.composedPath()[0]

    console.log(e, target)
  }

  disconnectedCallback() {
    this.removeEventListener('click', this)
  }
}

customElements.define('post-detail', PostDetail)
