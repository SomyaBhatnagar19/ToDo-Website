import React from "react";

//icon
import add from './Assets/add.png';
const AddTaskForm = () => {
  return (
    <div className="flex items-center justify-center h-full bg-white border rounded-lg p-2 mt-20 m-20">
      <div>
        <h3 className="text-left">List your Tasks</h3>
        <p className="flex justify-between ">
          <input
            type="text"
            placeholder="Title of Task"
            className="w-full p-1 border rounded-lg"
          />
          <button >
            <img src={add} alt="add-task" className="w-10 h-10"/>
          </button>
        </p>
      </div>
    </div>
  );
};

export default AddTaskForm;
