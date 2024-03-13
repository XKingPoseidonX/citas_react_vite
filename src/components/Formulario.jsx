import { useEffect, useState } from "react"
import Error from "./Error";


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    //Declaracion de variables
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    useEffect(() => {
        // console.log( Object.keys(paciente.length>0) );Esta es una forma de comprobar si un objeto tiene algo
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

        }
    }, [paciente])


    //Generacion de un KEY ALEATORIO para cada usuario
    const generarId = () => {
        //Esta línea genera una cadena aleatoria de 12 caracteres alfanuméricos.
        const random = Math.random().toString(36).substring(12)
        //Esta línea genera una cadena de texto que representa la fecha actual en base 36.
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        /**handleSubmit es una función que se utiliza para manejar el envío de un formulario en una aplicación
         web, permitiendo procesar y enviar los datos ingresados por el usuario. */

        e.preventDefault();
        /*preventDefault se utiliza en eventos de navegador para prevenir el comportamiento 
        predeterminado de un evento. */

        // Validacion de formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log("Hay al menos un campo vacío");
            setError(true)
            return;
        }
        setError(false)

        //Objeto de paciente

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if (paciente.id) {
            //Editando el registro
            objetoPaciente.id = paciente.id

            /**Usamos map() para iterar entre los pacientes existentes dentro del sistema. 
             * Si los id coinciden, se devuelve objetoPaciente, lo que significa que se reemplaza el objeto
             existente por el nuevo objeto. Si los id no coinciden, se devuelve el objeto paciente original
             sin cambios. */
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : paciente)

            setPacientes(pacientesActualizados)

            //Esta linea de codigo nos sirve para limpiar el state del paciente ya editado.
            setPaciente({})

        } else {
            //Creando un nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
        }


        //Reiniciar el FORM
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            {/*md es tamaño mediando y lg es tamaño grande*/}
            <h2 className="font-black text-3xl text-center">
                Seguimiento de pacientes</h2>

            <p className="text-xl mt-5 text-center mb-5">
                Añade pacientes y {''}
                <span className="text-indigo-700 font-bold mt-5">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block font-bold uppercase text-gray-700">
                        Nombre mascotas</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder=" Ingresa el nombre de tu mascota"
                        className="mt-2  w-full border-2 p-2 placeholder:text-gray-500 rounded-md
                        ring ring-blue-50 ring-offset-0"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />{/*w-full es para hacer el tamaño del input segun el tamaño del div*/}
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block font-bold uppercase text-gray-700">
                        Nombre propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder=" Ingresa el nombre del propietario"
                        className="mt-2  w-full border-2 p-2 placeholder:text-gray-500 rounded-md 
                        ring ring-blue-50 ring-offset-0"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />{/*w-full es para hacer el tamaño del input segun el tamaño del div*/}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block font-bold uppercase text-gray-700">
                        Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder=" Ingresa tu email"
                        className="mt-2  w-full border-2 p-2 placeholder:text-gray-500 rounded-md
                        ring ring-blue-50 ring-offset-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />{/*w-full es para hacer el tamaño del input segun el tamaño del div*/}
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block font-bold uppercase text-gray-700">
                        Alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="mt-2  w-full border-2 p-2 placeholder:text-gray-500 rounded-md
                        ring ring-blue-50 ring-offset-0"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />{/*w-full es para hacer el tamaño del input segun el tamaño del div*/}
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block font-bold uppercase text-gray-700">
                        Síntomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="mt-2  w-full border-2 p-2 placeholder:text-gray-500 rounded-md
                        ring ring-blue-50 ring-offset-0 resize-none"
                        value={sintomas}
                        /*Esto permite mantener el estado del input sincronizado con lo que el usuario está 
                        escribiendo en tiempo real.*/
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                
                <input
                    type="submit"
                    className="w-full text-white p-3 uppercase font-bold cursor-pointer  duration-300 hover:text-white 
                    transition-all active:transform active:translate-y-1
                    bg-gradient-to-r from-sky-600 to-indigo-700
                    hover:from-indigo-700 hover:to-sky-600"
                    value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                />{/*hover sirve para cambiar de color el boton cuando nos posemos sobre el*/}
            </form>
        </div>
    )
}

export default Formulario
