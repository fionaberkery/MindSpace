import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import DefaultPage from '../components/ColouringBook/DefaultPage';
import MandalaImage1 from '../components/ColouringBook/images/MandalaImage1';
import MandalaImage2 from '../components/ColouringBook/images/MandalaImage2';
import VillageStairsImage from '../components/ColouringBook/images/VillageStairsImage';
import { motion } from 'framer-motion';


const ColouringBookContainer = () => {
    
    const [selection, setSelection] = useState('default');
    
    const handleImageSelection = (selection) => {
        setSelection(selection)
    }

    const handleTouchImageSelection = (selection, event) => {
        event.preventDefault();
        setSelection(selection);
    }

    const colouringNav = ()=>{
        switch (selection) {
            case 'default':
                return <DefaultPage handleImageSelection={handleImageSelection} handleTouchImageSelection={handleTouchImageSelection} />
            case 'village':
                return <VillageStairsImage handleImageSelection={handleImageSelection} handleTouchImageSelection={handleTouchImageSelection} />
            case 'mandala1':
                return <MandalaImage1 handleImageSelection={handleImageSelection} handleTouchImageSelection={handleTouchImageSelection} />
            case 'mandala2':
                return <MandalaImage2 handleImageSelection={handleImageSelection} handleTouchImageSelection={handleTouchImageSelection} />
            default:
                return null;
        }
    }

    return (
        <div>

            <Helmet>
                <title>Wellbeing - Colour</title>
            </Helmet>
            
            <h2 className='colouring-title'>Colour Away</h2>

            <nav className='nav-colouring'>
                {colouringNav()}
            </nav>

        </div>
    )
}

export default ColouringBookContainer;