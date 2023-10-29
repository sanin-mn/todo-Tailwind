

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold m-16">Simple todo App</h1>
    <div className="p-6">
      <input className="bg-slate-100 p-4 m-4 rounded-md"
      type="text"
      placeholder="Create anew todo"
      />
      <button className="bg-green-400 p-3 m-3 rounded-md font-bold hover:bg-green-500">Add task</button>
    </div>
    </div>
  );
}

export default App;
