import { combineReducers } from '@reduxjs/toolkit'

import agendaReducer from './agenda'

const reducers = combineReducers({ agenda: agendaReducer })

export default reducers
