import React, {Component} from 'react';
import {Navigate, Redirect, Route, Switch} from "react-router-dom";
import {resolveHref} from "next/dist/shared/lib/router/router";
import Main from "./Main";
import redirect from 'nextjs-redirect'
import styles from '../styles/Home.module.css'
import Category from "./Componant/Category";
import NavBar from "./Componant/NavBar";

class Recherche extends Component {


    constructor(props) {
        super(props);
        let recherche = false
        this.state = {
            username:'',
            recherche
        }

        this.onChange=this.onChange.bind(this)
        this.SubmitForm=this.SubmitForm.bind(this)

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    SubmitForm(e){
        e.preventDefault()
        const {username} = this.state
            localStorage.setItem("recherche", username);
            this.setState({
                recherche: true
            })
        }



    render() {

        let reche = "sonic"
        if (typeof window !== "undefined") {
            reche = localStorage.getItem("recherche");
        }
        return (

            <div >

                <NavBar />
                <div className={styles.result}>
                <form onSubmit={this.SubmitForm}  className={styles.rechercheBar}>
                    <input type="text" placeholder="Film?" name="username" value={this.state.username}
                           onChange={this.onChange} className={styles.InputRecherche}/>
                    <br/>
                    <input type="submit" className={styles.RechercheSubmit}/>
                </form>
                { reche ? (
                <Category title="Category" fetchUrl= {`search/movie?api_key=b79aa44c39879b5201fbbbd264baedce&query=${reche}`}/>
                    ):(
                        <p></p>
                    )}
                </div>
            </div>
        );

    }

}

export default Recherche;