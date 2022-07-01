import React from "react";
//we use gql to make the query and useQuery to get the data and state
import { gql, useQuery } from "@apollo/client";
import ClientRow from "../clinetRow/clientRow";
import { GET_CLIENTS } from "../../utils/queries";
import Spinner from "../spinner/spinner";
 



export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner/>;
  if (error) return <p>Error</p>;

  return (

    <>
  
  {!loading && !error && <h2>Clients</h2>}

  <table className="table table-hover mt-3">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th></th>
    </tr>
  </thead>

  <tbody>

   {data.clients.map(client =>(
       <ClientRow key={client.id} client={client}/>
   ))}

  </tbody>


</table>
  
    </>

  ) 
}
