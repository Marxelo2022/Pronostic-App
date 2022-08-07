import React from 'react'

const NewDate = () => {

    let infoDate = new Date()
    let year = infoDate.toLocaleDateString()
        
  return (
    <> 
       <p className='weather__date'>{year}</p> 
    </>
  
  )
}

export default NewDate