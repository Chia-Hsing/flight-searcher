import { FC } from 'react'
import { store } from '../state'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import Layout from '../components/layout/Layout'
import '../styles/globals.scss'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
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
    )
}

export default MyApp
