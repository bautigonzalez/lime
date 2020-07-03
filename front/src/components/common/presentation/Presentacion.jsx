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
            <h3  style={{ fontWeight: "lighter", fontSize: "50px", fontFamily: "Gill Sans, sans-serif", opacity:'0.7' }}>Nuevos celulares</h3>
            <h4 style={{ fontWeight: "lighter", fontSize: "20px", fontFamily: "Gill Sans, sans-serif", opacity: '0.7' }}>Hasta 15% OFF</h4>
            <Button variant="outline-dark" style={{ borderRadius: "20px", color: "white", borderColor: "white", opacity: '0.7'}}>Ver mas</Button>
            </div>
        </Carousel.Item>
        <Carousel.Item >
        <div class="parallax2"></div>
           <div class="carousel-caption" style={{color:"white", position:"relative", top:"-438px" , left:"522px", zIndex:"1"}}>
         
            <h3 style={{ fontWeight: "lighter", fontSize: "50px", fontFamily: "Gill Sans, sans-serif", opacity: '0.7' }}>Notebooks</h3>
            <h4 style={{ fontWeight: "lighter", fontSize: "20px", fontFamily: "Gill Sans, sans-serif", opacity: '0.7' }}>Hasta 15% OFF</h4>
            <Link to="/products"><Button variant="outline-dark" style={{ borderRadius: "20px", color: "white", borderColor: "white", opacity: '0.7'}}>Ver mas</Button></Link>

            </div>
        </Carousel.Item>
      </Carousel>
    </div>


    <Card className="text-center">
 

      <Card.Body style={{ margin: "40px", marginTop: "50px", fontWeight: "lighter" }}>
    <Card.Title><i class="fa fa-truck"></i>&nbsp; ENVÍOS A TODO EL PAÍS </Card.Title>

    

        <h5 style={{ fontWeight: "lighter", color:'black' }}>
          <Link style={{ textDecoration: 'none', color:'black' }} to='/contact'> Consultá el precio por envío a domicilio</Link>
    </h5>
  </Card.Body>




 

  <div className="container" style={{marginBottom:"30px"}}>
  <CardDeck style={{margin:"35px" , marginBottom:"60px"}}>
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
              <button type="button" className="btn btn-light" >Ver más</button>
    </Card.Footer>
  </Card>
  <Card className="seleccion">
            <Card.Img variant="top" src="https://static.mercadoshops.com/celular-samsung-galaxy-note-negro-smn950f_iZ1032053441XsZ2843902XpZ1XfZ2843902-64755381122-2XvZgrandexIM.jpg?v=20200429_104107" />
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
              <button type="button" className="btn btn-light" >Ver más</button>
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
              <button type="button" className="btn btn-light" >Ver más</button>
    </Card.Footer>
  </Card>
</CardDeck>
</div>

</Card>

{/* Por que elegirnos */}

      <div className="tecnologia" >
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          <Typography style={{ fontWeight: "lighter", fontSize: "30px", fontFamily: "Gill Sans, sans-serif", margin:"0px", padding:"0px"}} gutterBottom>
          Por qué elegir Lime?
      </Typography>
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        <strong style={{color:"#a7cf3c"}}>Lime</strong> es una empresa Fundada en Buenos Aires en el año 2020 con la misión de brindarle a sus clientes una experiencia unica de compra y productos de tecnología de alta gama. 
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
                <h5 style={{ fontWeight: "lighter", fontSize: "23px", fontFamily: "Gill Sans, sans-serif" }}>Seguridad </h5>
                <h5 class="lead" style={{ fontWeight: "lighter", fontSize: "19px", fontFamily: "Gill Sans, sans-serif" }}> 
                Pensamos en la seguridad de cliente por eso todos los datos estan protegidos en servidores con extrema seguridad.
                </h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3"  id="ja" className="unooo">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5  style={{ fontWeight: "lighter", fontSize: "23px", fontFamily: "Gill Sans, sans-serif" }}>Tecnologia</h5>
                <h5 class="lead" style={{ fontWeight: "lighter", fontSize: "19px", fontFamily: "Gill Sans, sans-serif" }}>
                  Ultimos modelos y las tendencias mas recientes. Todos los productos son verificados para ser entregados en su optimo rendimiento.
                </h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3" id="ja" className="unooo">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 style={{ fontWeight: "lighter", fontSize: "23px", fontFamily: "Gill Sans, sans-serif" }}>Precio</h5>
                <h5 class="lead" style={{ fontWeight: "lighter", fontSize: "19px", fontFamily: "Gill Sans, sans-serif" }}>
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