import React from "react";
import { useState } from "react";
import ComplexCompo from "./ComplexCompo";
function UseMemo() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-center mt-12">
        <div className="w-2xs h-96 bg-black text-xl text-white rounded-2xl border-2 border-amber-100 content-center">
            <ComplexCompo/>
          <button
            className="p-2 rounded-xl bg-white text-black border-2 border-yellow mt-3.5"
            onClick={() => setCount((prev) => prev + 1)}
            >
            Increment++
          </button>
              <h1>Count: {count}</h1>
        </div>
      </div>
    </>
  );
}

export default UseMemo;
