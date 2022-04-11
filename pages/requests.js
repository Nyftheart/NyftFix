const API_KEY = "b79aa44c39879b5201fbbbd264baedce";

const request = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchNyftFlix : `/discover/movie?api_key=${API_KEY}&with_network=213&language=fr-FR`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchAction : `/discover/movie?api_key=${API_KEY}&with_genres=28&language=fr-FR`,
    fetchComedy : `/discover/movie?api_key=${API_KEY}&with_genres=35&language=fr-FR`,
    fetchHorror : `/discover/movie?api_key=${API_KEY}&with_genres=27&language=fr-FR`,
    fetchRomance : `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=fr-FR`,
    fetchDocument : `/discover/movie?api_key=${API_KEY}&with_genres=99&language=fr-FR`,
    fetchRecherche: `search/movie?api_key=${API_KEY}&query=`

}

export default request;