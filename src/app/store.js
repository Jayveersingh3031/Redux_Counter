import {configureStore} from '@reduxjs/toolkit'
import CountReducer from '../Slice/CountSlice'
export const store =configureStore({
    reducer : CountReducer
})