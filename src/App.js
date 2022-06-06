import {useState, useEffect} from 'react';
import './App.css';
import AddMovie from './AddMovie'

function App() {
   
  return (
    <div className="App">
      <AddMovie/>
      
    </div>
  );
}

export default App;

// function App() {

//   const [movies, setMovies] = useState([])
//   useEffect (() => {
//     setMovies([
//       {
//         name:'Billions',
//         genre: 'Drama',
//         starring: 'Damian Lewis, Paul Giamatt',
//       },
//       {
//         name:'Sarafina',
//         genre: 'drama',
//         starring: 'Leleti Khumalo',
//       },
    
//     ])
//   }, [])
//   return (
//     <div className="App">
//       {/* const {movies} = movies */}
//       {movies.map((movie, index) => {
//         return(
//           <div className="movies">
//             <h2>{movie.name}</h2>
//             <h3>{movie.genre}</h3>
//             <h4>{movie.starring}</h4>
//           </div>
//         )
//       }
//       )}
//     </div>
//   ); 
// }; 

// export default App;