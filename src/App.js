import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task])
      setTask("")
    }
  }

  const deleteTask = (index) => {
    const updatedList = [...tasks]
    // delete updatedList[index]
    updatedList.splice(index, 1)
    setTasks(updatedList)
  }

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-xl self-start font-bold p-5 text-blue-700 bg-slate-300 w-full">Todo App</h4>
      <div className="p-6 flex">
        <input className="bg-slate-100 p-4 m-4 rounded-md w-60"
          type="text"
          value={task}
          placeholder="Create new todo"
          onChange={(e) => { setTask(e.target.value) }}
        />
        <button
          onClick={addTask}
          className="text-5xl"><i className=" fa-solid fa-circle-plus self-center text-green-600"></i></button>
      </div>
      <div>
        {tasks?.length > 0 ? (
          <ul>
            {
              tasks.map((task, index) => (
                <div className="flex bg-slate-100 m-2 py-4 pl-12 pr-4 rounded-md w-80" key={index}>
                  <in className="self-center font-semibold pr-10 mr-6 grow">{task}</in>
                  <button
                    className="bg-slate-100 p-2 rounded-md font-bold hover:bg-slate-200">
                    <i className="fa-solid fa-pen-to-square text-green-600"></i>
                  </button>
                  <button
                    onClick={() => { deleteTask(index) }}
                    className="bg-slate-100 p-2 mx-1 rounded-md font-bold hover:bg-slate-200"><i className="fa-solid fa-trash text-red-600"></i>
                  </button>
                </div>
              ))
            }
          </ul>
        ) : (
          <div>
            <p className="text-slate-500">Task not found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
