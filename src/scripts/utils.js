function fadeOnLoad(img, delay) {
  img.style.setProperty('opacity', 0)
  img.style.setProperty('transition', `opacity ${delay}ms`)

  if (img.complete) {
    loadComplete(img)
  } else {
    img.addEventListener('load', e => loadComplete(img))
    img.addEventListener('error', e => {
      img.src = '/assets/blob1.svg'
      loadComplete(img)
    })
  }

  function loadComplete(target) {
    target.style.removeProperty('opacity')
  }
}

export { fadeOnLoad }
