import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";
import { nanoid } from "nanoid";

function AddTask() {
  const [addModal, setAddModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const id = nanoid();
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ id ,title, description }));
    setTitle("");
    setDescription("");
    setAddModal(false);

  };

  return (
    <>
      <button
        className="bg-blue-500 px-2 mx-1.5 rounded-sm text-white uppercase font-semibold transition-all active:scale-75 hover:bg-blue-700"
        onClick={() => setAddModal(!addModal)}
      >
        +New
      </button>

      {addModal ? (
        <>
          <div className="overflow-x-hidden overflow-y-hidden fixed inset-0 z-100 flex items-center justify-center flex-col max-w-lg mx-auto">
            <div className="w-9/12 bg-white">
              <div className="flex justify-between p-5 w-full bg-white max-w-lg">
                <h3 className="bg-white text-3xl font-semibold">
                  Add new Task
                </h3>

                <button
                  className="text-3xl text-gray-400 font-semibold float-right bg-white hover:bg-gray-100 transition-all rounded-sm px-4 active:scale-75"
                  onClick={() => setAddModal(!addModal)}
                >
                  X
                </button>
              </div>

              <form className="p-5 transition-all">
                <div className="">
                  <label htmlFor="Task" className="text-xl float-left mb-2">Task Title : </label>

                  <input
                    type='text'
                    className="focus:bg-white
                            focus:outline-none text-gray-700 border border-gray-300 rounded py-3 px-4 mb-5 bg-gray-300 w-full"
                    id='Task'
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="">
                  <label htmlFor="Description" className="text-xl float-left mb-2">Task Description</label>

                  <textarea 
                  name="Description" 
                  id="Description" 
                  cols="30" 
                  rows="5"
                  className="bg-gray-300 w-full p-2 rounded border border-gray-300 focus:outline-none focus:bg-white focus:border-gray-500 placeholder:gray-500 "
                  placeholder="Add Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div>
                  <button className="bg-blue-500 px-3 rounded py-1 text-white font-semibold border-2 transition-all active:scale-75 float-right m-3"
                  onClick={handleAddTask}
                  >
                    ADD TASK
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddTask;
