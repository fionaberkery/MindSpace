import React from "react";

const Footer = () => {

    return (

        <>
        <div id="main-footer">

        <div id="footer-top-layer">
            <div id="top-left">
                <h2 id="footer-title-spacing"> App Name </h2>
            </div>
            <div id="top-right">
                <p id="footer-icon-spacing"> 
                    <img id="icons" src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"/> 
                    <img id="icons" src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/> 
                    <img id="icons" src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"/> 
                    <img id="icons" src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png"/> 
                    
                </p>
            </div>
        </div>

        <div id="footer-bottom-layer">
            <div id="bottom-left">
            <p id="footer-spacing"> Privacy </p>
            <p id="footer-spacing"> Policy </p>
            </div>
            <div id="bottom-right">
            <p id="footer-spacing"> Home </p>
            <p id="footer-spacing"> About </p>
            <p id="footer-spacing"> Services </p>
            <p id="footer-spacing"> Contact </p>
            </div>
        </div>

        </div>



        </>
    )
}

export default Footer