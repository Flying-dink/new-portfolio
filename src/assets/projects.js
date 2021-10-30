// List of projects for portfolio, stored here to reduce imports/clutter on portfolio page
// Import images for project cards, numbered for easier replacement
import img1 from './lips-app.jpg ';
import img2 from './myadventure.jpg ';
import img3 from './notetaker.jpg ';


// Array of project objects, ready to be iterated over using .map()
const projects = [
  {
    name: 'Read My Lips ',
    src: img1,
    alt: ' Read lips picture',
    git: 'https://flying-dink.github.io/Read-My-Lips/  ',
    
  },
  { 
    name: 'My Adventure  ',
    src: img2,
    alt: 'MyAdventure App picture  ',
    git: 'https://github.com/NukaGrizz/MyAdventure',
    live: 'https://myadventureteam.herokuapp.com/',
  },
  {
    name: 'Note Taker App',
    src: img3,
    alt: 'Note Taker app picture',
    
    live: 'https://note-taker-app-2021.herokuapp.com/',
  },
  
  ];

export default projects;