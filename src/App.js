import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import ToDoContextProvider from './Context/ToDoContext';
function App() {
  return (
    <ToDoContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addtodo' element={<ToDoForm />} />
        <Route path='/todos' element={<ToDoList />} />
      </Routes>
    </ToDoContextProvider>
  );
}

export default App;
