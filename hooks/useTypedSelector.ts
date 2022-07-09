import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { AppState } from '../state'

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector
