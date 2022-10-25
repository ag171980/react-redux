import './App.css';
  
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Results from './components/results/result'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/edit-task/:id' element={<TaskForm />} />
          <Route path='/result' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
