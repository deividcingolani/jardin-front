
import "./Contact.css"


import React from "react";

export default function Contact() {
  return (
    <div>
      <h3 className="tituloContac">Contacto</h3>

      <form className="formulario">
        <input type="text" placeholder="Nombre"></input><br/>
        <input type="text" placeholder="Mail"></input><br/>
        <textarea className="imputMensaje" type="text" placeholder="Mensaje"></textarea>
      </form>
    </div>
  );
}
