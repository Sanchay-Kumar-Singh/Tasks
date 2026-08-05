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


// save local storgae 

// import { useEffect, useState } from "react";

// const TODO = () => {
//   const [input, setInput] = useState("");
//   const [list, setList] = useState(() => {
//     const savedTasks = localStorage.getItem("todos");
//     return savedTasks ? JSON.parse(savedTasks) : [];
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(list));
//   }, [list]);

//   function addTask() {
//     if (input.trim() === "") return;

//     if (editIndex !== null) {
//       const updatedList = [...list];
//       updatedList[editIndex] = input;

//       setList(updatedList);
//       setEditIndex(null);
//     } else {
//       setList([...list, input]);
//     }

//     setInput("");
//   }

//   function editTask(index) {
//     setInput(list[index]);
//     setEditIndex(index);
//   }

//   function deleteTask(index) {
//     const newList = list.filter((item, i) => i !== index);
//     setList(newList);
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
//       <div className="w-[800px] min-h-[400px] bg-white border-2 rounded-xl p-6">
        
//         <h1 className="text-2xl font-bold text-center mb-6">
//           Todo Task Manager
//         </h1>

//         <div className="flex justify-center gap-2">
//           <input
//             type="text"
//             placeholder="Write task here"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="border-2 rounded-xl p-2 w-80"
//           />

//           <button
//             onClick={addTask}
//             className="bg-black text-white px-4 py-2 rounded-xl"
//           >
//             {editIndex !== null ? "Update" : "Add"}
//           </button>
//         </div>

//         <div className="mt-6">
//           {list.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center border-b p-3"
//             >
//               <span>{item}</span>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => editTask(index)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded-lg"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => deleteTask(index)}
//                   className="bg-red-500 text-white px-3 py-1 rounded-lg"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TODO;