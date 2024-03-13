import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {

  //Utilizar rafce para autocompletar 
  //useEffect es un CALLBACK, por lo tanto siempre  se usara junto con arrow function
  //El orden en el que se definan los useEffect es tambien su orden de ejecucion
  // ?? nullish coalecent operator - Sirve para decir si es diferente a null 

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Desarrollo de LocalStorage
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
      if (pacientesLS) {
        setPacientes(pacientesLS)
      } 
    }
    obtenerLS()
  }, []) 


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
    // console.log("El valor ha cambiado");
    console.log(pacientes);

  }, [pacientes])



  const eliminarPaciente = (id) => {
    //Se filtran los datos de los pacientes y vamos a buscar los ID que sean diferentes al ID que estamos pasando.
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-10 mt-10 mb-15">

      <Header />
      <div className="pl-20 mt-10 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          //Sintaxis = nombreDeVariable = {nombre del prop}
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
