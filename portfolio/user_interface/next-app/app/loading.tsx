import React from 'react'

function loading() {
  return (
    <div className='flex justify-center items-center min-h-full overflow-hidden'>
        <div className='animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500'></div>
    </div>
  )
}

export default loading