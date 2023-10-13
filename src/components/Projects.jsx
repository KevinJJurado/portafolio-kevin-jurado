import { useEffect } from "react"

const Projects = () => {

  useEffect(() => {
    const carousel = document.querySelector('#sliderId')
    const arrowIcons = document.querySelectorAll('.PreviusNext')
    const firstImage = document.querySelectorAll('.container__imgSlider')[0];

    let firstImageWidth = firstImage.clientWidth + 0 
    let isDragStart = false, prevPageX, prevScrollLeft

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
      if (!isDragStart) return;
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
        <ul id="sliderId" className="slider__box--carousel">
          <li className="container__imgSlider">
            <h3>App Music</h3>
            <div className="container__imgSlider--content">
              <div className="container__imgSlider--redirection">
                <a className="container__imgSlider--img" href="https://app-music-kevin-jurado.netlify.app/" target="_blank"><img src="/app_music.PNG" alt="" /></a>
                <span className="container__imgSlider-span"><a href="https://app-music-kevin-jurado.netlify.app/" target="_blank">Visitar Pagina<i className='bx bx-chevrons-right redirection'></i></a></span>
              </div>
              <div className="container__imgSlider--info">
                <p>Pagina en la cual se despliega lista de canciones y tambien se puede crear una lista de reporducción, todo esto extraido de la API de spotify y de una API proporcionada por Academlo</p>
                <p className="container__imgSlider--tec"><span>Tecnologías:</span> HTML, CSS, API, React JS</p>
                <p><a href="https://github.com/KevinJJurado/app-music-kevin-jurado" target="_blank"><i className='bx bxl-github container__imgSlider--github'></i></a></p>
              </div>
            </div>
          </li>
          <li className="container__imgSlider">
            <h3>User Crud</h3>
            <div className="container__imgSlider--content">
              <div className="container__imgSlider--redirection">
                <a className="container__imgSlider--img" href="https://userscrudkevinjurado.netlify.app/" target="_blank"><img src="/userCrud.PNG" alt="" /></a>
                <span className="container__imgSlider-span"><a href="https://userscrudkevinjurado.netlify.app/" target="_blank">Visitar Pagina<i className='bx bx-chevrons-right redirection'></i></a></span>
              </div>
              <div className="container__imgSlider--info">
                <p>Pagina en la cual se puede crear usuarios, borrar y actualizar, todo esto desde una api publica proporcionada por Academlo</p>
                <p className="container__imgSlider--tec"><span>Tecnologías:</span> HTML, CSS, API, React JS</p>
                <p><a href="https://github.com/KevinJJurado/users_crud" target="_blank"><i className='bx bxl-github container__imgSlider--github'></i></a></p>
              </div>
            </div>
          </li>
          <li className="container__imgSlider">
            <h3>Pokedex</h3>
            <div className="container__imgSlider--content">
              <div className="container__imgSlider--redirection">
                <a className="container__imgSlider--img" href="https://pokedex-kevin-jurado.netlify.app/" target="_blank"><img src="/pokedex.PNG" alt="" /></a>
                <span className="container__imgSlider-span"><a href="https://pokedex-kevin-jurado.netlify.app/" target="_blank">Visitar Pagina<i className='bx bx-chevrons-right redirection'></i></a></span>
              </div>
              <div className="container__imgSlider--info">
                <p>Pagina que contiene informacion de la serie animada pokemon, todo extraido de un API publica</p>
                <p className="container__imgSlider--tec"><span>Tecnologías:</span> HTML, CSS, API, React JS</p>
                <p><a href="https://github.com/KevinJJurado/pokedex-kevin-jurado" target="_blank"><i className='bx bxl-github container__imgSlider--github'></i></a></p>
              </div>
            </div>
          </li>
          <li className="container__imgSlider">
            <h3>Rick and Morty</h3>
            <div className="container__imgSlider--content">
              <div className="container__imgSlider--redirection">
                <a className="container__imgSlider--img" href="https://rickandmorty-kevin-jurado.netlify.app/" target="_blank"><img src="/RickandMorty.PNG" alt="" /></a>
                <span className="container__imgSlider-span"><a href="https://rickandmorty-kevin-jurado.netlify.app/" target="_blank">Visitar Pagina<i className='bx bx-chevrons-right redirection'></i></a></span>
              </div>
              <div className="container__imgSlider--info">
                <p>Pagina que contiene informacion de la serie animada Rick and Morty, todo extraido de un API publica</p>
                <p className="container__imgSlider--tec"><span>Tecnologías:</span> HTML, CSS, API, React JS</p>
                <p><a href="https://github.com/KevinJJurado/entregable3RickandMorty" target="_blank"><i className='bx bxl-github container__imgSlider--github'></i></a></p>
              </div>
            </div>
          </li>
          <li className="container__imgSlider">
            <h3>Weather App</h3>
            <div className="container__imgSlider--content">
              <div className="container__imgSlider--redirection">
                <a className="container__imgSlider--img" href="https://weatherapp-kevin-jurado.netlify.app/" target="_blank"><img src="/weatherApp.PNG" alt="" /></a>
                <span className="container__imgSlider-span"><a href="https://weatherapp-kevin-jurado.netlify.app/" target="_blank">Visitar Pagina<i className='bx bx-chevrons-right redirection'></i></a></span>
              </div>
              <div className="container__imgSlider--info">
                <p>Pagina que contiene informacion del clima en tiempo real, información extraida de un API publica</p>
                <p className="container__imgSlider--tec"><span>Tecnologías:</span> HTML, CSS, API, React JS</p>
                <p><a href="https://github.com/KevinJJurado/weatherApp" target="_blank"><i className='bx bxl-github container__imgSlider--github'></i></a></p>
              </div>
            </div>
          </li>
          <li className="container__imgSlider">
            <h3>E-Commerce</h3>
            <div className="container__imgSlider--content">
              <div className="container__imgSlider--redirection">
                <a className="container__imgSlider--img" href="https://e-commerce-kevin-jurado.netlify.app/" target="_blank"><img src="/ecommerce.PNG" alt="" /></a>
                <span className="container__imgSlider-span"><a href="https://e-commerce-kevin-jurado.netlify.app/" target="_blank">Visitar Pagina<i className='bx bx-chevrons-right redirection'></i></a></span>
              </div>
              <div className="container__imgSlider--info">
                <p>Pagina que contiene un e-commerce de ropa, información extraida de un API publica</p>
                <p className="container__imgSlider--tec"><span>Tecnologías:</span> HTML, CSS, JavaScript, API</p>
                <p><a href="https://github.com/KevinJJurado/proyect_e_commerce" target="_blank"><i className='bx bxl-github container__imgSlider--github'></i></a></p>
              </div>
            </div>
          </li>
        </ul>
        <i id="right" className='bx bx-chevron-right PreviusNext next' ></i>
      </div>
    </div>
  )
}

export default Projects
