import React from "react";
import ProjectCard from "../projectCard/projectCard";
import Spinner from "../spinner/spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../utils/queries";




export default function Projects(){
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner/>;
    if (error) return <p>Error</p>;



    return (
    <div>

        {data.projects.length > 0 ? 
         <div className="row g-3">
            {data.projects.map((project) => ( 
                <ProjectCard key={project.id} project ={project}/>
            ))}
        </div>
        : 
        <h2>No Projects Created</h2>
        } 
        
    </div>
   )
}