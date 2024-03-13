import Swal from 'sweetalert2'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    //Se realiza destructuring
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        // const respuesta = confirm('¿Deseas eliminar este paciente?');

        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás recuperarlo!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#8B9495",
            confirmButtonText: "Eliminar",
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
            }
        });
        // if (respuesta) {
        //     eliminarPaciente(id)
        // }
    }
    return (
        <div className='mx-5 my-5 bg-white rounded-xl shadow-md px-5 py-10  '>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
                <span className='font-normal normal-case'>{nombre} </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'> Síntomas: {''}
                <span className='font-normal normal-case text-justify'>{sintomas}</span>
            </p>

            <div className=" flex justify-between md:flex-col lg:flex-row gap-1  mt-5 ">
                <button
                    type="button"
                    className="py-2 px-10 text-center font-bold text-white uppercase rounded-lg w-full lg:w-1/2 
                    cursor-pointer transition-colors duration-300 hover:text-white
                    bg-gradient-to-r from-sky-600 to-indigo-700
                    hover:from-indigo-700 hover:to-sky-600"
                    onClick={() => setPaciente(paciente)}
                /*Usamos un OnClick con un arrow function para esperar que suceda el click
                y con el arrow function mandamos llamar la funcion de () => setPaciente(paciente)}
                con el objeto de paciente que es donde se almacena toda la informacion del mismo*/
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 text-center font-bold text-white uppercase rounded-lg w-full lg:w-1/2
                    cursor-pointer transition-colors duration-300 hover:text-white
                    bg-gradient-to-r from-flamingo-700 to-flamingo-900
                    hover:from-flamingo-900 hover:to-flamingo-700"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
