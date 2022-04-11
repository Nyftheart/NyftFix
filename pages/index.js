import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Row from "./Componant/Row";
import request from "./requests";
import Banner from "./Componant/Banner";
import NavBar from "./Componant/NavBar";
import Main from "./Main";
import {Link} from "react-router-dom";
import Base from "./Base";


export default function Home() {
  return (
    <div>
        <Base />
    </div>
  )
}
