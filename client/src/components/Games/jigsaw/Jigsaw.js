import React, { useState } from "react";
import "./jigsaw.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";


const Jigsaw = ()=>{
    const [columns, setColumns]= useState(4);
    const [rows, setRows]= useState(4);
    const [picture, setPicture]= useState("https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg");

    const [text, setText] = useState("Unpuzzle the pieces!!");
    
    const set = () => {
        setText("Well Done! How about you pick another picture or increase the number of peices");
    };

    // const pic1= "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
    // const pic2= "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"
    // const pic3= "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg"

    // const pictures = [pic1,pic2,pic3]
    const pictureList = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg","https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg","https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg"]

    const numberOfRows = [3,4,5,6,7,8,9,10]
    const numberOfColumns = [3,4,5,6,7,8,9,10]


    const handlePictureChange = function(event){
        const chosenPicture = pictureList[event.target.value]
        onPictureSelected(chosenPicture)
    }

    const pictureOptions = pictureList.map((index) =>{
        return<option value={index} key={index}></option>
    })

    const onPictureSelected = function(picture){
        setPicture(picture)
    }


    const handleRowChange = function(event){
        const chosenRows = numberOfRows[event.target.value]
        onRowsSelected(chosenRows)
    }

    const rowOptions = numberOfRows.map((index) =>{
        return<option value={index} key={index}></option>
    })

    const onRowsSelected = function(rows){
        setRows(rows)
    }

    const handleColumnChange = function(event){
        const chosenRows = numberOfRows[event.target.value]
        onColumnSelected(chosenRows)
    }

    const onColumnSelected = function(columns){
        setColumns(columns)
    }

    const columnOptions = numberOfColumns.map((index) =>{
        return<option value={index} key={index}></option>
    })




return(
    <>
    <div>
    <br></br><br></br><br></br>
                <select defaultValue="" onChange={handlePictureChange} className="drop-down" >
                <option value="" selected>Select Picture</option>
            {pictureOptions}
            </select>
            <select defaultValue="" onChange={handleRowChange} className="drop-down" >
                <option value="" selected>Number of Rows</option>
            {rowOptions}
            </select>
            <select defaultValue="" onChange={handleColumnChange} className="drop-down" >
                <option value="" selected>Number of Columns</option>
            {columnOptions}
            </select>
    <h2 className="title">{text}</h2>
    <JigsawPuzzle
        imageSrc={picture}
        rows={rows}
        columns={columns}
        onSolved={set}
        className="jigsaw-puzzle"
    />
    </div>

</>
)
}
export default Jigsaw;