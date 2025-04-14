import React from 'react'
import { useState } from 'react'
import MemoCount from './MemoCount'

function ReactMemo() {
    const [counter, setCounter] = useState(0)
  return (
    <>
    <div className='flex justify-center  '>
<div className='w-2xs h-96 bg-black text-xl text-white rounded-2xl border-2 border-amber-100 content-center'>
<h1 className='text-2xl'>{counter}</h1>
<button className='p-2 rounded-xl bg-white text-black border-2 border-yellow mt-3.5' onClick={() => setCounter((prev) => prev + 1) }>Increment</button>
<div className='mt-9'>
<MemoCount/>
</div>
</div>
    </div>
    </>
  )
}

export default ReactMemo