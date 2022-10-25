import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
    },

    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
    },
    {
        id: "3",
        title: "Task 3",
        description: "Task 3 description",
    },

]
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload

            const foundTask = state.find(task => task.id === id)

            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)

            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        },
        searchTask: (state, action) => {
            console.log(action)
            // let tempState = action.payload.tasks

            if (!action.payload.val) {
                return state;
            }

            const response = state.filter((task) => {
                const taskName = task.title.toLowerCase()
                return taskName.includes(action.payload.val)
            })

            return response
        }

    }
})


export const { addTask, editTask, deleteTask, searchTask } = taskSlice.actions
export default taskSlice.reducer