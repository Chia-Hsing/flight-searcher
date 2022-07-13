import type { NextPage } from 'next'
import Head from 'next/head'
import { gql, useLazyQuery } from '@apollo/client'
// import { client } from './_app'
// import axios from 'axios'

const QUERY = gql`
    query Query {
        name
    }
`

const Main: NextPage = () => {
    // const [, { error, loading, data }] = useLazyQuery(QUERY)

    return (
        <div>
            <Head>
                <title>Flight Search</title>
                <meta name="description" content="" />
            </Head>
            <main></main>
        </div>
    )
}

export default Main

export async function getServerSideProps() {
    // const { data } = await client.query({
    //     query: gql`
    //         query Query {
    //             name
    //         }
    //     `,
    // })

    return {
        props: {
            // name: data.name,
        },
    }
}
