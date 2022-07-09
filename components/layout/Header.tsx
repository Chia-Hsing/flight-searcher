import { FC, memo } from 'react'
import Link from 'next/link'

const Header: FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default memo(Header)
