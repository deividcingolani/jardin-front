import React from "react";
import "./Footer.css"
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaLocationArrow } from 'react-icons/fa';
import {Link} from "react-router-dom"

export default function Footer() {

  return <div>

    <footer>
      <div className="footer-content">
        <h3>Burbujas de algodon</h3>
        <p>A pasitos cortitos llegamos al jardin para aprender, jugar, y sonreir con los chicos y las maestrasjuntos para compartir!</p>
        <ul className="redes">
          <li><Link to=""><FaFacebook /></Link></li>
          <li><Link to=""><FaInstagramSquare /></Link></li>
          <li><Link to=""><FaTwitterSquare /></Link></li>
          <li><Link to=""><FaYoutubeSquare /></Link></li>
        </ul>
      </div>
      <ul>
        <FaLocationArrow id="localizacion" />

        <span> Av San Martin s/n. Ciudad de Florentino Ameghino</span>
        <p>Telefono: 1130374277</p>
      </ul>
      <div className="footer-bottom">
        <p>copyright &copy;2022 Burbujas de algodon. Diseñado por <span>Manrique</span></p>
      </div>


    </footer>
  </div>;
}
