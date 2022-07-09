import React from 'react'

const DefaultPage = ({handleImageSelection}) => {

    return (
        <>
            <h2>Choose a picture to colour in: </h2>
            <button className='select-btn' onClick={()=>{handleImageSelection('village')}}>Village</button>
            <button className='select-btn' onClick={()=>{handleImageSelection('mandala1')}}>Mandala1</button>
            <button className='select-btn' onClick={()=>{handleImageSelection('mandala2')}}>Mandala2</button>
        </>
    )
}

export default DefaultPage;