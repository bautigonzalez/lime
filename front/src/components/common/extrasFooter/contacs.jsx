import React from "react";
import { MDBInput } from "mdbreact";

export default () => {
  return (
    <div className="container">
    <section className="my-5"style={{paddingTop:"2px"}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5" >
        Contacto 
      </h2>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body" >
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <p icon="envelope" />Escríbanos:
                </h3>
              </div>
              <p className="dark-grey-text">
                Contestaremos al instante!
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Su nombre"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Su email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Consulta"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
              <button type="button" class="btn btn-outline-info">Enviar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col" lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
              
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9290.085573430219!2d-58.44776765215092!3d-34.5904725389199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78546381071fb889!2sPlataforma%205!5e0!3m2!1ses-419!2sar!4v1593225589784!5m2!1ses-419!2sar"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <div className="row text-center" style={{padding:"10px"}}> 

          <div className="col" md="4" >
              <h1>&#x1f4de;</h1>
              <p >011 7360-3369</p>
            </div>

            <div className="col" md="4">
              <h1>&#128205;</h1>
              <p >P5</p>
            </div>


            <div className="col" md="4" >
              <h1> &#x2709;&#xfe0f;</h1>
              <p className="mb-md-0">@plataforma5.la</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
