// grabbing elements that have the polaroid class 
const polaroid = document.querySelectorAll('.polaroid')

// counter init
let z = 1

polaroid.forEach((polaroid) => {
  const title = polaroid.querySelector('.content')
  const corner = polaroid.querySelector('.corner')

  // increases z index whenever event happens
  function zIncreaser(x) {
    polaroid.addEventListener(x, () => {
      z = z + 1
      polaroid.style.zIndex = z
    })
  }

  zIncreaser('mousedown')
  zIncreaser('mouseover')

  // creates a class called is-dragging
  title.addEventListener('mousedown', (event) => {

    let l = polaroid.offsetLeft
    let t = polaroid.offsetTop

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      polaroid.style.left = l + (event.pageX - startX) + 'px'
      polaroid.style.top = t + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })

  corner.addEventListener('mousedown', (event) => {
    let w = polaroid.clientWidth
    let h = polaroid.clientHeight

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      polaroid.style.width = w + (event.pageX - startX) + 'px'
      polaroid.style.height = h + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })
})
