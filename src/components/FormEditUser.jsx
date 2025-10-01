import { useState } from "react";
import { useEffect } from "react";

export function FormEditUser({ id }) {
  const [users, setUsers] = useState([]);

  async function getUsuarios() {
    const respuesta = await fetch("http://localhost:8080/api/users");
    const datos = await respuesta.json();
    setUsers(datos);
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  const user = users.find((usuario) => usuario.id === id);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;




  async function crearUsuario(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const validar = regex.test(email);

    if (!validar) {
      window.alert(" !Formato correo No valido !");
      return;
    }
    if(!regexpass.test(password)){
      window-alert("formato pasword NO valido")
    }

    const resp = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    if(!resp.ok){
      window.alert("Error en el proceso de creacion")

    }
  }
  async function editarUsuario(e){
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    
    if(!regex.test(email)){
      window.alert(" !Formato correo no valido");
      return;    }

    if(!regexpass.test(password)){
      window-alert("formato pasword NO valido")
    }

    const resp = await fetch(`http://localhost:8080/api/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    if(!resp.ok){
      window.alert("Error en el proceso de Actualizacion")

    }

  }

  const etiqueta = "text-blue-700 py-3 px-2 w-[70px]";
  const entrada =
    " bg-blue-100 text-gray-600  py-2 px-4 border border-gray-200 rounded-md m-3";
  const boton =
    "px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition mx-3 my-3 cursor-pointer";

  return (
    <>
      <main>
        <div className=" flex  flex-col items-center  justify-center h-auto  p-5">
          <h2 className="text-blue-800 font-bold font-mono text-3xl  text-center m-4">
            FORMULARIO USUARIO
          </h2>
          <form
            action="GET"
            className="bg-blue-100 p-6 rounded shadow-sky-600 shadow-lg w-full max-w-md"
          >
            <label className={etiqueta} htmlFor="nombre">
              Nombre{" "}
            </label>
            <input
              className={entrada}
              type="text"
              id="nombre"
              placeholder="Ingrese su nombre"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <b></b>
            <br></br>
            <label className={etiqueta} htmlFor="correo">
              Email{" "}
            </label>
            <input
              className={entrada}
              type="email"
              id="correo"
              placeholder="Ingrese su Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <b></b>
            <br></br>
            <label className={etiqueta} htmlFor="password">
              Password
            </label>
            <input
              className={entrada}
              type="password"
              id="ciudad"
              placeholder="Ingrese ciudad"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <b></b>
            <br></br>
            <button onClick={crearUsuario} className={boton}>
              Crear
            </button>
            <button onClick={editarUsuario} className={boton}>
              Guardar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
