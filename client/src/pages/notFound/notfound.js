import React from "react";
import {FaExclamationTriangle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function NotFound(){

    return(
        <>
          <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            
            <FaExclamationTriangle  className="text-danger"
            size='5em'/>
            <h1>404</h1>
            <p className="lead">Page does not exist</p>
            <Link to='/' className="btn btn-primary">
                Home
            </Link>
            
            </div>
        </>
    )
}