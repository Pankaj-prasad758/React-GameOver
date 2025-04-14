import React, { useRef, useState } from 'react'

function MemoCount() {
    const renderCount = useRef(0)
    console.log(renderCount);
    
return(
    <>
    <div className='flex  justify-center'>
       <p>
        <span className='text-red-600 text-xl'>{renderCount.current++} time(s)</span>
       </p>
    </div>
    </>
  )
}

export default React.memo(MemoCount);