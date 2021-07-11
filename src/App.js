import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImages from './components/ListadoImages';

function App() {
  const [buscar, setBuscar] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [pageActual, setPageActual] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(()=>{
    const consultarApi = async () =>{
      if(buscar==='') return;
      const key = "21386703-d99c2529e56f0ace1c6b0edfa";
      const imgPorPagina = 20;
      const url = `https://pixabay.com/api/?key=${key}&q=${buscar}&per_page=${imgPorPagina}&page=${pageActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setImagenes(resultado.hits);

      const calcTotalPages = Math.ceil(resultado.totalHits / imgPorPagina);
      setTotalPages(calcTotalPages);

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})
    }
    consultarApi();
  },[buscar, pageActual])

  //definir pagina anterior
  const paginaAnterior = () =>{
    const newPaginaActual = pageActual - 1;
    if(newPaginaActual===0) return;
    setPageActual(newPaginaActual);
    console.log(newPaginaActual);
  }
  const paginaSiguiente = () =>{
    const newPaginaActual = pageActual + 1;
    if(newPaginaActual > totalPages) return;
    setPageActual(newPaginaActual);
    console.log(newPaginaActual);
  }

  return (
    <div className="container">
      <div className="jumbotron h-100 p-5 bg-primary text-white mt-2">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h1 className="text-center">
              Buscador de Imagenes
            </h1>
            <p>Encuentra muchas imagenes gratuitas para utilizar en tus trabajos.</p>
          </div>
          <div className="col-md-6 text-center">
            <img width="200" src="galeria.png" alt="" />
          </div>
        </div>
        <Formulario
          setBuscar={setBuscar}
          setPageActual={setPageActual}
        />
      </div>
      <div className="row justify-content-center">
        <ListadoImages imagenes={imagenes} />

        <div className="botones d-flex justify-content-center">
          {
            (pageActual > 1) ?
              <button type="button" className="btn btn-dark" onClick={paginaAnterior}>
                &laquo; Anterior
              </button>
            :null
          }
          {
            (pageActual<totalPages) ?
            <button type="button" className="btn btn-dark" onClick={paginaSiguiente}>
              Siguiente&raquo;
            </button>
            :null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
