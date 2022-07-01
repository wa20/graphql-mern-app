import React from "react";
//importing the use mutation hook
import { useMutation } from "@apollo/client"; 
import {DELETE_CLIENT} from '../../utils/mutations'
import { GET_CLIENTS } from "../../utils/queries";



export default function ClientRow({client}){

    
    
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        //here we tell it what it is we are trying to delete
        variables: {id: client.id},
        //two methods to refresh the query, 1st is to refresh the query and 2nd is to update the cache
        //1 - refetch query: this is ok for low level fetches, but if you are fetching alot then it will start to bog down the app
        // refetchQueries: [{query: GET_CLIENTS}]

        //2 - update the cache
        update(cache, {data: {deleteClient}}){
            //here we get the query from the cache
            const { clients } = cache.readQuery({
                query: GET_CLIENTS
            })
            //below we write to cache with writeQuery
            cache.writeQuery({
                query: GET_CLIENTS,
                //below we filter out the client we want to delete.  
                data: {clients: clients.filter(client => client.id !== deleteClient.id)}
            })
        }

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