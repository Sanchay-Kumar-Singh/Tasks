import React, { useState } from "react";

const CounterScoreboard = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="m-2.5 min-h-[400px] w-[800px] border-2 rounded-2xl p-2 text-3xl">

        <h1 className="border-2 w-12 p-2 text-center mx-auto ">
          {count}
        </h1>

        <div className="mt-5">
          <button className=" bg-green-600 border rounded-2xl p-3" onClick={increase}>
            Increase (+)
          </button>

          <button className="bg-red-500  border p-3 rounded-2xl" onClick={() => setCount(count - 1)}>
            Decrease (-)
          </button>
              <br />
          <div>
            {count >= 10 && <h1>You have reached! 🎉</h1>}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CounterScoreboard;