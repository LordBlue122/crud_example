import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [peliculas, setPeliculas] = useState([]); // Definir el estado

  useEffect(() => {
    fetch('http://localhost:4000/api/movies')
      .then(response => response.json())
      .then(data => setPeliculas(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <div className="App">
      <header>
        <div className="App_header">
          <h1>CRUD - Películas</h1>
        </div>
      </header>
      <main>
        <div className="content_container">
          <div className ="btn_container">
            {/* ...botones si los agregas... */}
          </div>
          <div className="table_container">
            <table>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Titulo</td>
                  <td>Director</td>
                  <td>Año</td>
                  <td>Genero</td>
                  <td>Duración (min)</td>
                  <td>Puntuación</td>
                </tr>
              </thead>
              <tbody>
                {peliculas.map((movie, index) => (
                  <tr key={movie._id} className="movie">
                    <td>{index + 1}</td>
                    <td title={movie.synopsis}>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.year}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.duration}</td>
                    <td className="puntuacion">{movie.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;