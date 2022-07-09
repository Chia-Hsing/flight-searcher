import { FC, Fragment, ReactNode } from 'react'
import Header from './Header'

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main>{children}</main>
        </Fragment>
    )
}

export default Layout
