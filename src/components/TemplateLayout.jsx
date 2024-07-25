import React from 'react'

const IndividualCardLayout = ({children}) => {
  return (
    <div id='layout' className='w-screen xl:h-screen max-w-[100vw] xl:max-h-[100vh] flex items-center justify-center'>
      {children}
    </div>
  )
}

export default IndividualCardLayout