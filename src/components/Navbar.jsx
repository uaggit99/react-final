import { Link } from "react-router-dom";
import logo from "../assets/react.svg"

export function Navbar() {
  const estilo = "font-mono font-bold text-white text-lg hover:text-blue-800 cursor-pointer";
  return (
    <>
      <header>
        <nav className=" bg-gradient-to-r from-blue-400 to-purple-300 p-6 text-white  flex flex-row justify-start gap-5 m-3 border rounded-2xl">
          <img src={logo} alt="logo react" />

          
          <Link to="/"  className={estilo}> Home</Link>
          <Link to="/user/edit/:id"  className={estilo}> Editar</Link>        
          
        </nav>
      </header>
    </>
  );
}
