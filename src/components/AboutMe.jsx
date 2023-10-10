

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <h2 className="aboutMe__name">Acerca de Mí</h2>
      <div className="aboutMe__engineer">
        <div className="aboutMe__imgtext">
          <h3>Desarrollador</h3>
          <p>
            "Soy un desarrollador de software con experiencia en una variedad de tecnologías, incluyendo JavaScript, HTML, CSS y React.js. Mi pasión por la programación va más allá de un simple trabajo; es un compromiso constante con la mejora. Estoy emocionado por la oportunidad de aplicar mis conocimientos y habilidades en tu empresa para contribuir al éxito del equipo."
          </p>
        </div>
        <div className="aboutMe__developer">
          <h3>Ingeniero</h3>
          <p>
            "Además de mi experiencia como desarrollador de software, también soy Ingeniero Electrónico con un enfoque en automatización y control. Esta experiencia me ha proporcionado una sólida base en programación, que he aplicado en el desarrollo de hardware y firmware, complementando mis habilidades como desarrollador."
          </p>
        </div>
        <img className="aboutMe__img" src="https://media-public.canva.com/BZzls/MAEvmIBZzls/1/tl.png" alt="" />
      </div>

    </div>

  )
}

export default AboutMe
