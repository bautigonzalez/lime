import React from 'react'
import "./presentacion.css";
import {Link} from "react-router-dom"
import { Carousel, Card ,Button , CardDeck} from "react-bootstrap";
import { MDBIcon , MDBRow , MDBCol} from "mdbreact";
import Typography from '@material-ui/core/Typography'; 

export default ({username})=>{
console.log(username)
return( 
  
<div >

    <div >
      <Carousel style={{height:"600px"}}>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/banner-hero-giveback-support.image.large_2x.jpg" 
            style={{height:"600px"}}
          />
          <div class="carousel-caption" style={{color:"black", position:"relative", top:"-360px" , left:"-500px"}}>
          <h3>Los mejores accesorios</h3>
                <p>OFERTAS DE HASTA 50%</p>
                <Button variant="outline-dark" style={{borderRadius:"20px"}}>Mas info</Button>
            </div>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/banner-hero-app-store.image.large_2x.jpg"
            style={{height:"600px"}}
          />
           <div class="carousel-caption" style={{color:"black", position:"relative", top:"-500px" , left:"-400px"}}>
         
                <h3>Notebooks Y Smarphones</h3>
                <p>ULTIMOS MODELOS DISPONIBLES</p>
            <Link to="/products"><Button variant="outline-dark" style={{ borderRadius: "20px" }}>Ver mas</Button></Link>
            </div>
        </Carousel.Item>
      </Carousel>
    </div>


    <Card className="text-center">
 

  <Card.Body style={{margin:"40px" , marginTop:"100px"}}>
    <Card.Title><i class="fa fa-truck"></i>&nbsp; ENVIO A TODO EL PAIS </Card.Title>

    

    <h5 class="lead">
  Para consultar el precio por envio a domicilio ingresa Aqui
    </h5>
    <Link to='/contact'> <Button variant="outline-info">Informacion</Button>   </Link>
  </Card.Body>




 

  <div className="container" style={{marginBottom:"55px"}}>
  <CardDeck style={{margin:"35px" , marginBottom:"100px"}}>
  <Card className="seleccion">
    <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJA2?wid=445&hei=445&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1580420177108" />
    <Card.Body>
      <Card.Title>ACCESORIOS</Card.Title>
      <Card.Text>
       
        <Typography variant="overline" display="block" gutterBottom>
        This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Typography>
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button type="button" class="btn btn-outline-success">VER OFERTAS</button>
    </Card.Footer>
  </Card>
  <Card className="seleccion">
    <Card.Img variant="top" src="https://personal.vteximg.com.br/arquivos/ids/401504-275-275/Samsung-Galaxy-S20-Plus-Cosmic-Black-VPlan-20GB-Black-1-1223579.jpg?v=637280808090530000" />
    <Card.Body>
      <Card.Title>CELULARES</Card.Title>
      <Card.Text>
      <Typography variant="overline" display="block" gutterBottom>
      This card has supporting text below as a natural supporting lead-in to additional
        content
      </Typography>
   
   
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button type="button" class="btn btn-outline-success">VER OFERTAS</button>
    </Card.Footer>
  </Card>
  <Card className="seleccion">
    <Card.Img variant="top" src="https://store.hp.com/app/assets/images/product/3MU06UA%23ABA/center_facing.png?_=1552332984150&imwidth=430&imdensity=1" style={{padding:"15px", marginBottom:"50px"}}/>
    <Card.Body>
      <Card.Title>NOTEBOOKS</Card.Title>
      <Card.Text>
      <Typography variant="overline" display="block" gutterBottom>
      This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Typography>
     
     
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button type="button" class="btn btn-outline-success">VER OFERTAS</button>
    </Card.Footer>
  </Card>
</CardDeck>
</div>

</Card>


{

<div style={{height:"500px"}}>
        <div >
          <img
            className="d-block w-100"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp-hero-banner-safari.image.large_2x.jpg"
            style={{height:"480px", zIndex:"-50"}}
            
          />
           <div class="carousel-caption" style={{color: "white",position: "relative",top: '-437px',left: '-25px',borderRadius:'15px',backgroundColor: 'rgb(159, 159, 161)',width:'460px', height:"170px" , zIndex:'1', boxShadow:"6px 6px 19px -1px black"}}>
              {username? (  <div> <h1 style={{margin:"9px"}}>LO ULTIMO!</h1>
                <p style={{margin:"11px" , marginLeft:"37px"}}>Descuento en productos de la categoria Notebooks de hasta <strong>{username.split("@").shift().length-1}0%</strong></p></div> ) :( <div> <h1 style={{margin:"9px"}}>LO ULTIMO!</h1>
                <p style={{margin:"11px" , marginLeft:"37px"}}>Descuento en productos de la categoria Notebooks
                </p>
            </div>   )}
            </div>




            <div class="carousel-caption" style={{color: "black",position: "relative",top: '-440px',left: '-140px',borderRadius:'15px',backgroundColor: 'white',width:'460px', height:"120px" , zIndex:'1',boxShadow:"2px 1px 16px 2px black"}}>
              {username? (  <div style={{marginTop:'7px'}}> <h4 style={{marginLeft:"162px"}}><p><small>APURATE&nbsp;{username.split("@").shift().toUpperCase()}! </small></p></h4>
            <Link to="/products"><Button variant="outline-secondary" style={{ borderRadius: "20px" , marginLeft:"162px" }}>Comprar</Button></Link></div> ) :
            ( <div> <h3 style={{marginLeft:"162px"}}> <p><small>APURATE </small></p></h3>
        
            <Link to="/user/login"><Button variant="outline-secondary" style={{ borderRadius: "20px" , marginLeft:"162px"}}>Ingresa</Button></Link></div>   )}
           
            </div>
        </div>
      </div>
 }



      <div className="tecnologia">
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          <Typography variant="h3" gutterBottom>
          Por que elegirnos ?
      </Typography>
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        <strong style={{color:"#a7cf3c"}}>Lime</strong> es una empresa Fundada en Buenos Aires en el año 2020 con un sola mision, siempre pensando en la sastifacion del cliente, nosotros estamos comprometidos a que tenga una experiencia unica de compra. 
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
              style={{marginTop:"50px"}}
              
            />
          </MDBCol>
          <MDBCol lg="7" >
            <MDBRow className="mb-3" id="ja" className="unooo">
              <MDBCol size="1" >
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10" >
                <h5 className="font-weight-bold mb-3">Seguridad </h5>
                <h5 class="lead"> 
                Pensamos en la seguridad de cliente por eso todos los datos estan protegidos en servidores con extrema seguridad.
                </h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3"  id="ja" className="unooo">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Tecnologia</h5>
                <h5 class="lead">
                  Ultimos modelos y las tendencias mas recientes. Todos los productos son verificados para ser entregados en su optimo rendimiento.
                </h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3" id="ja" className="unooo">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Precio</h5>
                <h5 class="lead">
                 Ofertas y descuentos increibles para cada cliente, con una gran variedad de medios de pagos y cuotas.
                </h5>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
 </div>


 <hr className="solid"/>
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
                src="https://avatars2.githubusercontent.com/u/61799168?s=460&u=43fc727444f7de0ca0c1441c1d0099dcd0e142c5&v=4"                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
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
                alt="Sample avatar"
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
                src="https://avatars2.githubusercontent.com/u/61799168?s=460&u=43fc727444f7de0ca0c1441c1d0099dcd0e142c5&v=4"                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
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
                src="https://avatars2.githubusercontent.com/u/61799168?s=460&u=43fc727444f7de0ca0c1441c1d0099dcd0e142c5&v=4"                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
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

  </div>
)

}