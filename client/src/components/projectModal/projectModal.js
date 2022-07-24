import React from "react";
import { Falist } from "react-icons/fa";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
// import { ADD_PROJECT} from "../../utils/mutations";
import { GET_PROJECTS, GET_CLIENTS } from "../../utils/queries";
import { ADD_PROJECT } from "../../utils/mutations";

export default function AddProjectBtn() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("New");
 
  const [addProject] = useMutation(ADD_PROJECT, {
      variables: {name, description, status, clientId},

      update(cache, {data: {addProject}}){
          const {projects } = cache.readQuery({
              query: GET_PROJECTS
          })

          cache.writeQuery({
              query: GET_PROJECTS,
              // below we concat new data to exisitng data using spread operator, or we can use this data: {clients: clients.concat([addClient])}
              data: {projects: [...projects, addProject]}
          })
      }
  })

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("please input details");
    }

    addProject(name, description, status);
    setName("");
    setDescription("");
    setStatus("");
  };

  if (loading) return null;
  if (error) return "Error";

  return (
    <div>
      {!loading && !error && (
        <>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-sm w-70 btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModel"
          >
            Add New Project
          </button>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="addProjectModel"
            aria-labelledby="addProjectModelLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addProjectModelLabel">
                    Add New Project
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name:</label>
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">description:</label>
                      <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">status</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        id="status"
                        vlaue={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        {/* <option selected>Select Status</option> */}
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                      {/* <input className="form-control" type="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input> */}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Clients</label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        id="clientId"
                        vlaue={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option selected>Select Client</option>
                         {data.clients.map((client) => (
                        <option key={client.id} value={client.id}>{client.name}</option>
                         ))}
                      </select>
                      {/* <input className="form-control" type="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input> */}
                    </div>

                    <div className="modal-footer">
                      {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button> */}
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
