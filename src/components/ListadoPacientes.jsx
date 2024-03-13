
import Paciente from "./Paciente"


const ListadoPacientes = ({ pacientes, setPaciente, paciente, eliminarPaciente }) => {

    //lg:h-3/5

    return (

        <div className="md:w-1/2  md:h-screen overflow-y-scroll h-screen">

            {pacientes && pacientes.length ? (
                <>
                    {/*md: es una clase utilitaria que se utiliza para aplicar estilos específicos a un determinado 
            tamaño de pantalla. En este caso, md: se refiere a pantallas de tamaño mediano. */}
                    <h2 className="font-black text-3xl text-center">
                        Listado de pacientes </h2>

                    <p className="text-xl text-center mt-5">
                        Administra tus  {''}
                        <span className="text-indigo-700 font-bold">Pacientes y citas</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            id={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center ">
                        No hay pacientes </h2>

                    <p className="text-xl text-center mb-3 mt-5">
                        Comienza agregando pacientes  {''}
                        <span className="text-indigo-600 font-bold ">y aparecerán aquí</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
