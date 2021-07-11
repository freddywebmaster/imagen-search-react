import React from 'react';

const Imagen = ({imagen}) => {
    const {largeImageURL, likes, previewURL, tags, views, downloads } = imagen;
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <div className="d-flex justify-content-around">
                    <p className="card-text">
                        {likes} <i className="fas fa-heart"></i>
                    </p>
                    <p className="card-text">
                        {views} <i className="far fa-eye"></i>
                    </p>
                    <p className="card-text">
                        {downloads} <i className="fas fa-download"></i>
                    </p>
                    </div>
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-block"
                    >
                        Descargar
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Imagen;