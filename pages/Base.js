import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Base() {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.NavBar}>
                    <img className={styles.Login_Logo} src="Logo.png" alt="Nyftflix logo" />
                    <a href="Login"><button className={styles.Connection_button}>
                        <span>S'identifier</span>
                    </button></a>
                </div>
                <div className={styles.Base_Text}>
                    <h1>Films, séries TV et bien plus en illimité.</h1>
                    <h3>Où que vous soyez. Annulez à tout moment.</h3>
                    <p>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
                </div>
            </div>

        </header>

    )
}
