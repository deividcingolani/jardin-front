import React from "react";
import "./Garden.css"

export default function Garden() {
  return <div className="container">

  
      <h3 className="titulo">Requisitos de inscripcion</h3>
      <ul className="lista">
        <li>Direccion de correo elecftronico.</li>
        <li>Acta de nacimiento, original y copia.</li>
        <li>4 o 6 fotos de tamaño ionfantil de frente en colores blanco y negro o a color, segun la preferencia.</li>
        <li>Constancia de domicilio de solicitante.</li>
        <li>Original y copia del certificado medico con una vigencia inferior a tres meses emitido por cualquier centro medico. Este debe incluir grupo sanguineo.</li>
        <li>Original y copia de la cartilla nacional de vacunacion.</li>
        <li>Original y copia de la CURP o credencial de elector del representante.</li>
      </ul>

      <h3 className="titulo">¿Puedo visitar el jardín?</h3>
      <p>Ingresa a nuestro turnero, seleccioná la fecha y hora, confirma tu visita y nosotros encantados de recibirte.</p>

      <button className="boton">Turnero</button>
      
    </div>;
}
