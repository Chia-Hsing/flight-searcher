import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
    type Query {
        flights: [Flight!]!
        locations(keyword: String!): [Location!]!
    }

    type Flight {
        name: String!
    }

    type Location {
        type: String!
        subType: String!
        name: String!
        detailedName: String!
        id: ID!
        self: Self
        iataCode: String!
        address: Address
    }

    type Airport {
        type: String!
        subType: String!
        name: String!
        detailedName: String!
        id: ID!
        self: Self
        timeZoneOffset: String!
        iataCode: String!
        address: Address
    }

    type Self {
        href: String!
        methods: [String]
    }

    type Address {
        cityName: String
        cityCode: String
        countryName: String
        countryCode: String
        regionCode: String
    }
`
