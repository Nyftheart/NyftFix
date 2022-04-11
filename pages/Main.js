import Head from 'next/head'
import Row from "./Componant/Row";
import request from "./requests";
import Banner from "./Componant/Banner";
import NavBar from "./Componant/NavBar";
import redirect from "nextjs-redirect";
import React from 'react';


export default function Main() {
    if (typeof window !== "undefined") {

        const token = localStorage.getItem("token");
        localStorage.setItem("recherche", "all");

    if ( token !== "login") {
        const Redirect = redirect('/Base');
        return <Redirect />
    }
    }
        return (
            <div>
                <Head>
                    <title>NyftFlix</title>
                    <meta name="description" content="New Best Platform NyftFlix"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <NavBar></NavBar>
                <Banner></Banner>
                <Row title="NyftFlix Original" fetchUrl={request.fetchNyftFlix}/>
                <Row title="Top Films" fetchUrl={request.fetchTopRated}/>
                <Row title="Action" fetchUrl={request.fetchAction}/>
                <Row title="Commédie" fetchUrl={request.fetchComedy}/>
                <Row title="Horror" fetchUrl={request.fetchHorror}/>
                <Row title="Romance" fetchUrl={request.fetchRomance}/>
                <Row title="Documentaire" fetchUrl={request.fetchDocument}/>
            </div>
        )
    }



