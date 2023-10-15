import { useEffect, useState } from "react"

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliders = [
    {
      title: 'App Music',
      image: '/app_music.PNG',
      site:'https://app-music-kevin-jurado.netlify.app/',
      paragraph: 'Pagina en la cual se despliega lista de canciones y tambien se puede crear una lista de reporducción, todo esto extraido de la API de spotify y de una API proporcionada por Academlo',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/KevinJJurado/app-music-kevin-jurado'
    },
    {
      title: 'User Crud',
      image: '/userCrud.PNG',
      site:'https://userscrudkevinjurado.netlify.app/',
      paragraph: 'Pagina en la cual se puede crear usuarios, borrar y actualizar, todo esto desde una api publica proporcionada por Academlo',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/KevinJJurado/users_crud'
    },
    {
      title: 'Pokedex',
      image: '/pokedex.PNG',
      site:'https://pokedex-kevin-jurado.netlify.app/',
      paragraph: 'Pagina que contiene informacion de la serie animada pokemon, todo extraido de un API publica',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/KevinJJurado/pokedex-kevin-jurado'
    },
    {
      title: 'Rick and Morty',
      image: '/RickandMorty.PNG',
      site:'https://rickandmorty-kevin-jurado.netlify.app/',
      paragraph: 'Pagina que contiene informacion de la serie animada Rick and Morty, todo extraido de un API publica',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/KevinJJurado/entregable3RickandMorty'
    },
    {
      title: 'Weather App',
      image: '/weatherApp.PNG',
      site:'https://weatherapp-kevin-jurado.netlify.app/',
      paragraph: 'Pagina que contiene informacion del clima en tiempo real, información extraida de un API publica',
      tecnologys: 'HTML, CSS, API, React JS',
      github: 'https://github.com/KevinJJurado/weatherApp'
    },
    {
      title: 'E-Commerce',
      image: '/ecommerce.PNG',
      site:'https://e-commerce-kevin-jurado.netlify.app/',
      paragraph: 'Pagina que contiene un e-commerce de ropa, información extraida de un API publica',
      tecnologys: 'HTML, CSS, API, JavaScript',
      github: 'https://github.com/KevinJJurado/proyect_e_commerce'
    }
  ]

  const previus = () => {
      setCurrentSlide((currentSlide - 1 + sliders.length)%sliders.length)
  }
  const next = () => {
      setCurrentSlide((currentSlide + 1)%sliders.length)
  }

  return (
    <div className="principal__projects" id="projects">
      <h2 className="projects__title">Mis Projectos</h2>
      <div className="slider__box">
        <i onClick={previus} id="left" className='bx bx-chevron-left PreviusNext previus'></i>
        {
          sliders.map((slide, index) => (
            <section key={index} id="sliderId" className={`${ index === currentSlide ? 'slider__box--carousel' : 'hidden'}`} >
              <div className="container__imgSlider">
                <h3>{slide.title}</h3>
                <div className="container__imgSlider--content">
                  <div className="container__imgSlider--redirection">
                    <a className="container__imgSlider--img" href={slide.site} target="_blank"><img src={slide.image} alt="" /></a>
                    <span className="container__imgSlider-span"><a href={slide.site} target="_blank">Visitar Pagina<i className='bx bx-chevrons-right redirection'></i></a></span>
                  </div>
                  <div className="container__imgSlider--info">
                    <p>{slide.paragraph}</p>
                    <p className="container__imgSlider--tec"><span>Tecnologías:</span> {slide.tecnologys}</p>
                    <p><a href={slide.github} target="_blank"><i className='bx bxl-github container__imgSlider--github'></i></a></p>
                  </div>
                </div>
              </div>
            </section>
          ))
        }
        <i onClick={next} id="right" className='bx bx-chevron-right PreviusNext next' ></i>
      </div>
    </div>
  )
}

export default Projects
