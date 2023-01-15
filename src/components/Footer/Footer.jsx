import React from 'react'
import "./Footer.scss"

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

  return (
    <footer>
        <span>Made with <i className="fa-brands fa-react"></i> by Giulio Simone Floresta <i className="fa-regular fa-copyright"></i></span>
        <div className="containerSocial">
          <a href="https://florestagiuliosimone.it"><i className="fa-solid fa-link"></i></a>
          <a href="https://www.linkedin.com/in/giuliosimonefloresta/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="mailto:florestagiuliosimone@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://github.com/flgisimone"><i className="fa-brands fa-github"></i></a>
        </div>
        <span>{year}</span>
    </footer>
  )
}

export default Footer