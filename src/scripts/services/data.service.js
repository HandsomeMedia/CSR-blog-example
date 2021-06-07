const cache = new Map()

async function fetchData(path) {
  if (cache.has(path)) return cache.get(path)

  const data = await fetch(path).then(response => response.json())

  cache.set(path, data)

  return data
}

async function getPostList(path) {
  const data = await fetchData(path)

  return data.posts
}

async function getPostDetail(path, id) {
  const data = await fetchData(path)

  return data.posts.find(post => post.id === id)
}

export { getPostList, getPostDetail }
