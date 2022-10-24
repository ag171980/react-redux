import { createSlice } from "@reduxjs/toolkit";

const iniState = [
    {
        id: "1",
    },
    {
        id: "2",
    },
    {
        id: "3",
    },

]
export const searchSlice = createSlice({
    name: 'search',
    iniState,
    reducers: {
        showSearched: (state, action) => {
            console.log(state, action)
        }
    }

})

export const { showSearched } = searchSlice.actions
export default searchSlice.reducer