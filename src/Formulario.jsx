import React, { useState, useEffect } from "react";

  const Formulario = () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [hobbie, setHobbie] = useState("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validar el primer input
      const idCaracteres = id.trim().length >= 3;
      const idEsapcios = id.indexOf(" ") === -1
  
      if (!idCaracteres || !idEsapcios) {
        alert("El ID debe tener al menos 3 caracteres y no debe contener espacios en blanco");
        return;
      }
        
      // Validar el segundo input
      const nombreCaracteres = nombre.trim().length >= 6;
 
  
      if (!nombreCaracteres) {
        alert("El Nombre debe tener al menos 6 caracteres");
        return;
      }
  
  
      // Capturar los datos del formulario
      
      const idCapturado = id;
      const nombreCapturado = nombre;  
      const hobbieCapturado = hobbie; 
     // Mostrar los datos capturados en pantalla
      alert(`Identificación: ${idCapturado} | Nombre: ${nombreCapturado} | Hobbie: ${hobbieCapturado}`);
    };


  return (
<form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Identificacion"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div><br></br></div>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div><br></br></div>
      <div>
        <input
          type="text"
          placeholder="Hobbie"
          value={hobbie}
          onChange={(e) => setHobbie(e.target.value)}
        />
      </div>
      <div><br></br></div>
      <button
        type="submit"
        style={{
          backgroundColor: "#008F39",
        }}
      >
        Enviar
      </button>
    </form>

    
  );
};

export default Formulario;
