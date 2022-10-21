import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },

    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    },
    {
        id: "3",
        title: "Task 3",
        description: "Task 3 description",
        completed: false
    },

]
// const eliminarIngrediente = (val) => {
//     const asd = ingredientes.indexOf(val)
//     if (asd > -1) {
//         ingredientes.splice(asd, 1)
//     }
//     setIngrediente([...ingredientes])
// }
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(state, action)
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

            console.log(taskFound)
        }
    }
})


export const { addTask, editTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer