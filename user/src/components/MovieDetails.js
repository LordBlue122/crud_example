import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [poster, setPoster] = useState(null);

    // 1. Obtener datos de la película
    useEffect(() => {
        fetch(`http://localhost:4000/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.error('Error al obtener película:', err));
    }, [id]);

    // 2. Obtener imagen desde OMDb usando IMDbID
    useEffect(() => {
        if (movie?.IMDbID) {
            fetch(`http://localhost:4000/api/omdb/image?IMDbID=${movie.IMDbID}`)
                .then(res => res.json())
                .then(data => setPoster(data.poster))
                .catch(err => console.error('Error al obtener imagen:', err));
        }
    }, [movie]);

    if (!movie) return <div>Cargando...</div>;

    return (
        <div className="movie-details">
            <button onClick={() => navigate('/')}>Volver</button>
            <h2>{movie.title}</h2>
            {poster && (
                <img
                    src={poster}
                    alt={`Portada de ${movie.title}`}
                    style={{ width: '200px', borderRadius: '8px', marginBottom: '1rem' }}
                />
            )}
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Año:</strong> {movie.year}</p>
            <p><strong>Género:</strong> {movie.genre}</p>
            <p><strong>Duración:</strong> {movie.duration} min</p>
            <p><strong>Puntuación:</strong> {movie.rating}</p>
            <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
            <p><strong>IMDbID:</strong> {movie.IMDbID}</p>
        </div>
    );
}
