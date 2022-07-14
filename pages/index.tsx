import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import DebounceSelect from '../components/DebounceSelect'

interface LocationValue {
    label: string
    value: string
}

const Main: NextPage = () => {
    const [value, setValue] = useState<LocationValue[]>([])

    return (
        <div>
            <Head>
                <title>Flight Search</title>
                <meta name="description" content="" />
            </Head>
            <main>
                <DebounceSelect
                    showSearch
                    value={value}
                    placeholder="Select Departure"
                    onChange={(newValue) => {
                        setValue(newValue as LocationValue[])
                    }}
                    style={{ width: '30%' }}
                />
            </main>
        </div>
    )
}

export default Main

export async function getStaticProps() {
    return {
        props: {
            // name: data.name,
        },
    }
}
