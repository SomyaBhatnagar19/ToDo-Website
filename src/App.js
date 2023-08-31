import React from 'react';
import './index.css';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import AddTaskForm from './Components/AddTaskForm';
import TaskList from './Components/TaskList';

const App = () => {
  return (
    <div>
      <Header/>
      <AddTaskForm/>
      <TaskList/>
      <Footer/>
    </div>
  );
};

export default App;
