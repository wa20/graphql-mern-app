import React from "react";


export default function ProjectCard({ project }) {
 

  return (
    <>
      <div>
        <div className="card text-center my-2">
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>

            <a href={`/projects/${project.id}`} className="btn btn-primary">
              View Project
            </a>
          </div>
          <div className="card-footer text-muted">
            <p className="card-text">
              <strong>{project.status}...</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
