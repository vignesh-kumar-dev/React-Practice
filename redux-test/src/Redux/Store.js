import { configureStore } from '@reduxjs/toolkit';
import TestSlice from './Slices/TestSlice'

export const Store = configureStore({
    reducer: {
        Test: TestSlice
    }
})