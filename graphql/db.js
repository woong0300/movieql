//import fetch from "node-fetch"; fetch대신에 axios로 대체
import axios from "axios";

const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

//기존의 영화 리스트를 axios로 구현
export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

//영화 1개를 골라 자세한 정보를 가져오는 것을 구현
export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

//Suggesting 페이지를 가져오는 것을 구현.
export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
// 직접 DB를 만들어서 해보는 예시
// let movies = [
//     {
//         id: 0,
//         name: "Star Wars",
//         score: 7
//     },
//     {
//         id: 1,
//         name: "Ford V Ferrari",
//         score: 10
//     },
//     {
//         id: 2,
//         name: "Metrix",
//         score: 10
//     },
//     {
//         id: 3,
//         name: "Lord of Ring",
//         score: 9
//     }

// ];

// export const getMovies = () => movies

// export const getByID = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if(movies.length > cleanedMovies.length){
//         movies = cleanedMovies;
//         return true;
//     } else {
//         return false;
//     }
// };

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: `${movies.length +1}`,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// };
