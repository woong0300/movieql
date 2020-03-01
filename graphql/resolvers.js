import { getMovies, getByID, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating)
  }
  // Mutation: {
  //     addMovie: (_, {name, score}) => addMovie(name, score),
  //     deleteMovie: (_,{id}) => deleteMovie(id)
  //     //GraphQL Resolver는 GraphQl서버의 요청을 받으며, 서버가 Query나
  //     //Mutation의 정의를 발견하면 Resolver로 와서 함수를 실행한다.
  //     //여기서 argumemt를 쓸 수 있다.
  //     //처음꺼는 현재 object를 보내는 거라 당장은 필요없다.
  // }
};

export default resolvers;
