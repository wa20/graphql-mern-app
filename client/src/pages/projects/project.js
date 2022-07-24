import React from "react";
import { Link, useParams } from "react-router-dom";
import ClientInfo from "../../components/clientInfo/clientInfo";
//useParams is used here baceasue we want to get the id from the url of page

import Spinner from "../../components/spinner/spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../utils/queries";
import DeleteProjectBtn from "../../components/deleteProjectBtn/deleteProjectBtn";

export default function Projects() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;

  return (
    <>
      <div className="component mt-5">
        {!loading && !error && (
          <div class="card text-center">
            <div class="card-header">Project</div>
            <div class="card-body">
              <h5 class="card-title">{data.project.name}</h5>
              <p class="card-text">{data.project.description}</p>
              <Link
                to="/"
                className="btn btn-primary btn-sm w-25 d-inline ms-auto"
              >
                Back
              </Link>
              <div className="d-grid gap-2 d-md-block">
                <DeleteProjectBtn projectId={data.project.id} />
              </div>
            </div>
            <div class="card-footer text-muted">{data.project.status}</div>

            <div className="row g-3">
              <ClientInfo client={data.project.client} />
            </div>
            {/* <div className="d-flex justify-content-center align-items-center"> */}

            {/* </div> */}
          </div>
        )}
      </div>
    </>
  );
}
