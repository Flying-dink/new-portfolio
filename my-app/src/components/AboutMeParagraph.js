import React from 'react'
import myPictureIMG from "../images/image0.jpg"
import "../styles/aboutmeparagraph.css"
import AboutAnimation from './AboutAnimation'
const AboutMeParagraph = () => {

    const text= "My name is Catherine Clifford an I am looking for a position as an entry level software developer"
        
    



    return (
        <div className="aboutParaComponent">
            <div className="aboutParaDiv">
                    <AboutAnimation text={text} />
        </div>
        <div className="aboutParaImgDiv">
                    <img className="aboutParaImg" src={myPictureIMG} />
            </div>
        </div>
    )
}

export default AboutMeParagraph
