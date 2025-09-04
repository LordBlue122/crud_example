import './App.css';
import React, { useEffect, useState } from 'react'
import MovieForm from './components/MovieForm'; 
import EditMovie from './components/EditMovie';
import MovieDetails from './components/MovieDetails';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

function MainPage() {
  const [peliculas, setPeliculas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: '',
    director: '',
    year: '',
    genre: '',
    duration: '',
    rating: '',
    synopsis: '',
    IMDbID: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/movies')
      .then(response => response.json())
      .then(data => setPeliculas(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      const newMovie = await res.json();
      setPeliculas([...peliculas, newMovie]);
      setForm({
        title: '',
        director: '',
        year: '',
        genre: '',
        duration: '',
        rating: '',
        synopsis: '',
        IMDbID: ''
      });
      setShowForm(false);
    } else {
      console.error('Error al agregar la película');
    }
  }

  const hadleDalete = async (id) => {
    const res = await fetch(`http://localhost:4000/api/movies/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      setPeliculas(peliculas.filter(movie => movie._id !== id));
    } else {
      console.error('Error al eliminar la película');
    }
  }

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
            <button className="btn btn_add" onClick={() => setShowForm(!showForm)}>Agregar Película</button>
          </div>
          <div className="form_container">
            { showForm && (<MovieForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />) }
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
                  <td>Acciones</td>
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
                    <td className='actions'>
                      <div className='actions_container'>
                        <button className='btn_action' onClick={() => navigate(`/edit/${movie._id}`)}><i className="fa-solid fa-file-pen" style={{ color: '#76bbe5ff', cursor: 'pointer' }}></i></button>
                        <button className='btn_action' onClick={() => hadleDalete(movie._id)}><i className="fa-solid fa-trash" style={{ color: '#e37eb2ff', cursor: 'pointer' }}></i></button>
                        <button className='btn_action' onClick={() => navigate(`/details/${movie._id}`)}><i className="fa-solid fa-square-plus" style={{color: '#7998d6ff', cursor:'pointer'}}></i></button>
                      </div>
                    </td>
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/edit/:id" element={<EditMovie />} />
      <Route path="/details/:id" element={<MovieDetails />} />
    </Routes>
  );
}