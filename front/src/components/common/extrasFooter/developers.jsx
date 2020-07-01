import React from "react";
import Typography from '@material-ui/core/Typography'; 
import { MDBIcon} from "mdbreact";
export default () => {
  return (

    <div className="my-5 px-5 pb-5 text-center">
        <div className="card-body">
          
          <Typography className="h1-responsive my-5" variant="h3" gutterBottom>
          Nuestro increíble equipo
           </Typography>
          <p className="grey-text w-responsive mx-auto mb-5">
          Cuando se habla específicamente de “equipo de desarrollo” se refiere al conjunto de personas que de manera conjunta desarrollan el producto del proyecto. Tienen un objetivo común, comparten la responsabilidad del trabajo que realizan en cada iteración y en el proyecto.
          </p>

          
          <div className="row">
          <div lg="3" md="6" className="col">
              <img
                tag="img"
                src="https://cdn.discordapp.com/attachments/712423426731540531/727919939951788073/Captura_de_pantalla_2020-07-01_a_las_13.13.37.png"                
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{height:"230px",width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Vicky</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <em  class="list-inline-item" style={{color:"grey" , marginBottom:"20px"}}>
                Aca podemos poner una breve descripcion de lo que querramos o dejamos un texto aleatorio
                </em>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </div>

            <div lg="3" md="6" className="col">
              <img
                tag="img"
                src="https://avatars2.githubusercontent.com/u/61799168?s=460&u=43fc727444f7de0ca0c1441c1d0099dcd0e142c5&v=4"                className="rounded-circle z-depth-1 img-fluid"
                style={{height:"230px",width:"200px"}}
                alt="Sample avatar"
                style={{height:"230px",width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Bruno</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <em  class="list-inline-item" style={{color:"grey" , marginBottom:"20px"}}>
                Aca podemos poner una breve descripcion de lo que querramos o dejamos un texto aleatorio
                </em>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </div>
            <div lg="3" md="6" className="col">
              <img
                tag="img"
                src="https://cdn.discordapp.com/attachments/708038502662537217/727920740883759114/WhatsApp_Image_2020-04-27_at_10.28.28_AM.jpeg"                
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{height:"230px",width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Bauti</h5>
              <p className="text-uppercase blue-text">Backend Developer</p>
              <em  class="list-inline-item" style={{color:"grey" , marginBottom:"20px"}}>
                Aca podemos poner una breve descripcion de lo que querramos o dejamos un texto aleatorio
                </em>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </div>

            <div lg="3" md="6" className="col">
              <img
                tag="img"
                src="https://cdn.discordapp.com/attachments/708038502662537217/727920740883759114/WhatsApp_Image_2020-04-27_at_10.28.28_AM.jpeg"                
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{height:"230px",width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Gastivi</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <em  class="list-inline-item" style={{color:"grey" , marginBottom:"20px"}}>
                Aca podemos poner una breve descripcion de lo que querramos o dejamos un texto aleatorio
                </em>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </div>

            <div lg="3" md="6" className="col">
              <img
                tag="img"
                src="https://avatars2.githubusercontent.com/u/61799168?s=460&u=43fc727444f7de0ca0c1441c1d0099dcd0e142c5&v=4"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
                style={{height:"230px",width:"200px"}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Lucho</h5>
              <p className="text-uppercase blue-text">Backend Developer</p>
              
                <em  class="list-inline-item" style={{color:"grey" , marginBottom:"20px"}}>
                Aca podemos poner una breve descripcion de lo que querramos o dejamos un texto aleatorio
                </em>
               
             
              <ul className="list-unstyled mb-0">
                <a href="https://www.facebook.com/Lulobarone" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="https://github.com/Lucianobarone" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
  );
};

