import React from "react";

//icon
import add from './Assets/add.png';

//files
import TaskList from "./TaskList";
const AddTaskForm = () => {
  return (
    <div className="fixed inset-x-0 top-8/5 transform -translate-y-1/2 bg-white p-4 mt-1 ml-20 mr-20 border rounded-lg shadow-xl">
      <form>
        <h3 className="text-left mb-2">List your Tasks</h3>
        <p className="flex justify-between shadow-sm">
          <input
            type="text"
            placeholder="Title of Task"
            className="w-full p-1 border rounded-lg"
          />
          <button >
            <img src={add} alt="add-task" className="w-10 h-10"/>
          </button>
        </p>
      </form>
      <div className="mt-2">
      <TaskList/>
      </div>
      
    </div>
  );
};

export default AddTaskForm;
