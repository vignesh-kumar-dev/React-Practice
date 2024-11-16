import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    obj: {
        age: 0,
        adult: false
    }
}

const TestSlice = createSlice({
    name: 'Test',
    initialState,
    reducers: {
        editText: (state, action) => {
            state.name = action.payload
        },
        editObject: (state, action) => {
            state.obj.age = action.payload.age
            state.obj.adult = action.payload.adult
        }
    }
})

export const {editText, editObject} = TestSlice.actions
export default TestSlice.reducer