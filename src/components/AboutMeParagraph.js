import React from 'react'
import myPictureIMG from "../images/image0.jpg"
import "../styles/aboutmeparagraph.css"
import AboutAnimation from './AboutAnimation'
const AboutMeParagraph = () => {

    const text= "As a Front-end web developer leveraging a well rounded background to build a more intuitiive   user experience on the web.I have recently earned a certificate in full stack development from the University of Miami Coding bootcamp, with newly developed skills in JavaScript, CSS,React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design, creativity and development. With each project, my aim is to best engage my audience for an impactful and intuitive user experience. I applied aspects of UX and agile development in a recent project. I worked on a team of five to develop a single-page MERN app that helps users organize and track their belongings during a move. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web"
        
    



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
