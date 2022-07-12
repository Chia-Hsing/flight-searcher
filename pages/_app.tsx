import { FC } from 'react'
import { store } from '../state'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Layout from '../components/layout/Layout'
import '../styles/globals.scss'

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL_LOCAL,
    cache: new InMemoryCache(),
})

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <Head>
                    <title>Flight Search</title>
                    <meta name="description" content="NextJS Events" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </ApolloProvider>
    )
}

export default MyApp
