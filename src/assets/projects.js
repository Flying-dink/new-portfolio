// List of projects for portfolio, stored here to reduce imports/clutter on portfolio page
// Import images for project cards, numbered for easier replacement
import img1 from './ 2021-07-29(2).png ';
import img2 from './ 2021-09-22 (3).png ';
import img3 from './ 2021-08-29(2).png ';
import img4 from './  ';
import img5 from './  ';
import img6 from './  ';

// Array of project objects, ready to be iterated over using .map()
const projects = [
  {
    name: 'Read My Lips ',
    src: img1,
    alt: ' Red lips picture',
    git: 'https://flying-dink.github.io/Read-My-Lips/  ',
    live: '  ',
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
    git: '',
    live: 'https://note-taker-app-2021.herokuapp.com/',
  },
  {
    name: '',
    src: img4,
    alt: '',
    git: '',
    live: '',
  },
  {
    name: '',
    src: img5,
    alt: '',
    git: '',
    live: '',
  },
   {
    name: '',
    src: img6,
    alt: '',
    git: '',
    live: '',
  },
 2021-09-22 (3).png];

export default projects;