import React from "react";


export default function ProjectCard({ project }) {
 
  return (
    <>
      <div className="col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title my-2">{project.name}</h5>

            <a href={`/project/${project.id}`} className="btn btn-sm w-50 btn-secondary mt-4">
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
