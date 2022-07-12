import React, { useState } from "react";
import "./jigsaw.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Jigsaw1 from './jigsaw1.png'
import Jigsaw2 from './jigsaw2.png'
import Jigsaw3 from './jigsaw3.png'




const Jigsaw = ()=>{
    const [columns, setColumns]= useState(4);
    const [rows, setRows]= useState(4);
    const [picture, setPicture]= useState("https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg");

    const [text, setText] = useState("Unpuzzle the pieces!!");
    
    const set = () => {
        setText("Well Done! How about you pick another picture or increase the number of peices");
    };

    const pic1= "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
    const pic2= "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"
    const pic3= "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg"

    const pictureList = [pic1,pic2,pic3]
    // const pictureList = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg","https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg","https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg"]

    const numberOfRows = [3,4,5,6,7,8,9,10]
    const numberOfColumns = [3,4,5,6,7,8,9,10]


    const handlePictureChange = function(event){
        const chosenPicture = pictureList[event.target.value]
        onPictureSelected(chosenPicture)
    }

    const pictureOptions = pictureList.map((pictureList, index) =>{
        return<option value={index} key={index}>{pictureList}</option>
    })

    const onPictureSelected = function(picture){
        setPicture(picture)
    }


    const handleRowChange = function(event){
        const chosenRows = numberOfRows[event.target.value]
        onRowsSelected(chosenRows)
    }

    const rowOptions = numberOfRows.map((numberOfRows, index) =>{
        return<option value={index} key={index}>{numberOfRows}</option>
    })

    const onRowsSelected = function(rows){
        setRows(rows)
    }

    const handleColumnChange = function(event){
        const chosenRows = numberOfRows[event.target.value]
        onColumnSelected(chosenRows)
    }

    const columnOptions = numberOfColumns.map((numberOfColumns, index) =>{
        return<option value={index} key={index}>{numberOfColumns}</option>
    })

    const onColumnSelected = function(columns){
        setColumns(columns)
    }

return(
    <>
    
    <div className="jigsaw-page">

            <br></br><br></br><br></br>

            <div id="dropdown-menus-flex">

            <select defaultValue="" onChange={handlePictureChange} className="drop-down" >
                <option value="" selected>Select Picture</option>
                {pictureOptions}
            </select>
            
            <select defaultValue="" onChange={handleRowChange} className="drop-down" >
                <option value="4" selected>Number of Rows</option>{rowOptions}
            </select>
            
            <select defaultValue="" onChange={handleColumnChange} className="drop-down" >
                <option value="" selected>Number of Columns</option>
                {columnOptions}
            </select>

            </div>

            <h2 className="title">{text}</h2>
    
            <JigsawPuzzle
                imageSrc={picture}
                rows={rows}
                columns={columns}
                onSolved={set}
                className="jigsaw-puzzle"
            />
    </div>

    <section>

  <div class="set">
    <div><img src={Jigsaw1} height="40px" width="40px" /></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
    <div><img src={Jigsaw3} height="40px" width="40px"/></div>
    <div><img src={Jigsaw1} height="40px" width="40px"/></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
    <div><img src={Jigsaw3} height="40px" width="40px"/></div>
    <div><img src={Jigsaw1} height="40px" width="40px"/></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
    
  </div>
  <div class="set set2">
  <div><img src={Jigsaw1} height="40px" width="40px" /></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
    <div><img src={Jigsaw3} height="40px" width="40px"/></div>
    <div><img src={Jigsaw1} height="40px" width="40px"/></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
    <div><img src={Jigsaw3} height="40px" width="40px"/></div>
    <div><img src={Jigsaw1} height="40px" width="40px"/></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
    
  </div>
  <div class="set set3">
  <div><img src={Jigsaw1} height="40px" width="40px" /></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
    <div><img src={Jigsaw3} height="40px" width="40px"/></div>
    <div><img src={Jigsaw1} height="40px" width="40px"/></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
    <div><img src={Jigsaw3} height="40px" width="40px"/></div>
    <div><img src={Jigsaw1} height="40px" width="40px"/></div>
    <div><img src={Jigsaw2} height="40px" width="40px"/></div>
  </div>
</section>

</>
)
}
export default Jigsaw;