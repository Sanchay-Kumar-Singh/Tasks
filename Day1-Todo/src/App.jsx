import React from 'react'
import TODO from './pages/TODO'

const App = () => {
  return (
    <div>
      <TODO/>
    </div>
  )
}

export default App





// import React, { useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [input, setInput] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   // CREATE
//   const addProduct = () => {
//     if (input === "") return;

//     setProducts([...products, input]);
//     setInput("");
//   };

//   // DELETE
//   const deleteProduct = (index) => {
//     const newProducts = products.filter((item, i) => i !== index);
//     setProducts(newProducts);
//   };

//   // EDIT
//   const editProduct = (index) => {
//     setInput(products[index]);
//     setEditIndex(index);
//   };

//   // UPDATE
//   const updateProduct = () => {
//     const newProducts = [...products];
//     newProducts[editIndex] = input;

//     setProducts(newProducts);
//     setInput("");
//     setEditIndex(null);
//   };

//   return (
//     <div className="p-10">

//       <h1 className="text-3xl font-bold mb-5">React CRUD</h1>

//       <input
//         type="text"
//         placeholder="Enter Product"
//         className="border p-2 mr-2"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       {editIndex === null ? (
//         <button
//           onClick={addProduct}
//           className="bg-blue-500 text-white px-4 py-2"
//         >
//           Add
//         </button>
//       ) : (
//         <button
//           onClick={updateProduct}
//           className="bg-green-500 text-white px-4 py-2"
//         >
//           Update
//         </button>
//       )}

//       <br />
//       <br />

//       {products.map((product, index) => (
//         <div
//           key={index}
//           className="flex justify-between border p-3 mb-3"
//         >
//           <h2>{product}</h2>

//           <div>
//             <button
//               onClick={() => editProduct(index)}
//               className="bg-yellow-400 px-3 py-1 mr-2"
//             >
//               Edit
//             </button>

//             <button
//               onClick={() => deleteProduct(index)}
//               className="bg-red-500 text-white px-3 py-1"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;