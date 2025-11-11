import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    autor: ""
  });
  
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit() {
    console.log("Enviando el formulario con el libro:", formData);
  }
  return (
    <>
      <div className="App">
        <h1>Biblioteca</h1>
        <form action="">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingrese nombre libro"
        />
        <input type="text"
        name="autor"
        value={formData.autor}
        onChange={handleChange}
        placeholder="Ingrese autor libro" />

        <p>{formData.nombre}</p>
        <p>{formData.autor}</p>
        <button type="button"
        onClick={handleSubmit}>Guardar</button>
      </form>
      </div>
    </>
  );
}

export default App;
