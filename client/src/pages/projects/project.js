import React from "react";
import { Link, useParams } from "react-router-dom";
import ClintInfo from "../../components/clientInfo/clientInfo";
//useParams is used here baceasue we want to get the id from the url of page

import Spinner from "../../components/spinner/spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../utils/queries"; 

export default function Projects() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;

  return (
    <>
      <div className="component mt-5">
        {!loading && !error && (
          // <div className="mx-auto w-75 card p-5">
          //     <Link to='/' className="btn btn-light btn-sm w-25 d-inline ms-auto">Back</Link>
          //     <h1>{data.project.name}</h1>
          //     <p>{data.project.descripton}</p>

          //     <h5 className="mt-3">Project Status</h5>
          //     <p className="lead">{data.project.status}</p>
          // </div>

          <div class="card text-center">
            <div class="card-header">Project</div>
            <div class="card-body">
              <h5 class="card-title">{data.project.name}</h5>
              <p class="card-text">{data.project.description}</p>
              <Link
                to="/"
                className="btn btn-primary btn-sm w-25 d-inline ms-auto">
                Back
              </Link>
            </div>
            <div class="card-footer text-muted">{data.project.status}</div>

            <div className="row">
                <ClintInfo client={data.project.client}/>
            </div>
            
          </div>
        )}
      </div>
    </>
  );
}
