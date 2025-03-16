import React from "react";
import "../Css/educacion.css";
import { useEffect, useState } from "react";

//Imagenes escudos de institutos
import escudo_escuela from "/Img/escudo_escuela.jpg";
import escudo_colegio from "/Img/imagen_colegio.png";
import escudo_universidad from "/Img/escudo_universidad.png";

import Footer from "./Footer"

//Imagenes reconocimientos
import diploma1 from "/Diplomas/placa_mejorBachiller.jpg";
import diploma2 from "/Diplomas/reconocimiento_honor.jpg";
import diploma3 from "/Diplomas/medalla_excelenciaAcademica.jpg";
import diploma4 from "/Diplomas/medalla_emprendimiento.jpg";
import diploma5 from "/Diplomas/titulo_bachiller.jpg";
import diploma6 from "/Diplomas/diploma_mejorBachiller.jpg";
import diploma7 from "/Diplomas/reconocimiento_exoneracion.jpg";
import diploma8 from "/Diplomas/mencion_honor2_2bachillerato.jpg";
import diploma9 from "/Diplomas/mencion_honor_tributacion.jpg";
import diploma10 from "/Diplomas/mencion_honor_2Bachillerato.jpg";
import diploma11 from "/Diplomas/mencion_honor_10decimo.jpg";
import diploma12 from "/Diplomas/mencion_honor_mate2_10decimo.jpg";
import diploma13 from "/Diplomas/mencion_honor_mate_10decimo.jpg";
import diploma14 from "/Diplomas/diploma_honor_10decimo.jpg";
import diploma15 from "/Diplomas/mencion_honor_9noveno.jpg";
import diploma16 from "/Diplomas/mencion_honor_8octavo.jpg";
import diploma17 from "/Diplomas/mencion_honor_5quinto.jpg";
import diploma18 from "/Diplomas/diploma_honor_4cuarto.jpg";
import diploma19 from "/Diplomas/mencion_honor_3cuarto.jpg";
import diploma20 from "/Diplomas/mencion_honor_2segundo.jpg";

const Educacion = () => {
  const [Reconocimientos, setReconocimientos] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const detalleEducacion = document.querySelector(
        ".contenido_detalle_educacion"
      );
      if (detalleEducacion) {
        detalleEducacion.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const listaReconocimientos = [
      {
        img: diploma1,
        titulo: "Placa mejor bachiller",
      },
      {
        img: diploma2,
        titulo: "Reconocimiento de honor",
      },
      {
        img: diploma3,
        titulo: "Medalla Excelencia Academica",
      },
      {
        img: diploma4,
        titulo: "Medalla Mejor Emprendimiento",
      },
      {
        img: diploma5,
        titulo: "Titulo de Bachiller",
      },
      {
        img: diploma6,
        titulo: "Diploma Mejor Bachiller",
      },
      {
        img: diploma7,
        titulo: "Reconocimiento de Exoneracion",
      },
      {
        img: diploma8,
        titulo: "Mencion de Honor",
      },
      {
        img: diploma9,
        titulo: "Mencion de Honor Tributacion",
      },
      {
        img: diploma10,
        titulo: "Mencion de Honor Tributacion",
      },
      {
        img: diploma11,
        titulo: "Mencion de Honor Tributacion",
      },
      {
        img: diploma12,
        titulo: "Mencion de Honor Matematicas",
      },
      {
        img: diploma13,
        titulo: "Mencion de Honor Matematicas",
      },
      {
        img: diploma14,
        titulo: "Diploma de Honor",
      },
      {
        img: diploma15,
        titulo: "Mencion de Honor",
      },
      {
        img: diploma16,
        titulo: "Mencion de Honor",
      },
      {
        img: diploma17,
        titulo: "Mencion de Honor",
      },
      {
        img: diploma18,
        titulo: "Mencion de Honor",
      },
      {
        img: diploma19,
        titulo: "Mencion de Honor",
      },
      {
        img: diploma20,
        titulo: "Mencion de Honor",
      },
    ];

    setReconocimientos(listaReconocimientos);
  }, []);

  return (

    <>
      <div className="contenedor_principal_educacion">
        <div className="contenido_presentacion_educacion">
          <div className="p_texto_educacion">
            Mi formación académica ha sido clave en el desarrollo de mis
            habilidades y conocimientos. A lo largo de mi carrera, he adquirido
            las bases necesarias y sigo ampliando mis conocimientos a través de
            proyectos y aprendizaje continuo.
          </div>
        </div>

        <div className="contenido_detalle_educacion">
          <div className="presentacion_educacion">
            <div className="datos_instituciones_educacion">
              <div className="contenedor_datos_educacion">
                <strong className="header_datos_educacion">
                  <img
                    src={escudo_escuela}
                    alt="error"
                    className="img_escuela"
                  ></img>
                  <p>Escuela de Educación Básica Victor Lazo Alarcón</p>
                </strong>
                <strong className="fecha_educacion">
                  Periodo - (2010 - 2017)
                </strong>
                <p className="p_datos_educacion">
                  Mis primeros años educativos fueron en esta escuela, donde
                  obtuve una sólida formación en diversas áreas básicas que
                  marcaron el inicio de mi trayectoria académica.
                </p>
              </div>

              <div className="escudo_institucion">
                <img src={escudo_escuela} alt="error" className="escudo"></img>
              </div>
            </div>

            <div className="datos_instituciones_educacion">
              <div className="contenedor_datos_educacion">
                <strong className="header_datos_educacion">
                  <img
                    src={escudo_colegio}
                    alt="error"
                    className="img_escuela"
                  ></img>
                  <p>Unidad Educativa Emilio Isaías Habianna</p>
                </strong>
                <strong className="fecha_educacion">
                  Periodo - (2017 - 2023)
                </strong>
                <p className="p_datos_educacion">
                  Continué mi educación en este colegio, donde amplié mis
                  conocimientos en diversas áreas académicas. Durante este tiempo,
                  tuve la oportunidad de participar en actividades
                  extracurriculares, lo que me permitió desarrollar habilidades
                  como el trabajo en equipo, la organización y la resolución de
                  problemas.
                </p>
              </div>

              <div className="escudo_institucion">
                <img src={escudo_colegio} alt="error" className="escudo"></img>
              </div>
            </div>

            <div className="datos_instituciones_educacion">
              <div className="contenedor_datos_educacion">
                <strong className="header_datos_educacion">
                  <img
                    src={escudo_universidad}
                    alt="error"
                    className="img_escuela"
                  ></img>
                  <p>Universidad Estatal de Milagro "Unemi"</p>
                </strong>
                <strong className="fecha_educacion">Periodo - (2023 - ?)</strong>
                <p className="p_datos_educacion">
                  Actualmente estoy cursando mi formación universitaria en la
                  UNEMI, donde me especializo en{" "}
                  <span style={{ color: "blue" }}>Ingenieria en software</span>.
                  Aquí he adquirido valiosos conocimientos prácticos y teóricos
                  que me están preparando para el mundo profesional.
                </p>
              </div>

              <div className="escudo_institucion">
                <img
                  src={escudo_universidad}
                  alt="error"
                  className="escudo"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="contenedor_presentar_reconocimientos">
          <div className="contenedor_reconocimientos">
            <h2 className="titulo_reconocimientos">Reconocimientos</h2>
            <div className="reconocimientos">
              {Reconocimientos.length > 0
                ? Reconocimientos.map((rec, index) => {
                    return (
                      <div className="card_rec" key={index}>
                        <div className="contenedor_img_rec">
                          <img src={rec.img} alt="" className="img_rec"></img>
                        </div>
                        <div className="titulo_rec">{rec.titulo}</div>
                      </div>
                    );
                  })
                : "No existen reconocimientos"}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Educacion;
