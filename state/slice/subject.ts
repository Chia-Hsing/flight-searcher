import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const subjectSlice = createSlice({
    name: 'subject',
    initialState: {} as any,
    reducers: {},

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.subject,
            }
        },
    },
})

export default subjectSlice
