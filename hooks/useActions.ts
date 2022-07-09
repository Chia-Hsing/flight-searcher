import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { Dispatch, actionCreators } from '../state'

export const useActions = () => {
    const dispatch = useDispatch<Dispatch>()

    return useMemo(() => {
        return bindActionCreators(actionCreators, dispatch)
    }, [dispatch])
}
