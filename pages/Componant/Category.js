import React, {useEffect, useState} from 'react'
import axios from "../axios";
const base_url = "https://image.tmdb.org/t/p/original/";
import styles from '../../styles/Home.module.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Category({title, fetchUrl}){

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    function add(list) {
        localStorage.setItem('Fav', JSON.stringify(list));
    }
    function getList() {
        return JSON.parse(localStorage.getItem('Fav'));
    }

    // const opts = {
    //     height: "390",
    //     width: "100%",
    //     playerVars:{
    //         autoPlay:1,
    //     },
    // };

    // const handleClick = (movies) => {
    //     if (trailerUrl) {
    //         setTrailerUrl("");
    //     } else {
    //         movieTrailer(movies?.name || "")
    //             .then((url) => {
    //                 const urlParams = new URLSearchParams(new URL(url).search);
    //                 setTrailerUrl(urlParams.get("v"));
    //             }).catch(err => console.log(err));
    //     }
    // };

    console.log(movies);

    return(
        <div className={styles.Category}>
            <h2 className={styles.row_Title}>{title}</h2>

            <div className={styles.Category_Conteneurs}>
                {movies.map(movies => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.Category_divimage}>
                        <img key={movies.id} /*onClick={() => handleClick(movies)}*/ className={styles.Category_images} src={`${base_url}${movies.backdrop_path}`} alt={movies.name} />
                        <button className={styles.littleButtons1}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path
                                    d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>
                        <button className={styles.littleButtons2}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                      fill="currentColor"></path>
                            </svg>
                        </button>
                        <button className={styles.littleButtons3} onClick={() => {
                            const newList = [...getList(), movies];
                            add(newList);
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>

                ))}
                <div className={styles.LittleButtons}>

                </div>
            </div>

            {/*{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}*/}
        </div>
    )
}

export default Category