

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="aboutMe__imgtext">
        <h2 className="aboutMe__name">Acerca de Mí</h2>
        <p>
          "Soy desarrollador de software con experiencia en gran variedad de tecnologías, igualmente me titulé como Ingeniero Electrónico, especialista en Ingeniería de Software. Estoy emocionado por la oportunidad de aplicar mis conocimientos y habilidades en tu empresa para contribuir al éxito del equipo."
        </p>
        <div class="about__information">
          <div class="information">
            <h3 class="information__title"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height=".8em" width=".8em" xmlns="http://www.w3.org/2000/svg"><path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path></svg> Educación</h3>
            <ul class="education">
              <li class="career">Desarrollo Full-Stack - Ciencias de la Computación</li>
              <li class="institution">Academlo</li>
              <li class="year">2023 - 2024</li>
            </ul>
            <ul class="education">
              <li class="career">Ingeniería Electrónica</li>
              <li class="institution">Universidad CESMAG</li>
              <li class="year">2013 - 2019</li>
            </ul>
            <ul className="education">
              <li class="career">Especialización en Ingeniería de Sosftware</li>
              <li class="institution">Universidad Nacional de Colombia</li>
              <li class="year">2023 - 2024</li>
            </ul>
          </div>
          <div class="information">
            <h3 class="information__title"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-228-32c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H118.4C106 384 96 375.4 96 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"></path></svg> Información</h3>
            <ul class="myInformation">
              <li class="datum"><span>Edad: </span>27</li>
              <li class="datum"><span>Título: </span>Ingeniero Electrónico</li>
              <li class="datum"><span>Celular: </span>+57 301-301-9693</li>
              <li class="datum"><span>Ubicación: </span>Medellín, Colombia</li>
              <li class="email"><span>Email: </span>kjuradoe@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <img className="aboutMe__img" src="https://media-public.canva.com/BZzls/MAEvmIBZzls/1/tl.png" alt="" />
    </div>

  )
}

export default AboutMe
