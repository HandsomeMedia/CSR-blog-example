import '../components/post-card.js'

const template = /*html*/ `
  <style>
    :host{
      display: block;
      max-width: 1000px;
      margin: auto;
    }

    ul{
      list-style: none;
      margin: 0;
      padding: 0;
    }
  </style>
  <ul></ul>
`

class PostList extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = template
  }

  set blogData(data) {
    let li, card
    const oldList = this.shadowRoot.querySelector('ul')
    const newList = document.createElement('ul')

    data.posts.forEach(post => {
      card = document.createElement('post-card')
      card.postData = post
      card.id = post.id

      li = document.createElement('li')
      li.append(card)

      newList.append(li)
    })

    oldList.replaceWith(newList)
  }
}

customElements.define('post-list', PostList)
