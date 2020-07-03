import React from 'react'
import "./presentacion.css";
import {Link} from "react-router-dom"
import { Carousel, Card ,Button , CardDeck} from "react-bootstrap";
import { MDBIcon , MDBRow , MDBCol} from "mdbreact";
import Typography from '@material-ui/core/Typography'; 

export default ({username})=>{

return( 
  
<div >


<div >
      <Carousel style={{height:"516px",zIndex:"1"}}>
        <Carousel.Item  >
         
<div class="container-fluid" style={{paddingLeft:'0px' , paddingRight:'0px' ,backgroundColor:"black", height:"656"}}>
		<div class="parallax" ></div>
	</div>
          <div class="carousel-caption" style={{color:"white", position:"relative", top:"-389px" , left:"-376px", zIndex:"1"}}>
          <h3 className="texto">Poner algo aca</h3>
                <h4>OFERTAS DE HASTA 25%</h4>
                <Button variant="outline-dark" style={{borderRadius:"20px",color:"white", borderColor:"white"}}>Mas info</Button>
            </div>
        </Carousel.Item>
        <Carousel.Item >
        <div class="parallax2"></div>
           <div class="carousel-caption" style={{color:"white", position:"relative", top:"-438px" , left:"522px", zIndex:"1"}}>
         
                <h3 className="texto2">Notebooks</h3>
            <Link to="/products"><Button variant="outline-dark" style={{ borderRadius: "20px", color:"white", borderColor:"white"}}>Ver mas</Button></Link>

            </div>
        </Carousel.Item>
      </Carousel>
    </div>


    <Card className="text-center">
 

      <Card.Body style={{ margin: "40px", marginTop: "50px", fontWeight: "lighter" }}>
    <Card.Title><i class="fa fa-truck"></i>&nbsp; ENVÍOS A TODO EL PAÍS </Card.Title>

    

        <h5 style={{ fontWeight: "lighter" }}>
  Consultá el precio por envío a domicilio
    </h5>
    <Link to='/contact'> <Button variant="outline-info" style={{margin:"10px"}}>Información</Button>   </Link>
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
    <button type="button" class="btn btn-outline-success">Ver más</button>
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
              <button type="button" class="btn btn-outline-success">Ver más</button>
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
              <button type="button" class="btn btn-outline-success">Ver más</button>
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





  </div>
)

}