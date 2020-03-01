import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("GraphQL Server Running"));

/** NO Schema Defined
 * 프로그래밍을 이해하기 위한 것도 아니고 Node.js나 DB를 위한 것도 아니다
 * 그냥 어떻게 데이터를 주거나 받거나 하는 것을 정의해놓은 것 Just DESCRIPE
 */


// /feed/
// /notification/
// /user/l/

// GraphQL언어로 DB에 Query를 보내면 over-fetching, under-fetching을 해결가능!
// Query {
//     feed{
//         comments
//         likeNumber
//     }
//     notification{
//         isRead
//     }
//     user{
//         userName
//         profilePic
//     }
// }

// JavaScript언어 Object를 딱 요청한 것만 정확하게 받을 수 있다.
// 원하는 방식으로 받도록 조정하거나 섞고 모양을 바꿔서 받을 수 있다.
// {
//     feed: [
//         comments:"~~",
//         likeNumber: 20
//     ],
//     notification: [
//         {
//             isRead: true;
//         },
//         {
//             isRead: false;
//         }
        
//     ]
// }