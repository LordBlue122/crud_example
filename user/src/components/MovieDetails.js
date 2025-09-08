import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetails.css';

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [poster, setPoster] = useState(null);

    // 1. Obtener datos de la película
    useEffect(() => {
        fetch(`/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.error('Error al obtener película:', err));
    }, [id]);

    // 2. Obtener imagen desde OMDb usando IMDbID
    useEffect(() => {
    const placeholderURL = 'https://th.bing.com/th/id/R.3e77a1db6bb25f0feb27c95e05a7bc57?rik=07AQ3YRhkD3z8A&pid=ImgRaw&r=0';

    if (movie?.IMDbID) {
        fetch(`/api/omdb/image?IMDbID=${movie.IMDbID}`)
            .then(res => res.json())
            .then(data => {
                if (data.poster && data.poster !== 'N/A') {
                    setPoster(data.poster);
                } else {
                    setPoster(placeholderURL);
                }
            })
            .catch(err => {
                console.error('Error al obtener imagen:', err);
                setPoster(placeholderURL);
            });
        } else {
            setPoster(placeholderURL);
        }
    }, [movie]);

    if (!movie) return <div>Cargando...</div>;

    return (
        <div className="movie-details">
            <div className='details_main_container'>
                <div className='details_main_image_container'>
                    {poster && (
                    <img src={poster} alt={`Portada de ${movie.title}`} style={{ width: '200px', borderRadius: '8px', marginBottom: '1rem' }} />)}
                </div>
                <div className='centered_block'>
                    <div className='details_main_content'>
                        <div className='details_title_container'>
                            <h2>{movie.title}</h2>
                        </div>
                        <div className='details_content_container'>
                            <p><strong>Director:</strong> {movie.director}</p>
                            <p><strong>Año:</strong> {movie.year}</p>
                            <p><strong>Género:</strong> {movie.genre}</p>
                            <p><strong>Duración:</strong> {movie.duration} min</p>
                            <p><strong>Puntuación:</strong> {movie.rating}</p>
                            <p><strong>IMDbID:</strong> {movie.IMDbID}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='details_sinopsis_container'>
                <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
            </div>
            <div className='details_back_btn'>
                <button className='btn back_btn' onClick={() => navigate('/')}>Volver</button>
            </div>
        </div>
    );
}
