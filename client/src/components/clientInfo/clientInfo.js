import React from "react";
import {FaEnvelope, FaPhone, FaIdBadge} from 'react-icons/fa'


export default function ClintInfo({client}){


    return (

        <div class="col-sm-4 p-4">
            <div class="border">
             <h5 className="my-4">Client Info</h5>
             <ul className="list-group p-3">
                <li className="list-group-item">
                    <FaIdBadge className="icon" /> {client.name}
                </li>
                <li className="list-group-item">
                <FaEnvelope className="icon" /> {client.email}
                </li>
                <li className="list-group-item">
                <FaPhone className="icon" /> {client.phone}
                </li>
             </ul>
            </div> 
        </div>
    )
}