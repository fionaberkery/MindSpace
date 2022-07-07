import React from 'react';
import MandalaImage1 from '../components/ColouringBook/MandalaImage1';
import MandalaImage2 from '../components/ColouringBook/MandalaImage2';
import VillageStairsImage from '../components/ColouringBook/VillageStairsImage';

const ColouringBookContainer = () => {
    return (
        <div>
            <h2>Colour Away</h2>
            <MandalaImage2 />
            <VillageStairsImage />
            <MandalaImage1 />
        </div>
    )
}

export default ColouringBookContainer;