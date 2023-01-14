import React from 'react'
import "./Footer.scss"

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

  return (
    <footer>
        <span>Made with <i className="fa-brands fa-react"></i> by Giulio Simone Floresta</span>
        <span>{year}</span>
    </footer>
  )
}

export default Footer