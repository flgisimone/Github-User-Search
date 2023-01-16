import React from 'react'
import "./Error.scss"

const Error = () => {

    const refreshPage = () =>{
        window.location.reload(false);
    }

  return (
    <div className='error'>
        <i className="fa-regular fa-face-sad-tear"></i>
        <span className='textError'>Errore nello stabilire la connessione con il server. Prova a ricaricare la pagina.</span>
        <button onClick={refreshPage}><i className="fa-solid fa-rotate-right"></i></button>
    </div>
  )
}

export default Error