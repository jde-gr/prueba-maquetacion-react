import React, { FC } from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <ul className={styles.navBar}>
    <li>Inicio</li>
    <li>Nuestro modelo</li>
    <li>Tecnologías</li>
    <li>Casos de éxito</li>
    <li>¿Cómo lo hacemos?</li>
    <li>¿Quiénes somos?</li>
    <li>ENG</li>
  </ul>
);

export default NavBar;
