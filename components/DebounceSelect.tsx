import { Select, Spin } from 'antd'
import type { SelectProps } from 'antd/es/select'
import React, { useMemo, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'

const SEARCH_LOCATION = gql`
    query ($keyword: String!) {
        locations(keyword: $keyword) {
            id
            subType
            detailedName
        }
    }
`

export interface DebounceSelectProps<V = any> extends Omit<SelectProps<V | V[]>, 'options' | 'children'> {
    debounceTimeout?: number
}

const debounce = (callback: (value: string) => void, time = 450) => {
    let timer: number

    return function (value: string) {
        window.clearTimeout(timer)
        timer = window.setTimeout(() => callback(value), time)
    }
}

const DebounceSelect = <V extends { key?: string; label: React.ReactNode; value: string | number } = any>({
    debounceTimeout = 800,
    ...props
}: DebounceSelectProps<V>) => {
    const [fetching, setFetching] = useState(false)
    const [options, setOptions] = useState<V[]>([])

    const [fetchLocation, { loading, data }] = useLazyQuery(SEARCH_LOCATION)

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value: string) => {
            setOptions([])
            setFetching(true)
            fetchLocation({ variables: { keyword: value } })
        }

        if (data) {
            const results = data.locations.map((location: any) => ({
                key: location.id,
                label: `${location.subType} | ${location.detailedName}`,
                value: location.detailedName,
            }))

            setOptions(results)
        }

        if (!loading) setFetching(false)

        return debounce(loadOptions, debounceTimeout)
    }, [data, debounceTimeout, fetchLocation, loading])

    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
            options={options}
        />
    )
}

export default DebounceSelect
