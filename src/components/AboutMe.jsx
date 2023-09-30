

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <h2 className="aboutMe__name">Acerca de Mi</h2>
      <div className="aboutMe__engineer">
        <div className="aboutMe__imgtext">
          <h3>Ingeniero</h3>
          <p>
            "Hola, soy ingeniero electrónico. Mi enfoque principal se encuentra en la automatización y el control, una rama apasionante de la electrónica. Durante mi carrera, desarrollé habilidades en diseño de hardware y firmware, así como en modelado 3D utilizando SolidWorks. Esta combinación de conocimientos me permitió trabajar en proyectos de automatización y control, donde también adquirí experiencia en desarrollo de software. Estoy emocionado por seguir explorando las posibilidades que esta combinación de habilidades ofrece en mi carrera profesional."
          </p>
        </div>
        <div className="aboutMe__developer">
          <h3>Desarrollador</h3>
          <p>
            "Después de graduarme como ingeniero electrónico, me adentré en el emocionante mundo del desarrollo web. La oportunidad de crear páginas, maquetar diseños y dar vida a diversas funcionalidades me atrajo profundamente. Sin embargo, lo que realmente impulsó mi aprendizaje y consolidó mis bases fue mi experiencia en Academlo. Durante mi tiempo allí, tuve el privilegio de aprender de profesores excepcionales y colaborar con compañeros apasionados en varios proyectos. En la siguiente sección, podrás explorar algunos de estos proyectos que representan mi crecimiento como desarrollador."
          </p>
        </div>
        <div className="loader">
          <div className="cell d-0"></div>
          <div className="cell d-1"></div>
          <div className="cell d-2"></div>

          <div className="cell d-1"></div>
          <div className="cell d-2"></div>

          <div className="cell d-2"></div>
          <div className="cell d-3"></div>

          <div className="cell d-3"></div>
          <div className="cell d-4"></div>
        </div>
      </div>

    </div>

  )
}

export default AboutMe
