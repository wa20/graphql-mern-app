import React from "react";
import Header from "../../components/header/header";
import Clients from "../../components/clients/clients";
import Projects from "../../components/projects/projects";
import AddClientBtn from "../../components/clientModal/clientModal";
import AddProjectBtn from "../../components/projectModal/projectModal";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className=" d-flex align-items-center flex-column container my-5">
        <div className="container row mt-5">
          <Projects />
        </div>
        <div className=" my-4 d-flex align-items-center flex-column container">
          <AddProjectBtn />
        </div>
        
      </div>

      <span className="border-bottom mb-4 border-3"></span>


      <Clients />

      <div className=" d-flex align-items-center flex-column container my-5">
        <AddClientBtn />
      </div>
    </>
  );
}

export default Home;
