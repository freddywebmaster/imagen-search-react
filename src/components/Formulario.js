import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({setBuscar, setPageActual}) => {
    const [busqueda, setBusqueda] = useState('');

    const [error, setError] = useState(false);
    const buscarImagenes = (e) =>{
        e.preventDefault();
        //validar
            if(busqueda.trim()===''){
                setError(true);
                return;
            }
            setError(false);
        //pasar dato al la app
        setPageActual(1);
        setBuscar(busqueda);

    }
    return ( 
        <form action="">
            <div className="row">
                <div className="form-groud col-md-8">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Busca una imagen"
                        onChange={e => setBusqueda(e.target.value)}
                    />
                </div>
                <div className="form-groud col-md-4">
                    <input 
                        type="submit" 
                        className="form-control btn btn-dark btn-block"
                        value="Buscar"
                        onClick={buscarImagenes}
                    />
                </div>
            </div>
            {
                (error) ? <Error mensaje="Escribe algo"/> : null
            }
        </form>
     );
}
 
export default Formulario;