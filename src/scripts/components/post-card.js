const template = (imgSrc, title, summary) => /*html*/ `
<style>
  :host{
    display: flex;
    flex-flow: column;
    height: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: rgba(255,255,255,.8);
    -webkit-backdrop-filter: var(--bg-blur);
    backdrop-filter: var(--bg-blur);
  }

  figure, article{
    margin: 0;
  }

  figure {
    position: relative;
    padding-bottom: 42%;
  }

  figure img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  article {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    flex: 1;
    padding: var(--space-md);
  }

  article > * {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
  }

  article .title{
    margin-bottom: var(--space-sm);
    font-family: var(--title-font);
    font-size: var(--h2-size);
    -webkit-line-clamp: 2;
  }

  article .summary{
    color: var(--medium-gray);
    -webkit-line-clamp: 3;
  }

</style>
<figure>
  <img src="${imgSrc}" loading="lazy">
</figure>
<article>
  <h2 class="title">${title}</h2>
  <p class="summary">${summary}</p>
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
