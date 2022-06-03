import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToDoContext } from '../../Context/ToDoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faList,
  faPlus,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import Avatar from '../Avatar';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { getAmountOfTodos } = useContext(ToDoContext);

  const amountOfTodos = getAmountOfTodos();

  return (
    <div className='flex items-center h-20 px-6 justify-between shadow-sm bg-white relative z-50'>
      <Link
        to='/'
        className='flex no-underline block h-8 items-center justify-between'
      >
        <img src='./logo.png' className='h-full' alt='logo' />
        <h3 className='ml-2 border-b-2 hover:text-blue-400'>To-do list</h3>
      </Link>
      <div className='flex-none hidden md:flex md:justify-center md:h-full'>
        <Link
          to='/'
          className='block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400'
        >
          <FontAwesomeIcon icon={faHome} className='mr-3' /> Home
        </Link>
        <Link
          to='/todos'
          href='#'
          className='block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400'
        >
          <FontAwesomeIcon icon={faList} className='mr-3' /> My to-do list
        </Link>
        <Link
          to='/addtodo'
          href='#'
          className='block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400'
        >
          <FontAwesomeIcon icon={faPlus} className='mr-3' /> Add item
        </Link>
        <h2 className='block h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400'>
          You have {amountOfTodos} To-dos in your list
        </h2>
      </div>
      <div className='items-center justify-end hidden md:flex'>
        <Avatar image='./avatar.png' className='cursor-pointer my-2' />
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className='text-black text-3xl cursor-pointer md:hidden'
      />
      {mobileOpen && (
        <div className='bg-white absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden'>
          <div className='flex-1 flex flex-col items-center text-xl'>
            <Link
              to='/'
              className='no-underline px-2 my-2 font-medium hover:text-blue-400'
            >
              <FontAwesomeIcon icon={faHome} className='mr-3' /> Home
            </Link>
            <Link
              to='/todos'
              href='#'
              className='no-underline px-2 py-1 my-2 font-medium border-b-2 border-black hover:text-blue-400'
            >
              <FontAwesomeIcon icon={faList} className='mr-3' /> My to-do list
            </Link>
            <Link
              to='/addtodo'
              href='#'
              className='no-underline px-2 my-2 font-medium hover:text-blue-400'
            >
              <FontAwesomeIcon icon={faPlus} className='mr-3' /> Add item
            </Link>
            <Avatar
              image='https://gustui.s3.amazonaws.com/avatar.png'
              status='online'
              className='cursor-pointer my-2'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
