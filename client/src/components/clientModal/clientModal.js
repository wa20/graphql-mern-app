import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../../utils/mutations";
import { GET_CLIENTS } from "../../utils/queries";


export default function AddClientBtn() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

   

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: {name, email, phone},

        update(cache, {data: {addClient}}){
            const {clients } = cache.readQuery({
                query: GET_CLIENTS
            })

            cache.writeQuery({
                query: GET_CLIENTS,
                // below we concat new data to exisitng data using spread operator, or we can use this data: {clients: clients.concat([addClient])}
                data: {clients: [...clients, addClient]}
            })
        }
    })


    const onSubmit = (e) => {
        e.preventDefault();
        
        if(!name || !email || !phone){
            return alert('please input details')
        }

        addClient(name, email, phone);
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <div>
        {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addClientModel">
            Add Client
            </button>

        {/* <!-- Modal --> */}
            <div className="modal fade" id="addClientModel"  aria-labelledby="addClientModelLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addClientModelLabel">Add Client</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div className="modal-body">
                    <form onSubmit={onSubmit}>  
                                    <div className="mb-3">
                                    <label className="form-label">Name:</label>
                                    <input className="form-control" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                                    </div>
                                    <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input className="form-control" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>
                                    <div className="mb-3">
                                    <label className="form-label">Phone:</label>
                                    <input className="form-control" type="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                                    </div>    
                                    <div className="modal-footer">
                                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button> */}
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                                    </div> 
                    </form>  
                </div>
                
                </div>
            </div>
            </div>
        </div>

    )
}