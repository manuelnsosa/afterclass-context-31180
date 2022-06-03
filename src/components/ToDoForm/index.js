import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToDoContext } from '../../Context/ToDoContext';
const ToDoForm = () => {
  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [status, setStatus] = useState('');
  const [showForm, setShowForm] = useState(true);

  const { addTodo } = useContext(ToDoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({ title, status, user, date: '3/6/22' });
    setTitle('');
    setUser('');
    setStatus('');
    setShowForm(false);
  };

  return (
    <div className='flex items-start justify-center flex-row'>
      <div className='flex justify-center'>
        {showForm && (
          <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12'
            onSubmit={onSubmit}
          >
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='title'
              >
                Title
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='title'
                type='text'
                placeholder='Do the dishes'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete='off'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='user'
              >
                User
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='user'
                type='text'
                placeholder='manuelnsosa'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                autoComplete='off'
              />
            </div>
            <div className='mb-6'>
              <select
                className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value=''>Select status</option>
                <option value='Pending'>Pending</option>
                <option value='In Progress'>In Progress</option>
                <option value='Done'>Done</option>
              </select>
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Todo
              </button>
            </div>
          </form>
        )}
        {!showForm && (
          <div className='h-screen w-full flex items-center justify-center'>
            <Link
              to='/todos'
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-10'
            >
              <button>Go to to-do list</button>
            </Link>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-10'
              onClick={() => setShowForm(true)}
            >
              Add new to-do
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoForm;
