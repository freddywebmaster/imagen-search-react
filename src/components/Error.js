import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <p className="my-3 p-4 text-center bg-danger">
            <b>Error:</b> {mensaje}
        </p>
     );
}
 
export default Error;