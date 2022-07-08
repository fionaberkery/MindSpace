import React from 'react'

const DefaultPage = ({handleImageSelection}) => {

    return (
        <>
            <h2>Choose a picture to colour in: </h2>
            <button onClick={()=>{handleImageSelection('village')}}>Village</button>
            <button onClick={()=>{handleImageSelection('mandala1')}}>Mandala1</button>
            <button onClick={()=>{handleImageSelection('mandala2')}}>Mandala2</button>
        </>
    )
}

export default DefaultPage;