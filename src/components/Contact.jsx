import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Contact = () => {
  
  const {handleSubmit, register, reset} = useForm()

  const onSubmit = (data, e) => { // Cambié el orden de los parámetros
    e.preventDefault(); // Añadí preventDefault para evitar que el formulario se envíe automáticamente
    emailjs.sendForm('service_2oxksqj', 'template_i17l0d7', e.target, 'YR1nRKFY2DFWpbAJx', data)
      .then((res) => {
        console.log(res);
        reset({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contacto</h2>
      <div className="contact__writeMe">
        <form onSubmit={handleSubmit(onSubmit)} className="contact__writeMe--form">
          <label htmlFor="name" >Nombre</label>
          <input {...register("name")} name='name' type="text"placeholder="👨🏻‍💼 Ingrese su nombre" />
          <label htmlFor="email" >Correo</label>
          <input name='email' type="email" {...register("email")} placeholder="@ Ingrese su correo"/>
          <label htmlFor="message">Mensaje</label>
          <textarea {...register("message")} placeholder="✉ Ingrese su mensaje" name="message" id="" cols="30" rows="10"></textarea>
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
