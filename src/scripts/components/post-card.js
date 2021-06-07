const template = (imgSrc, title, summary) => /*html*/ `
<style>
</style>
<article>
  <img src="${imgSrc}" loading="lazy">
  <div class="text">
    <h2 class="title">${title}</h2>
    <p class="summary">${summary}</p>
  </div>
</article>
`

class PostCard extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  set postData(data) {
    this.shadowRoot.innerHTML = template(data.image, data.title, data.content)
  }
}

customElements.define('post-card', PostCard)
