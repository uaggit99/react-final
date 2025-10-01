import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function UserList() {
  const [ users, setUsers ] = useState([]);

  
  async function getUsuarios() {
    const respuesta = await fetch("http://localhost:8080/api/users");
    const datos = await respuesta.json();
    setUsers(datos);
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  async function deleteUser(id) {
    const confirmation = window.confirm(
      "¿Estás seguro de eliminar este usuario?"
    );
    if (confirmation) {
      const resp = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: "DELETE",
      });
      if (!resp.ok) {
        window.alert("Error en el proceso de Eliminacion");
      }
    }
    getUsuarios()
  }

  const style = "text-blue-800 font-serif m-2";
  const boton =
    "px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition mx-3 my-3 cursor-pointer";

  return (
    <>
      <main>
        <h1 className="text-blue-800 font-bold font-mono text-3xl  text-center m-4">
          LISTA DE CLIENTES
        </h1>

        <div className="flex flex-wrap flex-row">
          {users.map((usuario) => (
            <div
              key={usuario.id}
              className=" bg-sky-100 max-w-sm border-sky-500  border 2 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 m-3 w-[300px]"
            >
              <p className={style}>Nombre: {usuario.name}</p>
              <p className={style}>Email : {usuario.email}</p>
              

              <Link to={`/user/edit/${usuario.id}`}>
                <button className={boton}>Editar</button>
              </Link>
              <button
                className={boton}
                on
                onClick={() => deleteUser(usuario.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
