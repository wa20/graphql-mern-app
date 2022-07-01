import React from "react";
import { useMutation } from "@apollo/client"; 
import {DELETE_CLIENT} from '../../utils/mutations'


export default function ClientRow({client}){

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        //here we tell it what it is we are trying to delete
        variables: {id: client.id}
    })

    return (
        <>
         <tr>
             <td>{client.name}</td>
             <td>{client.email}</td>
             <td>{client.phone}</td>
             <td>
               <button type="button" className="btn btn-danger btn-sm"
                   onClick={deleteClient}>
                       DELETE
                </button>  
             </td>
         </tr>
        </>

    )

}