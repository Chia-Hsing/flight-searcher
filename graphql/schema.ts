import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
    type Query {
        flights: [Flight!]!
        cities: [City!]!
        airports: [Airport!]!
    }

    type Flight {
        name: Sting!
    }

    type City {
        city_name: String!
        iata_code: String!
        latitude: String!
        longitude: String!
        timezone: String!
        airports: [Airport!]!
    }

    type Airport {
        name: String!
        iata_code: String!
        latitude: String!
        longitude: String!
        timezone: String!
    }
`

//flight_status
//arr_scheduled_time_arr
//arr_scheduled_time_dep
//limit
//offset
//dep_iata
//arr_iata
