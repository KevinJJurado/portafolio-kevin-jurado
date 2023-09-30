import { useState } from "react"

const Navbar = ({ setDarkMode, darkMode }) => {

  const [showNaBar, setShowNaBar] = useState(false)

  const handleShowNav = () => {
    setShowNaBar(true)
  }
  const handleCloseNav = () => {
    setShowNaBar(false)
  }

  const handleDark = () => {
    setDarkMode(!darkMode)
  }
  return (
    <nav className='navbar'>
      <h2 className="navbar__name"><i className='bx bx-code-alt'></i><a href="#Home">
      <svg className="name__k" id="Layer_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2_00000035489335870250007160000008368404589270451602_"><g id="Alphabet"><g id="K"><path id="K-2" d="m110.8 448.6v-385.2h105v385.2zm214.8-196.8 75.6 196.8h-112.8l-72-196.8 71.4-188.4h112.8z" fill="#1273eb"/><g fill="#459eff"><path d="m110.8 63.4h105v385.2h-105z"/><path d="m256 147.3v212.7l-39.6-108.2z"/></g></g></g></g></svg>
      <svg className="name__j" id="Capa_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="J_2_"><path d="m421.03 0v315.75c0 120.376-43.211 194.086-165 196.2-1.79.03-3.6.05-5.43.05-175.74 0-158.26-177.87-159.63-182.24l118.65-13.7c2.78 12.38-8.14 84.49 44.17 84.49.76 0 1.51-.01 2.24-.02 32.702-.634 40.65-15.582 40.65-78.67v-321.86z" fill="#c68cff"/><path d="m421.03 0v315.75c0 120.376-43.211 194.086-165 196.2v-111.42c32.702-.634 40.65-15.582 40.65-78.67v-321.86z" fill="#aa80ff"/></g></svg>
        </a></h2>
      <div className={`${showNaBar ? 'show__navbar' : "nav__menu"}`}>
      <span onClick={handleCloseNav} className="navbar__close">
          <i className="bx bx-x"></i>
        </span>
        <ul className="navbar__list">
          {/* <li className="navbar__item"><a href="#Home">Kevin</a></li> */}
          <li className="navbar__item"><a href="#aboutMe">Acerca de Mi</a></li>
          <li className="navbar__item"><a href="#projects">Projectos</a></li>
          <li className="navbar__item"><a href="#skills">Habilidades</a></li>
          <li className="navbar__item"><a  href="#contact">Contacto</a></li>
          <li className="navbar__item">
            <label className="ui-switch">
              <input onChange={handleDark} type="checkbox" checked={darkMode}/>
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>
          </li>
        </ul>  
      </div>
      <span onClick={handleShowNav} className="navbar__btn">
        <i className='bx bx-menu'></i>
      </span>
    </nav>
  )
  
}

      

export default Navbar
