import React, {useState} from 'react';
import DefaultPage from '../components/ColouringBook/DefaultPage';
import MandalaImage1 from '../components/ColouringBook/images/MandalaImage1';
import MandalaImage2 from '../components/ColouringBook/images/MandalaImage2';
import VillageStairsImage from '../components/ColouringBook/images/VillageStairsImage';

const ColouringBookContainer = () => {
    
    const [selection, setSelection] = useState('default');
    
    const handleImageSelection = (selection) => {
        setSelection(selection)
    }

    return (
        <div>
            <h2>Colour Away</h2>
            <br/>

            {(()=>{
                switch (selection) {
                    case 'default':
                        return <DefaultPage handleImageSelection={handleImageSelection} />
                    case 'village':
                        return <VillageStairsImage handleImageSelection={handleImageSelection} />
                    case 'mandala1':
                        return <MandalaImage1 handleImageSelection={handleImageSelection} />
                    case 'mandala2':
                        return <MandalaImage2 handleImageSelection={handleImageSelection} />
                    default:
                        return null;
                }
            })()}
            
        </div>
    )
}

export default ColouringBookContainer;