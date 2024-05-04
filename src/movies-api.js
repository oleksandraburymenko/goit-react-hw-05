import axios from "axios";

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2EyNzg1ZGMyOThhY2I1MjlmNGUzYTE5OWU5NjkyZSIsInN1YiI6IjY2MzY4MTdhNDcwZWFkMDEyMjEyNWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MFB1qTHSxAx4IM7S3ZML1UGIoa479SVlaT23ZsgH--0";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/week`);
  return response.data.results;
};

export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?language=en-US`);
    return response.data;
  };
  
  export const getMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?language=en-US`);
    return response.data.cast;
  };
  
  export const getMovieReviews = async (movieId) => {
    const response = await axios.get(
      `/movie/${movieId}/reviews?language=en-US&page=1`
    );
    return response.data.results;
  };

  export const getMovies = async (searchQuery) => {
    const response = await axios.get(
      `/search/movie?include_adult=false&language=en-US&page=1/`,
      {
        params: {
          query: searchQuery,
        },
      }
    );
    return response.data.results;
  };