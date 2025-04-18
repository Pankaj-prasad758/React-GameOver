import React, { useMemo } from "react";

function ComplexCompo() {
  const sum = () => {
    let result = 0;
    for (let i = 0; i <= 10000000 ; i++) {
      result = i + 1 ;
    }
    return result;
  };

  const total = useMemo(() => sum(),[]);
// const total = sum()
  return (
    <>
      <div className="flex justify-center">
        <div className="w-fit p-2 border border-red-600">
          <p className="text-xl">Sum: {total}</p>
        </div>
      </div>
    </>
  );
}

export default ComplexCompo;
