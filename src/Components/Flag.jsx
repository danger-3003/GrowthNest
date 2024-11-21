import React from 'react'

function Flag({image}) {
  return (
    <div>
        <img src={image} alt="Flag" className='h-10 w-28 md:h-20 md:w-40 mx-1.5 my-3 md:m-3 rounded-md' style={{boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.25)"}}/>
    </div>
  )
}

export default Flag