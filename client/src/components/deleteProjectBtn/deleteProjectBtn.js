import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from "../../utils/mutations";
import { GET_PROJECTS } from "../../utils/queries";
import { useMutation } from "@apollo/client";





export default function DeleteProjectBtn({projectId}){

  const navigate = useNavigate()  
  const [deleteProject] = useMutation(DELETE_PROJECT, {
      variables: { id: projectId },
      //this will allow us to navigate to homepage once compeleted
      onCompleted: () => navigate('/'),
      refetchQueries: [{query: GET_PROJECTS}],

    //   update(cache, { data: { deleteProject } }) {
    //     const { projects } = cache.readQuery({
    //       query: GET_PROJECTS,
    //     });

    //     cache.writeQuery({
    //       query: GET_PROJECTS,

    //       data: {
    //         projects: projects.filter(
    //           (project) => project.id !== deleteProject.id
    //         ),
    //       },
    //     });
    //   },
    });

    return(
        <div className="d-flex mt-5 ms-auto justify-content-center align-items-center">
        
        <button type="button" class="btn btn-sm btn-secondary" onClick={deleteProject}>
            <FaTrash className="icon"/>
            Delete Project
            </button>
        
        
        </div>
    )
}