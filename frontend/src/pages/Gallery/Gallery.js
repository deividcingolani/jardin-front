import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { motion } from "framer-motion";

import photoLeft from "../../assets/photoGarden/photoLeft.png";
import photoCenter from "../../assets/photoGarden/photoCenter.png";
import photoRight from "../../assets/photoGarden/photoRight.png";

import ACTIVIDADES from "../../assets/photoGarden/ACTIVIDADES.png";
import Propuesta from "../../assets/photoGarden/Propuesta.png";

import { mockImages } from "./imagesSlider";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Gallery() {
  const [modalLeft, setModalLeft] = useState(false);
  const [modalCenter, setModalCenter] = useState(false);
  const [modalRight, setModalRight] = useState(false);

  const [imageActual, setImageActual] = useState(0);
  const quantity = mockImages?.length;

  const nextImage = () => {
    setImageActual(imageActual === quantity - 1 ? 0 : imageActual + 1);
  };

  const previousImage = () => {
    setImageActual(imageActual === 0 ? quantity - 1 : imageActual - 1);
  };

  const openModalLeft = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };

  const openModalRight = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section className={styles.gallery}>
        <div className={styles.wrapper}>
          <div className={styles.cards}>
            <div className={styles.containerText}>
              <h3 className={styles.title}>Experiencias</h3>
              <button
                className={styles.btn}
                onClick={() => setModalLeft(!modalLeft)}
              >
                VER MÁS
              </button>
            </div>
            <div className={styles.gradient}></div>
            <img src={photoLeft} alt={"imageCard"} />
          </div>

          <div className={styles.cards}>
            <div className={styles.containerText}>
              <h3 className={styles.title}>Nuestros espacios</h3>
              <button
                className={styles.btn}
                onClick={() => setModalCenter(!modalCenter)}
              >
                VER MÁS
              </button>
            </div>
            <div className={styles.gradient}></div>
            <img src={photoCenter} alt={"imageCard"} />
          </div>

          <div className={styles.cards}>
            <div className={styles.containerText}>
              <h3 className={styles.title}>Propuesta educativa</h3>
              <button
                className={styles.btn}
                onClick={() => setModalRight(!modalRight)}
              >
                VER MÁS
              </button>
            </div>
            <div className={styles.gradient}></div>
            <img src={photoRight} alt={"imageCard"} />
          </div>
        </div>
      </section>

      {Boolean(modalLeft) ? (
        <article className={styles.bgDark}>
          <motion.div
            className={styles.modalLeft}
            variants={openModalLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <button
              className={styles.btnBack}
              onClick={() => setModalLeft(!modalLeft)}
            >
              VOLVER
            </button>
            <img src={ACTIVIDADES} alt={"imageModal"} />
            <div className={styles.containerTextModalLeft}>
              <h4 className={styles.titleModalLeft}>Experiencias</h4>
              <ul className={styles.ulModalLeft}>
                <li className={styles.liModalLeft}>
                  Actividades organizadas por áreas: Esa sección posee un índice
                  de actividades por áreas por ejemplo: matermáticas,
                  lectoescritura, ciencias, esperimentos científicos, música,
                  plástica...
                </li>
                <li className={styles.liModalLeft}>
                  Manualidades: En esta sección podrás encontrar muchas ideas
                  para hacer manualidades, regalitos, presentes, objetos útiles,
                  aplicando diferentes técnicas simples y combinándolas entre
                  sí. Recuerdos para navidad…
                </li>
                <li className={styles.liModalLeft}>
                  Dibujos y frisos: Dibujos para utilizar en la carpeta, frisos
                  o carteleras, en blanco, negro y a color, listos para
                  imprimir…
                </li>
                <li className={styles.liModalLeft}>
                  Frases y poesías: Para ser utilizadas en diferentes ocasiones,
                  actos escolares, presentes, festividades…
                </li>
                <li className={styles.liModalLeft}>
                  Humor: Para disfrutar de un recreo entretenido, chistes y
                  humor con situaciones de la vida cotidiana y escolar…
                </li>
                <li className={styles.liModalLeft}>
                  Administrativos: Fichas de datos y entrevistas, diagnósticos
                  socioeconómicos, evaluación, test y diagnósticos, tarjetas…
                </li>
                <li className={styles.liModalLeft}>
                  Material didáctico: Uso de los materiales, que áreas se
                  trabajan con material didáctico, ideas, rompecabezas, dominó,
                  loterías, tarjetas…
                </li>
                <li className={styles.liModalLeft}>
                  Actividades gráficas: Fichas de actividades para trabajar en
                  diferentes áreas listas para imprimir, actividades en
                  castellano y en inglés…
                </li>
              </ul>
            </div>
          </motion.div>
        </article>
      ) : null}

      {Boolean(modalRight) ? (
        <article className={styles.bgDark}>
          <motion.div
            className={styles.modalLeft}
            variants={openModalRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <button
              className={styles.btnBack}
              onClick={() => setModalRight(!modalRight)}
            >
              VOLVER
            </button>
            <img src={Propuesta} alt={"imageModal"} />
            <div className={styles.containerTextModalLeft}>
              <h4 className={styles.titleModalLeft}>Propuesta educativa</h4>
              <ul className={styles.ulModalLeft}>
                <li className={styles.liModalLeft}>
                  Incentivar el proceso de estructuración del pensamiento, de la
                  imaginación creadora, las formas de expresión personal y de
                  comunicación verbal y gráfica.
                </li>

                <li className={styles.liModalLeft}>
                  Favorecer el proceso de maduración en el niño/a en lo
                  sensorio-motor, la manifestación lúdica y estética, la
                  iniciación deportiva y artística, el crecimiento socio
                  afectivo, y los valores éticos.
                </li>

                <li className={styles.liModalLeft}>
                  Estimular hábitos de integración social, de convivencia
                  grupal, de solidaridad y cooperación y de conservación del
                  medio ambiente.
                </li>

                <li className={styles.liModalLeft}>
                  Fortalecer la vinculación entre la institución educativa y la
                  familia.
                </li>

                <li className={styles.liModalLeft}>
                  Prevenir y atender las desigualdades físicas, psíquicas y
                  sociales originadas en diferencias de orden biológico,
                  nutricional, familiar y ambiental mediante programas
                  especiales y acciones articuladas con otras instituciones
                  comunitarias.
                </li>
              </ul>
            </div>
          </motion.div>
        </article>
      ) : null}

      {Boolean(modalCenter) ? (
        <article className={styles.bgDark}>
          <motion.div
            className={styles.modalCenter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className={styles.btnBack}
              onClick={() => setModalCenter(!modalCenter)}
            >
              VOLVER
            </button>
            <button
              className={styles.btnSlider}
              onClick={() => previousImage()}
            >
              <FaChevronLeft className={styles.btnArrow} />
            </button>
            {mockImages.map((img, index) => (
              <>
                <div
                  className={
                    imageActual === index
                      ? `${styles.slider} ${styles.active}`
                      : styles.slider
                  }
                >
                  {imageActual === index && (
                    <img
                      key={index}
                      src={img.img}
                      alt={"imageSlider"}
                      className={styles.imgSlider}
                    />
                  )}
                </div>
              </>
            ))}
            <button className={styles.btnSlider} onClick={() => nextImage()}>
              <FaChevronRight className={styles.btnArrow} />
            </button>
          </motion.div>
        </article>
      ) : null}
    </>
  );
}
