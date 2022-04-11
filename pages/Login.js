import React, {Component} from 'react';
import {Navigate, Redirect, Route, Switch} from "react-router-dom";
import {resolveHref} from "next/dist/shared/lib/router/router";
import Main from "./Main";
import redirect from 'nextjs-redirect'
import styles from '../styles/Home.module.css'

class Login extends Component {

    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            username:'',
            password:'',
            loggedIn
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
        const {username,password} = this.state
        if (username == "test" && password == "test"){
            localStorage.setItem("token", "login")
            this.setState({
                loggedIn: true
            })
        }
    }



    render() {
        if (this.state.loggedIn){
            const Redirect = redirect('/Main');
            return <Redirect />
        }
        else {

            return (
                <div className={styles.LoginForm}>
                    <h1 className={styles.LoginPageTitle}>Login</h1>
                    <form onSubmit={this.SubmitForm} className={styles.LoginInput}>
                        <input type="text" placeholder="username" name="username" value={this.state.username}
                               onChange={this.onChange} className={styles.LoginInputUser}/>
                        <br/>
                        <input type="text" placeholder="password" name="password" value={this.state.password}
                               onChange={this.onChange} className={styles.LoginInputPass}/>
                        <br/>
                        <input type="submit" className={styles.buttonSubmit}/>
                    </form>
                </div>
            );
        }
    }
}

export default Login;