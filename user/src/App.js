import './App.css';

function App() {
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

            

          </div>
          <div className="table_container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Titulo</th>
                  <th>Director</th>
                  <th>Año</th>
                  <th>Genero</th>
                  <th>Duración (min)</th>
                  <th>Puntuación</th>
                </tr>
              </thead>
              <tbody>
                {/* Aquí se mapearán los usuarios */}
                <th>1</th>
                <th>Interstellar</th>
                <th>Christopher Nolan</th>
                <th>2014</th>
                <th>Sci-Fi</th>
                <th>169</th>
                <th>8.6</th>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
