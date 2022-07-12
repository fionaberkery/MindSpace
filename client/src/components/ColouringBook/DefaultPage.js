import React from 'react'
import village from '../../static/colouring/VillageStairsImage.png';
import mandala1 from '../../static/colouring/Mandala1Image.png';
import mandala2 from '../../static/colouring/Mandala2Image.png';
import '../../static/colouring/defaultpage.css'
import "../../static/colouring/colouring.css";



const DefaultPage = ({handleImageSelection, handleTouchImageSelection}) => {


    return (
        <>
            <h2 className='colouring-heading'>Choose a picture to colour in: </h2>

            <section className='images-container'>

            <img src={mandala2} alt='Paisley Petal' className='select-img petal' onClick={()=>{handleImageSelection('mandala2')}} onTouchEnd={()=>{handleTouchImageSelection('mandala2')}}/>

            <img src={mandala1} alt='Mandala' className='select-img' onClick={()=>{handleImageSelection('mandala1')}} onTouchEnd={()=>{handleTouchImageSelection('mandala1')}}/>

            <img src={village} alt='Village' className='select-img' onClick={()=>{handleImageSelection('village')}} onTouchEnd={()=>{handleTouchImageSelection('village')}}/>
            
            </section>

        </>
    )
}

export default DefaultPage;

