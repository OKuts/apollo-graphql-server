const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        tracksForHome: [Track!]!
        track(id: ID!): Track  
    }
    
    type Mutation {
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        code: Int!
        success: Boolean!
        message: String!
        track: Track
    }

    type Module {
        id: ID!
        title: String!
        length: Int
    }
    
    type Track {
        id: ID!
        title: String!
        thumbnail: String 
        length: Int   
        modulesCount: Int
        description: String
        numberOfViews: Int
        author: Author!
        modules: [Module!]!
    }


    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;
