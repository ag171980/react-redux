import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usingSearchBar: false,
    wordToSearch: "",
}
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeToState: (state, action) => {
            state.usingSearchBar = action.payload.val
            state.wordToSearch = action.payload.word
        }
    }

})

export const { changeToState } = searchSlice.actions
export default searchSlice.reducer