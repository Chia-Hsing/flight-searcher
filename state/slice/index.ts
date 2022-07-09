import { combineReducers } from '@reduxjs/toolkit'

import subjectSlice from './subject'

const reducers = combineReducers({ [subjectSlice.name]: subjectSlice.reducer })

export default reducers
