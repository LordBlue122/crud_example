import React from 'react';
import './MovieForm.css';

export default function MovieForm({ form, handleChange, handleSubmit }) {
    return (
        <div className='container'>
            <form className="form_add" onSubmit={handleSubmit}>
                <h2>Titulo:</h2><input name="title" placeholder="Título" value={form.title} onChange={handleChange} required />
                <h2>Director:</h2><input name="director" placeholder="Director" value={form.director} onChange={handleChange} />
                <h2>Año de Lanzamiento:</h2><input name="year" type="number" placeholder="Año" value={form.year} onChange={handleChange} />
                <h2>Genero:</h2><input name="genre" placeholder="Género" value={form.genre} onChange={handleChange} />
                <h2>Duración (min):</h2><input name="duration" type="number" placeholder="Duración" value={form.duration} onChange={handleChange} />
                <h2>Calificación:</h2><input name="rating" type="number" min="0" max="10" step="0.1" placeholder="Puntuación" value={form.rating} onChange={handleChange} />
                <h2>Sinopsis:</h2><input name="synopsis" placeholder="Sinopsis" value={form.synopsis} onChange={handleChange} />
                <br></br>
                <div className='btn_container'>
                    <button className="btn_submit" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}