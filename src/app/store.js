import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice'
import searchReducer from '../features/tasks/searchSlice'
export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        search: searchReducer,
    },
});