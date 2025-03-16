import React from 'react'
import "../Css/navbar.css"
import svg_portafolio from "/assets/portafolio.svg"
import svg_proyecto from "/assets/proyecto.svg"
import svg_educacion from "/assets/educacion.svg"
import svg_informacion from "/assets/informacion.svg"

const Navbar = ({setRenderPage}) => {
    const handleChangePage = (renderPage) => {
        setRenderPage(renderPage)
    }
  return (
    <div className='contenedor_principal_navbar'>
        <div className='contenedor_opciones_navbar'>
            <ul className="lista_general">
                <li className="opciones-nav" onClick={() => handleChangePage("Inicio")}>
                    <img src={svg_portafolio} alt="error"  className='svg_navbar'></img> 
                    Portafolio
                </li>
                <li className="opciones-nav" onClick={() => handleChangePage("Proyectos")} >
                    <img src={svg_proyecto} alt="error" className='svg_navbar'></img> 
                    Proyectos
                </li>
                <li className="opciones-nav" onClick={() => handleChangePage("Educacion")}>
                    <img src={svg_educacion} alt="error" className='svg_navbar'></img> 
                    Educación
                </li>
                <li className="opciones-nav" onClick={() => handleChangePage("Informacion")}>
                    <img src={svg_informacion} alt="error" className='svg_navbar'></img> 
                    Información
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar