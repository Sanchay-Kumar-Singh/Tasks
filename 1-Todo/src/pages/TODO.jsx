import { useState } from "react";

const TODO = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTask() {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = input;

      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, input]);
    }

    setInput("");
  }

  function deleteTask(index) {
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  }

  function editTask(index) {
    setInput(list[index]);
    setEditIndex(index);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="border-2 m-2.5 min-h-[400px] w-[800px] text-center p-6 bg-white rounded-xl">
        <h1 className="text-2xl font-bold mb-6">
          Todo Task Manager
        </h1>

        <input
          type="text"
          className="border-2 rounded-2xl p-2 w-80"
          placeholder="Write task here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={addTask}
          className="border-2 rounded-2xl p-2 ml-2 bg-black text-white"
        >
          {editIndex !== null ? "Save" : "Add"}
        </button>

        <div className="mt-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b p-3"
            >
              <span>{item}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => editTask(index)}
                  className="border-2 px-3 py-1 rounded-xl bg-blue-500 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(index)}
                  className="border-2 px-3 py-1 rounded-xl bg-red-500 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TODO;