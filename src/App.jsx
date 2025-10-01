import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Editar } from "./pages/Editar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/user/edit/:id" element={<Editar />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </>
  );
}

export default App;
