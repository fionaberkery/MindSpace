import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import html2canvas from "html2canvas";
import DefaultPage from '../components/ColouringBook/DefaultPage';
import MandalaImage1 from '../components/ColouringBook/images/MandalaImage1';
import MandalaImage2 from '../components/ColouringBook/images/MandalaImage2';
import VillageStairsImage from '../components/ColouringBook/images/VillageStairsImage';
import "../static/colouring/colouring.css";


const ColouringBookContainer = () => {
    
    const [selection, setSelection] = useState('default');

    const handleImageSelection = (selection) => {
        setSelection(selection)
    }

    const handleTouchImageSelection = (selection, event) => {
        event.preventDefault();
        setSelection(selection);
    }
    
    // for html2canvas to download & export a screenshot (png) of coloured in image
    const exportAsImage = async (element, imageFileName) => {
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL("image/png", 1.0);
        downloadImage(image, imageFileName);
    }

    const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display : none";
        fakeLink.download = fileName;
        fakeLink.href = blob;
        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);
        fakeLink.remove();
    }
    
    const colouringNav = () => {
        switch (selection) {
            case 'default':
                return <DefaultPage handleImageSelection={handleImageSelection} handleTouchImageSelection={handleTouchImageSelection}/>
            case 'village':
                return <VillageStairsImage handleImageSelection={handleImageSelection} handleTouchImageSelection={handleTouchImageSelection} exportAsImage={exportAsImage}/>
            case 'mandala1':
                return <MandalaImage1 handleImageSelection={handleImageSelection} handleTouchImageSelection={handleTouchImageSelection} exportAsImage={exportAsImage}/>
            case 'mandala2':
                return <MandalaImage2 handleImageSelection={handleImageSelection} handleTouchImageSelection={handleTouchImageSelection} exportAsImage={exportAsImage}/>
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