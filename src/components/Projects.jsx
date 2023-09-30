import { useEffect } from "react"

const Projects = () => {
  
  useEffect(() => {
    const carousel = document.querySelector('#sliderId')
    const arrowIcons = document.querySelectorAll('.PreviusNext')
    const firstImage = document.querySelectorAll('.container__imgSlider img')[0];

    let firstImageWidth =firstImage.clientWidth + 14
    let isDragStart = false, prevPageX, prevScrollLeft;
    
    arrowIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == 'left' ? - firstImageWidth : firstImageWidth
      })
    });
    const dragStart = (e) => {
      isDragStart = true
      prevPageX = e.pageX
      prevScrollLeft = carousel.scrollLeft
    }
    const dragging = (e) => {
      if(!isDragStart) return;
      e.preventDefault()
      let positionDiff = e.pageX - prevPageX
      carousel.scrollLeft = prevScrollLeft - positionDiff
    }
    const dragStop = () => {
      isDragStart = false
    }
    carousel.addEventListener('mousedown', dragStart)
    carousel.addEventListener('mousemove', dragging)
    carousel.addEventListener('mouseup', dragStop)
  }, [])
  
  return (
    <div className="principal__projects" id="projects">
      <h2 className="projects__title">Mis Projectos</h2>
      <div className="slider__box">
        <i id="left" className='bx bx-chevron-left PreviusNext previus'></i>
        <div id="sliderId" className="slider__box--carousel">
          <div className="container__imgSlider">
            <img src="/userCrud.PNG" alt="" />
            <span className="container__imgSlider-span"><a href="https://userscrudkevinjurado.netlify.app/" target="_blank">Visit Website: User Crud<i className='bx bx-chevrons-right redirection'></i></a></span>
          </div>
          <div className="container__imgSlider">
            <img src="/pokedex.PNG" alt="" /> 
            <span className="container__imgSlider-span"><a href="https://pokedex-kevin-jurado.netlify.app/" target="_blank">Visit Website: Pokedex<i className='bx bx-chevrons-right redirection'></i></a></span>
          </div>
          <div className="container__imgSlider">
            <img src="/RickandMorty.PNG" alt="" /> 
            <span className="container__imgSlider-span"><a href="https://rickandmorty-kevin-jurado.netlify.app/" target="_blank">Visit Website: Rick and Morty<i className='bx bx-chevrons-right redirection'></i></a></span>
          </div>
          <div className="container__imgSlider">
          <img src="/weatherApp.PNG" alt="" /> 
            <span className="container__imgSlider-span"><a href="https://weatherapp-kevin-jurado.netlify.app/" target="_blank">Visit Website: Weather App<i className='bx bx-chevrons-right redirection'></i></a></span>
          </div>
          <div className="container__imgSlider">
          <img src="/ecommerce.PNG" alt="" />
            <span className="container__imgSlider-span"><a href="https://e-commerce-kevin-jurado.netlify.app/" target="_blank">Visit Website: E-Commerce</a><i className='bx bx-chevrons-right redirection'></i> </span>
          </div>                       
        </div>
        <i id="right" className='bx bx-chevron-right PreviusNext next' ></i>
      </div>
    </div>
  )
}

export default Projects
