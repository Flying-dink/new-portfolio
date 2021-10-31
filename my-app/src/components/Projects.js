import readmylipsIMG from '../images/lips-app.png'
import MyadventureAppIMG from "../images/myadventure.png"
import noteTakerIMG from "../images/notetaker.png"

import "../styles/project.css"
const Projects = () => {
    return (
        <div className="project">
            <div className="projectDiv">
                <h1 className="projectTitle">Read My Lips</h1>
                <h2 className="projectTitle"><a href="https://github.com/Flying-dink/Read-My-Lips" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://flying-dink.github.io/Read-My-Lips/" target="_blank">
                    <img src={readmylipsIMG} className="projectImage" alt="Read My lips" />
                </a>
                <h3 className="projectText">Read my lips is a game wher one can read another's lips by guessing</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">MyAdventure App</h1>
                <h2 className="projectTitle"><a href="https://github.com/NukaGrizz/MyAdventure" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://myadventureteam.herokuapp.com/" target="_blank">
                    <img src={MyadventureAppIMG} className="projectImage" alt="My adventure App" />
                </a>
                <h3 className="projectText">This application is a social media site where one can post about adventures.</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Note Taker</h1>
                <h2 className="projectTitle"><a href="https://github.com/Flying-dink/Note-Taker" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://note-taker-app-2021.herokuapp.com/" target="_blank">
                    <img src={noteTakerIMG} className="projectImage" alt="note taker" />
                </a>
                <h3 className="projectText">This application allows users to create notes that will be saved to a json file instead of a database. It also allows user to delete previous notes and will update the json file with the new list of notes after each note is deleted.</h3>
            </div>
            
            </div>
        
   )
}

export default Projects