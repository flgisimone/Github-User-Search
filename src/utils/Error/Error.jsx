import React from 'react'
import "./Error.scss"

const Error = () => {

    const refreshPage = () =>{
        window.location.reload(false);
    }

  return (
    <div className='error'>
        <i className="fa-regular fa-face-sad-tear"></i>
        <span className='textError'>L'utente non è stato trovato o non è stato possibile stabilire la connessione con il server. Ricarica la pagina.</span>
        <button onClick={refreshPage}><i className="fa-solid fa-rotate-right"></i></button>
    </div>
  )
}

export default Error