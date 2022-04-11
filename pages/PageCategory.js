import Head from 'next/head'
import Row from "./Componant/Row";
import request from "./requests";
import Banner from "./Componant/Banner";
import NavBar from "./Componant/NavBar";
import redirect from "nextjs-redirect";
import React from 'react';
import styles from '../styles/Home.module.css'
import Category from "./Componant/Category";


export default function PageCategory({category, rype}) {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");

        if (token !== "login") {
            const Redirect = redirect('/Base');
            return <Redirect/>
        }

        const data = window.location.search;
        const data2 = data.substr(1);


        if (data2 === "fetchAction") {
            category = request.fetchAction;
        }
        if (data2 === "fetchComedy") {
            category = request.fetchComedy;
        }
        if (data2 === "fetchHorror") {
            category = request.fetchHorror;
        }
        if (data2 === "fetchDocument") {
            category = request.fetchDocument;
        }
        if (data2 === "fetchRomance") {
            category = request.fetchRomance;
        }
        }

    return (
        <div>
            <NavBar/>
            <div className={styles.PageCategory}>
                <Head>
                    <title>NyftFlix</title>
                    <meta name="description" content="New Best Platform NyftFlix"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Category title="Category" fetchUrl= {category}/>
            </div>
        </div>
    );



    }



