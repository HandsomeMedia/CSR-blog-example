import './views/post-list.js'

const postList = document.querySelector('post-list')

async function init() {
  const data = await fetch('./data.json').then(response => response.json())

  postList.blogData = data
}

init()
