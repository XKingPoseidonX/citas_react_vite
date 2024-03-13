import { useState, useEffect } from "react"



// const Error = ({mensaje}) => {
//     return (
//         <div className="bg-red-800 font-bold uppercase text-white text-center rounded-md
//                     mb-3 p-3">
//             <p>{mensaje} </p>
//         </div>
//     )
//     {/*Esto quiere decir: Si error es True, entonces imprime el mensaje*/ }
// }

/*Esta forma es usando la palabra reservada de React "CHILDREN"
Es un componente especial que permite a otros componentes renderizar elementos hijos dentro de ellos.
Esto es útil cuando se desea crear componentes reutilizables que puedan aceptar y renderizar diferentes
elementos hijos. */

const Error = ({ children }) => {
    return (
        <div className="bg-red-800 font-bold uppercase text-white text-center rounded-md
                    mb-3 p-3">
            {children}
        </div>
    )
    {/*Esto quiere decir: Si error es True, entonces imprime el mensaje*/ }
}
export default Error
