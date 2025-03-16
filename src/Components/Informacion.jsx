import React from "react";
import "../Css/informacion.css";
import { useEffect } from "react";

import Footer from "./Footer";


import svg_Carrera from "/assets/tecnologia.svg"
import svg_educacion from "/assets/educacion.svg"
import svg_direccion from "/assets/direccion.svg"
import svg_cedula from "/assets/cedula.svg"
import svg_note from "/assets/note.svg"
import foto_perfil from "/Diplomas/perfil_foto.jpg"
import svg_habilidades from "/assets/habilidades.svg"
import svg_laboral from "/assets/portafolio.svg"
import svg_email from "/assets/email.svg"
import svg_telefono from "/assets/telefono.svg"

import hoja_vida from "/document/Hoja de vida - Luis Arguello.pdf"

const Informacion = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const datos_informacion = document.querySelector(
        ".contenedor_datos_informacion"
      );
      if (datos_informacion) {
        datos_informacion.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="contenedor_principal_informacion">
        <div className="contenedor_presentacion_informacion">
          <p className="text_presentacion_informacion">
            En esta sección podrás encontrar mis datos de contacto, mis
            principales habilidades y todo lo relacionado a mi perfil profesional.
            Aquí podrás conocer más sobre lo que me define como persona y como
            profesional.
          </p>
        </div>
        <div className="contenedor_datos_informacion">
          <div className="contenedor_datos_detalles_informacion">
            <h2 className="nombre_informacion">Luis Emilio Arguello López</h2>

            <div className="contenedor_svg_datos">
              <img src={svg_Carrera} alt="informacion" className="svg_informacion" />
              <strong className="p_str_informacion">Carrera:</strong>
              <p className="p_str_datos_informacion">Ingeniería en Software</p>
            </div>
            <div className="contenedor_svg_datos">
              <img src={svg_educacion} alt="informacion" className="svg_informacion" />
              <strong className="p_str_informacion">Universidad:</strong>
              <p className="p_str_datos_informacion">Universidad Estatal de Milagro "Unemi"</p>
            </div>
            <div className="contenedor_svg_datos">
              <img src={svg_cedula} alt="informacion" className="svg_informacion" />
              <strong className="p_str_informacion">Cédula:</strong>
              <p className="p_str_datos_informacion">0943986778</p>
            </div>
            <div className="contenedor_svg_datos">
              <img src={svg_direccion} alt="informacion" className="svg_informacion" />
              <strong className="p_str_informacion">Dirección:</strong>
              <p className="p_str_datos_informacion">Km 26 - Vía Milagro</p>
            </div>
            <div className="contenedor_svg_datos2">
              <div className="contenedor_svg_descripcion">
                <img src={svg_note} alt="informacion" className="svg_informacion" />
                <strong className="p_str_informacion">Descripción:</strong>
              </div>
              <p className="p_str_datos_descripcion">Soy un estudiante de Ingeniería en Software apasionado por la tecnología y la programación. Me considero una persona proactiva, siempre buscando aprender y mejorar mis habilidades para desarrollar soluciones innovadoras. A lo largo de mi formación académica he adquirido experiencia trabajando con diversas tecnologías, como JavaScript, Python, y frameworks modernos como React y Next.js, lo que me ha permitido desarrollar proyectos web funcionales y eficientes. Además, soy una persona que valora el trabajo en equipo y soy capaz de desempeñarme bien bajo presión, siempre manteniendo la calidad y el compromiso en los proyectos que realizo.
              </p>
            </div>
          </div>
          <div className="contenedor_img_perfil_informacion">
              <img src={foto_perfil} alt="foto_perfil" className="img_foto_perfil" />
              <div className="ocultar_foto"></div>
          </div>

        </div>
        
        <div className="contenedor_habilidades_experienciaLaboral">

          <div className="contenedor_habilidades_tecnologias">

            <div className="contenedor_habilidades">
              <div className="titulo_habilidades">
                <img src={svg_habilidades} alt="" className="svg_habilidades" />
                <p>Habilidades Claves:</p>
              </div>
              <ul className="lista_general_habilidades">
                <li className="lista_habilidades">Trabajo en equipo</li>
                <li className="lista_habilidades">Capacidad para trabajar bajo presión</li>
                <li className="lista_habilidades">Paciencia y atención al detalle</li>
                <li className="lista_habilidades">Resolución de problemas complejos</li>
                <li className="lista_habilidades">Adaptabilidad y aprendizaje continuo</li>
                <li className="lista_habilidades">Pensamiento crítico y lógico</li>
              </ul>
            </div>

            <div className="contenedor_tecnologias">
              <div className="titulo_habilidades">
                <img src={svg_habilidades} alt="" className="svg_habilidades" />
                <p>Tecnologías:</p>
              </div>
              <ul className="lista_general_habilidades">
                <li className="lista_habilidades"><strong>Lenguajes de programación: </strong>JavaScript, Python</li>
                <li className="lista_habilidades"><strong>Frameworks: </strong> React, Vite + React, Next.js</li>
                <li className="lista_habilidades"><strong>Bases de datos: </strong> SQL (conocimientos básicos)</li>
                <li className="lista_habilidades"><strong>Otros: </strong> Git, HTML, CSS</li>
              </ul>
            </div>
          </div>

          <div className="contenedor_experienciaLaboral">
            <div className="svg_expLaboral">
              <img src={svg_laboral} alt="" className="svg_habilidades" />
              <p>Experiencia Laboral</p>
            </div>
            <p className="text_expLaboral"><strong>Pasantía - Cnel: </strong> Corporación Nacional de Electricidad</p>
            <p className="text_expLaboral"><strong>Área: </strong> Atención al cliente</p>
            <div className="contenedor_svg_datos2">
              <div className="contenedor_svg_descripcion">
                <img src={svg_note} alt="informacion" className="svg_informacion" />
                <strong className="p_str_informacion">Descripción:</strong>
              </div>
              <p className="p_str_datos_descripcion">Durante mi pasantía en la empresa CNEL, trabajé en el área de atención al cliente, donde pude aplicar mis habilidades de comunicación y resolución de problemas. Mi labor consistió en asistir a los usuarios en la solución de problemas relacionados con el servicio de energía eléctrica, brindar información y registrar incidencias en el sistema. Esta experiencia me permitió desarrollar una mayor capacidad para trabajar bajo presión y mejorar mis habilidades interpersonales y técnicas
              </p>
            </div>
          </div>
        </div>

        <div className="contenedor_datos_contacto_curriculum">

          <div className="contenedor_contacto">

            <div className="contenedor_svg_datos_contacto">
              <div className="svg_contacto">
                <img src={svg_cedula} alt="" className="svg_habilidades" />
                <p>Contactame:</p>
              </div>
              <div className="datos_contact">

                <div className="contenedor_svg_datos2">
                  <div className="contenedor_svg_descripcion">
                    <img src={svg_email} alt="informacion" className="svg_informacion" />
                    <strong className="p_str_informacion">Correo Electronico:</strong>
                  </div>
                  <p className="p_str_datos_descripcion">luisarguello5531@gmail.com</p>
                  <p className="p_str_datos_descripcion">luisarguello829@gmail.com</p>
                </div>
                <div className="contenedor_svg_datos2">
                  <div className="contenedor_svg_descripcion">
                    <img src={svg_telefono} alt="informacion" className="svg_informacion" />
                    <strong className="p_str_informacion">Numero de telefono:</strong>
                  </div>
                  <p className="p_str_datos_descripcion">(+593) - 0983769821</p>
                </div>

              </div>
            </div>

            <div className="contenedor_buttom_contacto">
              <a
                href="mailto:luisarguello829@gmail.com?subject=Contacto desde mi portafolio&body=Hola,%20vi%20tu%20portafolio%20me%20gustaría%20contactarte.%0A%0ANombre:%20[Tu%20Nombre]%0AEmail:%20[Tu%20Email]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="buttom_contacto">Enviar</button>
              </a>
            </div>

          </div>

          <div className="contenedor_curriculum">
            <h2 className="titulo_curriculum">Curriculum Vitae</h2>
            <a href={hoja_vida} download="Curriculum-Vitae-Luis-Arguello" className="ruta_buttom_curriculum">
              <button className="btn_curriculum">Descargar</button>
            </a>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Informacion;
