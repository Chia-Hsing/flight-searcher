import { FC } from 'react'
import { wrapper } from '../state/store'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
