import React, { useCallback, useState, memo } from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log(`Render Button ${children}`);

  return (
    <button
      className={`text-black mt-2 py-2 px-4 rounded-2xl ${
        children == "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
})

function UseCallBack() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment");

    setCount((prev) => prev + 1);
  }, []);

  // const increment = () => setCount((prev) => prev + 1)
  // const decrement = () => setCount((prev) => prev - 1)
  const decrement = useCallback(() => {
    console.log("decrement");

    setCount((prev) => prev - 1);
  }, []);

  return (
    <>
      <div className="flex justify-center ">
        <div className=" h-96 w-3xs bg-black rounded-2xl text-xl text-white flex flex-col justify-center items-center">
          <h1>Count: {count}</h1>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
      </div>
    </>
  );
}

export default UseCallBack;
