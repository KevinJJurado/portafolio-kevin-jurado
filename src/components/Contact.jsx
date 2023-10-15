import emailjs from 'emailjs-com'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_2oxksqj','template_i17l0d7',e.target,'YR1nRKFY2DFWpbAJx').then(res=>{
      console.log(res);
  })
  }

  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contacto</h2>
      <div className="contact__writeMe">
        <form onSubmit={handleSubmit} className="contact__writeMe--form">
          <label htmlFor="name" >Nombre</label>
          <input name='name' type="text"placeholder="👨🏻‍💼 Ingrese su nombre" />
          <label htmlFor="email" >Correo</label>
          <input name='email' type="text" placeholder="@ Ingrese su correo"/>
          <label htmlFor="message">Mensaje</label>
          <textarea placeholder="✉ Ingrese su mensaje" name="message" id="" cols="30" rows="10"></textarea>
          <button><i className='bx bxl-telegram' ></i> Enviar</button>
        </form>
      </div>
      <div className="social__networks">
        <ul className="social__networks--list">
          <li><a href="https://www.linkedin.com/in/kevin-jessid-jurado-enriquez-b98b1b18a/" target="_blank" className="socialNetworks"><i className='bx bxl-linkedin-square linkedin--icon' ></i></a></li>
          <li><a href="https://github.com/KevinJJurado" target="_blank" className="socialNetworks"><i className='bx bxl-github github--icon'></i></a></li>
          <li><a href="mailto:kjuradoe@gmail.com" target="_blank" className="socialNetworks"><i className='bx bxl-gmail gmail--icon' ></i></a></li>
        </ul>
        <p> © Kevin Jurado. Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default Contact
