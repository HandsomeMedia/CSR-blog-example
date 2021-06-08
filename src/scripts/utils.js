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

function formatDate(iso) {
  const date = new Date(iso)
  const elapsedMin = (Date.now() - date) / 60000
  const elapsedHrs = (Date.now() - date) / 3600000

  if (elapsedMin < 1) return 'less than a minute ago'

  if (elapsedMin < 60) return `${Math.floor(elapsedMin)} minute${elapsedMin < 2 ? '' : 's'} ago`

  if (elapsedHrs < 12) return `${Math.floor(elapsedHrs)} hour${elapsedHrs < 2 ? '' : 's'} ago`

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export { fadeOnLoad, formatDate }
