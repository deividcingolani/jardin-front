import React from "react";
import "./Footer.css"
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaLocationArrow } from 'react-icons/fa';

export default function Footer() {

  return <div>

    <footer>
      <div class="footer-content">
        <h3>Burbujas de algodon</h3>
        <p>A pasitos cortitos llegamos al jardin para aprender, jugar, y sonreir con los chicos y las maestrasjuntos para compartir!</p>
        <ul class="redes">
          <li><a><FaFacebook /></a></li>
          <li><a><FaInstagramSquare /></a></li>
          <li><a><FaTwitterSquare /></a></li>
          <li><a><FaYoutubeSquare /></a></li>
        </ul>
      </div>
      <ul>
        <FaLocationArrow id="localizacion" />

        <span> Av San Martin s/n. Ciudad de Florentino Ameghino</span>
        <p>Telefono: 1130374277</p>
      </ul>
      <div class="footer-bottom">
        <p>copyright &copy;2022 Burbujas de algodon. Diseñado por <span>Manrique</span></p>

      </div>


    </footer>
  </div>;
}
