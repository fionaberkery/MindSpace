import React from 'react';
import MandalaImage1 from '../components/ColouringBook/images/MandalaImage1';
import MandalaImage2 from '../components/ColouringBook/images/MandalaImage2';
import VillageStairsImage from '../components/ColouringBook/images/VillageStairsImage';

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