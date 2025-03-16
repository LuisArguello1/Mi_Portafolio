import React from 'react'
import "../Css/inicio.css"
import flecha_left from "/assets/arrowleft.svg"

const Inicio = ({setRenderPage}) => {
  return (
    <div className='contenedor_principal_inicio'>
        <div className='contendor_text'>
            <div className='texto_principal'><p>Portafolio</p></div>
            <div className='texto_secundario'><p>Luis Emilio Arguello López</p></div>
        </div>
        <div className='contenedor_btn' onClick={() => setRenderPage("Proyectos")}>
            Comenzar
            <button type='button' className='btn_inicio'><img src={flecha_left} alt='error'></img></button>
        </div>
    </div>
  )
}

export default Inicio