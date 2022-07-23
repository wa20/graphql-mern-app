import React from "react";
import Header from "../../components/header/header";
import Clients from "../../components/clients/clients";
import Projects from "../../components/projects/projects";
import AddClientBtn from "../../components/clientModal/clientModal";





function Home() {
  return (
    <>
      
          {/* <Header /> */}
          <div className=" d-flex align-items-center flex-column container my-5">
            <Projects />
            <Clients />
          </div>
          <div className=" d-flex align-items-center flex-column container my-5">
            <AddClientBtn />
          </div>
       
    </>
  );
}

export default Home;
