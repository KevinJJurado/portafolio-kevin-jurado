import React from 'react'

const Popup = () => {
  return (
    <div className="Popup">
      <ul className="Popup--list">
        <li className='Popup--item'><a href="https://www.linkedin.com/in/kevin-jessid-jurado-enriquez-b98b1b18a/" target="_blank" className="socialNetworks"><i className='bx bxl-linkedin-square linkedin--icon' ></i></a></li>
        <li className='Popup--item'><a href="https://github.com/KevinJJurado" target="_blank" className="socialNetworks"><i className='bx bxl-github github--icon'></i></a></li>
        <li className='Popup--item'><a href="mailto:kjuradoe@gmail.com" target="_blank" className="socialNetworks"><i className='bx bxl-gmail gmail--icon' ></i></a></li>
      </ul>
    </div>
  )
}

export default Popup
