import './App.css';
import { useSelector } from 'react-redux'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Instalate redux y react devtools de chrome
//Video hasta los 59:54
function App() {
  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/edit-task/:id' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
