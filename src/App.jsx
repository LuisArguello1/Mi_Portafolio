import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Inicio from "./Components/Inicio";
import Proyectos from "./Components/Proyectos";
import Educacion from "./Components/Educacion";
import Informacion from "./Components/Informacion";

import rotateCell from "/Img/rotateCell.gif"

function App() {
  const [renderPage, setRenderPage] = useState("Inicio");

  const pages = {
    Inicio: <Inicio setRenderPage={setRenderPage}></Inicio>,
    Proyectos: <Proyectos></Proyectos>,
    Educacion: <Educacion></Educacion>,
    Informacion: <Informacion></Informacion>,
  };

  return (
    <div className="contenedor_principal_app">
      <Navbar setRenderPage={setRenderPage}></Navbar>
      {pages[renderPage]}
      <div className="rotated-warning">
        <img src={rotateCell} alt="rotateCell" className="rotateCell"></img>
        <p className="text-warning">
          Por favor, gire su dispositivo a la orientación vertical para una
          mejor experiencia.
        </p>
      </div>
    </div>
  );
}

export default App;
