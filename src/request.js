const API_KEY="4d94b67b7f768f2bec661fcc4ed7078f"
const requests ={
  fetchTrending:`/treading/all/week?api_key=${API_KEY}&language=en-Us`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
} 
export default requests;