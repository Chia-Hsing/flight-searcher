import { createSlice } from '@reduxjs/toolkit'

interface AgendaState {
    agenda: string[]
    symbols: string[]
    current: number
}

const initialState: AgendaState = {
    agenda: [],
    symbols: [],
    current: 0,
}

export const agendaSlice = createSlice({
    name: 'agendaSlice',
    initialState,
    reducers: {
        initAgenda(state, action) {
            state.agenda = action.payload.agenda
        },
        initSymbols(state, action) {
            state.symbols = action.payload.symbols
        },
        forwardToCurrentAgenda(state, action) {
            state.current = action.payload.current
        },
    },
})

export const { initAgenda, forwardToCurrentAgenda, initSymbols } = agendaSlice.actions
export default agendaSlice.reducer
