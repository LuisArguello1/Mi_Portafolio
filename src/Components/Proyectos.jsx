import React from "react";
import { useEffect } from "react";
import "../Css/proyectos.css";

import Footer from "./Footer"

import flecha_color from "/Assets/flecha_color.svg";
import svg_note from "/Assets/note.svg";
import svg_tecnologia from "/Assets/tecnologia.svg";

import logica_conjuntos from "/Img/logica-conjuntos.png";
import detalles_arreglos from "/Img/Detalles_arreglos.svg";
import tienda_online from "/Img/supermarket.png";

const Proyectos = () => {
  useEffect(() => {
    let currentScroll = 0; // Inicializa la posición de scroll

    const handleScroll = (event) => {
      event.preventDefault();
      const sections = document.querySelectorAll(
        ".contenedor_presentacion_proyectos, .contenedor_presentacion"
      );

      if (event.deltaY > 0) {
        // Si el scroll es hacia abajo, avanzamos al siguiente contenedor
        if (currentScroll < sections.length - 1) {
          currentScroll++;
          sections[currentScroll].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else if (event.deltaY < 0) {
        // Si el scroll es hacia arriba, regresamos al contenedor anterior
        if (currentScroll > 0) {
          currentScroll--;
          sections[currentScroll].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Agregar el listener de scroll
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="contenedor_principal_proyectos">
        <div className="contenedor_presentacion_proyectos">
          <div className="contenedor_text_presentacion">
            <div className="presentacion1">
              <p className="text_1">
                Soy estudiante de Ingeniería en Software y durante mi formación he
                trabajado en diversos proyectos que reflejan mi aprendizaje y
                crecimiento. Cada uno de estos proyectos ha sido una oportunidad
                para aplicar mis conocimientos y desarrollar soluciones prácticas.
              </p>
            </div>
            <div className="presentacion2">
              <img src={flecha_color} alt="error" className="svg_direccion"></img>
              <p className="text_2">
                A continuación, encontrarás algunos de los proyectos en los que he
                trabajado. Te invito a explorarlos y ver cómo aplico mis
                habilidades para resolver desafíos.
              </p>
            </div>
          </div>
        </div>

        <div className="contenedor_presentacion">
          <div className="contenedor_proyecto_1">
            <div className="previsualizacion_proyecto">
              <div className="contenedor_img">
                <img
                  src={logica_conjuntos}
                  alt="error"
                  className="img_fondo"
                ></img>
                <div className="contenido_blur">
                  <a href="https://luisarguello1.github.io/logica-conjuntos/">
                    Lógica de conjuntos
                  </a>
                </div>
              </div>
              <div className="titulo_proyecto">
                <p>Lógica de conjuntos</p>
              </div>
            </div>

            <div className="informacion_proyecto">
              <div className="contenedor_informacion_proyecto">
                <div className="titulo_numero_proyect">
                  <p className="text-1">01</p>
                  <p className="titulo_text">
                    <img src={svg_tecnologia} alt="error"></img>
                    <strong>Tecnologías usadas</strong>
                  </p>
                  <p className="p_text">
                    <ul>
                      <li>- React</li>
                      <li>- JavaScript</li>
                      <li>- Html, Css</li>
                    </ul>
                  </p>
                </div>
                <div className="parrafo_text">
                  <p className="titulo_text">
                    <img src={svg_note} alt="error"></img>
                    <strong>Descripción</strong>
                  </p>
                  <p className="p_text">
                    Este proyecto es una herramienta interactiva diseñada para
                    realizar operaciones matemáticas con conjuntos. Permite
                    trabajar con intersección, complemento, unión, diferencia,
                    diferencia simétrica, y más, tanto para 2 como para 3
                    conjuntos. No solo proporciona los resultados de cada
                    operación, sino que también ofrece explicaciones detalladas
                    sobre los cálculos realizados. Además, genera diagramas de
                    Venn automáticamente, facilitando la visualización de las
                    relaciones entre los conjuntos. El proyecto incluye una
                    sección de teoría que proporciona contenido educativo sobre
                    los conceptos fundamentales de la teoría de conjuntos,
                    ayudando a los usuarios a comprender mejor los resultados
                    obtenidos.
                  </p>
                  <a href="https://luisarguello1.github.io/logica-conjuntos/" className="ruta_page">
                    <button className="bnt_page_direccion">Visitar Página</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contenedor_presentacion">
          <div className="contenedor_proyecto_1">
            <div className="previsualizacion_proyecto">
              <div className="contenedor_img">
                <img
                  src={detalles_arreglos}
                  alt="error"
                  className="img_fondo"
                ></img>
                <div className="contenido_blur">
                  <a href="https://luisarguello1.github.io/detalles_y_arreglos/">
                    Detalles y arreglos
                  </a>
                </div>
              </div>
              <div className="titulo_proyecto">
                <p>Detalles y arreglos</p>
              </div>
            </div>

            <div className="informacion_proyecto">
              <div className="contenedor_informacion_proyecto">
                <div className="titulo_numero_proyect">
                  <p className="text-1">02</p>
                  <p className="titulo_text">
                    <img src={svg_tecnologia} alt="error"></img>
                    <strong>Tecnologías usadas</strong>
                  </p>
                  <p className="p_text">
                    <ul>
                      <li>- Vite + React</li>
                      <li>- JavaScript</li>
                      <li>- Html, Css</li>
                    </ul>
                  </p>
                </div>
                <div className="parrafo_text">
                  <p className="titulo_text">
                    <img src={svg_note} alt="error"></img>
                    <strong>Descripción</strong>
                  </p>
                  <p className="p_text">
                    Este proyecto consiste en una página web diseñada para mostrar
                    y promocionar detalles y arreglos para ocasiones especiales
                    como el Día del Padre, Día de la Madre, cumpleaños, entre
                    otros. La plataforma presenta una interfaz visual atractiva y
                    fácil de usar, con una amplia gama de opciones para elegir
                    regalos personalizados y decoraciones.
                  </p>
                  <a href="https://luisarguello1.github.io/detalles_y_arreglos/" className="ruta_page">
                    <button className="bnt_page_direccion">Visitar Página</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contenedor_presentacion">
          <div className="contenedor_proyecto_1">
            <div className="previsualizacion_proyecto">
              <div className="contenedor_img">
                <img src={tienda_online} alt="error" className="img_fondo"></img>
                <div className="contenido_blur">
                  <a href="https://luisarguello1.github.io/tienda-online/">
                    Tienda - online
                  </a>
                </div>
              </div>
              <div className="titulo_proyecto">
                <p>Tienda - online</p>
              </div>
            </div>

            <div className="informacion_proyecto">
              <div className="contenedor_informacion_proyecto">
                <div className="titulo_numero_proyect">
                  <p className="text-1">03</p>
                  <p className="titulo_text">
                    <img src={svg_tecnologia} alt="error"></img>
                    <strong>Tecnologías usadas</strong>
                  </p>
                  <p className="p_text">
                    <ul>
                      <li>- React</li>
                      <li>- JavaScript</li>
                      <li>- Html, Css</li>
                    </ul>
                  </p>
                </div>
                <div className="parrafo_text">
                  <p className="titulo_text">
                    <img src={svg_note} alt="error"></img>
                    <strong>Descripción</strong>
                  </p>
                  <p className="p_text">
                    Este proyecto es una plataforma de tienda online que permite
                    la administración de productos y usuarios para la venta de
                    artículos. Los administradores pueden gestionar el inventario
                    de productos, actualizar precios, descripciones y agregar
                    nuevas opciones a la tienda de manera sencilla. Además, los
                    usuarios pueden crear cuentas, realizar compras y hacer
                    seguimiento de sus pedidos. La interfaz es intuitiva y está
                    diseñada para ofrecer una experiencia de usuario fluida, tanto
                    para compradores como para administradores.
                  </p>
                  <a href="https://luisarguello1.github.io/tienda-online/" className="ruta_page">
                    <button className="bnt_page_direccion">Visitar Página</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Proyectos;
