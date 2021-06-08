import { appState } from '../app-state.js'
import { getPostList } from '../services/data.service.js'

const template = /*html*/ `
  <style>
    :host{
      contain: content;
      display: block;
      max-width: var(--max-width);
      margin: auto;
    }

    ul{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(320px,100%), 1fr));
      gap: var(--space-lg);
      list-style: none;
      margin: 0;
      padding: 0;
    }

    post-card{
      cursor: pointer;
    }
  </style>
  <ul></ul>
`

class PostList extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = template
    this.ul = this.shadowRoot.querySelector('ul')
  }

  async connectedCallback() {
    let li, card
    const frag = document.createDocumentFragment()
    const posts = await getPostList('./data.json')

    posts.forEach((post, i) => {
      card = document.createElement('post-card')
      card.postData = post
      card.id = post.id
      card.style.setProperty('--delay', `${i / 10}s`)

      li = document.createElement('li')
      li.append(card)
      frag.append(li)
    })

    this.ul.append(frag)

    this.addEventListener('click', this)
  }

  handleEvent(e) {
    const target = e.composedPath()[0]

    console.log(e, target, target.tagName)
    switch (target.tagName) {
      case 'POST-CARD':
        appState.detailId = target.id
        appState.view = 'post-detail'
        break
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this)
  }
}

customElements.define('post-list', PostList)
