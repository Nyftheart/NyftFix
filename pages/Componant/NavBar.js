import React, {useEffect, useState, Component} from 'react'
const base_url = "https://image.tmdb.org/t/p/original/";
import styles from '../../styles/Home.module.css'
import axios from "../axios";
import requests from "../requests";
import "../../public/Logo.png"
import "../../public/Avatar.png"
function NavBar(){



    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                handleShow(true);
            } else handleShow(false)
        });
        return() => {

        };
    }, [])

    return(
        <div className={`${styles.NavBar} ${show && styles.NavBar_Show}` }>
            <img className={styles.Nav_Logo} src="Logo.png" alt="Nyftflix logo" href="Main"/>
            <div className={styles.Nav_Categories}>
                <a  className={styles.Nav_Categorie} href="/Main" ><span>Home</span></a>
                <a  className={styles.Nav_Categorie} href="/PageCategory?fetchAction"><span>Action</span></a>
                <a  className={styles.Nav_Categorie} href="/PageCategory?fetchComedy"><span>Comedy</span></a>
                <a  className={styles.Nav_Categorie} href="/PageCategory?fetchHorror"><span>Horror</span></a>
                <a  className={styles.Nav_Categorie} href="/PageCategory?fetchRomance"><span>Romance</span></a>
                <a  className={styles.Nav_Categorie} href="/PageCategory?fetchDocument"><span>Documentaire</span></a>
                <a  className={styles.Nav_Categorie} href="/FavPage"><span>Ma Liste</span></a>
                <a  className={styles.Nav_Categorie} href="/PageRecherche"><span>Recherche</span></a>
            </div>
            <img className={styles.Nav_Avatar} src="Avatar.png" alt="Avatar logo" />
        </div>

    )
}

export default NavBar