import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditMovie.css';

export default function EditMovie() {
    const { id } = useParams();
    const navigate = useNavigate();
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

    useEffect(() => {
        fetch(`http://localhost:4000/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setForm({
                title: data.title || '',
                director: data.director || '',
                year: data.year || '',
                genre: data.genre || '',
                duration: data.duration || '',
                rating: data.rating || '',
                synopsis: data.synopsis || '',
                IMDbID: data.IMDbID || ''
            }));
    }, [id]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch(`http://localhost:4000/api/movies/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
            });
        if (res.ok) {
            navigate('/');
        }
    };

    return (
        <div className="edit_content">
            <div className="edit_content_container">
                <div className="title_container">
                    <h2>Editar Datos</h2>
                </div>
                <div className="form_container">
                    <form className="form_edit" onSubmit={handleSubmit}>
                        <h3>Titulo</h3>
                        <input name="title" placeholder="Título" value={form.title} onChange={handleChange} required />
                        <h3>Director</h3>
                        <input name="director" placeholder="Director" value={form.director} onChange={handleChange} />
                        <h3>Año de lanzamiento</h3>
                        <input name="year" type="number" placeholder="Año" value={form.year} onChange={handleChange} />
                        <h3>Genero</h3>
                        <input name="genre" placeholder="Género" value={form.genre} onChange={handleChange} />
                        <h3>Duración (min)</h3>
                        <input name="duration" type="number" placeholder="Duración" value={form.duration} onChange={handleChange} />
                        <h3>Calificación</h3>
                        <input name="rating" type="number" min="0" max="10" step="0.1" placeholder="Puntuación" value={form.rating} onChange={handleChange} />
                        <h3>Sinopsis</h3>
                        <input name="synopsis" placeholder="Sinopsis" value={form.synopsis} onChange={handleChange} />
                        <h3>IMDb ID</h3>
                        <input name="IMDbID" placeholder='IMDbID' value={form.IMDbID} onChange={handleChange} />
                        <div className="btn_container btn_submit_container">
                            <button className="btn_edit btn" type="submit">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}