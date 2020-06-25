import React from 'react'
import "./presentacion.css";
import { Carousel, Card ,Button , CardDeck , Badge} from "react-bootstrap";

export default ()=>{

return( 
  
<div >

    <div >
      <Carousel style={{height:"600px"}}>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/banner-hero-app-store.image.large_2x.jpg"
            style={{height:"600px"}}
            
          />
           <div class="carousel-caption" style={{color:"black", position:"relative", top:"-500px" , left:"-400px"}}>
         
                <h3>Notebooks Y Smarphones</h3>
                <p>ULTIMOS MODELOS DISPONIBLES</p>
                <Button variant="outline-dark" style={{borderRadius:"20px"}}>Ver mas</Button>
            </div>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/banner-hero-giveback-support.image.large_2x.jpg" 
            style={{height:"600px"}}
          />
          <div class="carousel-caption" style={{color:"black", position:"relative", top:"-300px" , left:"-500px"}}>
          <h3>Los mejores accesorios</h3>
                <p>OFERTAS DE HASTA 50%</p>
                <Button variant="outline-dark" style={{borderRadius:"20px"}}>Mas info</Button>
            </div>
        </Carousel.Item>
      </Carousel>
    </div>


    <Card className="text-center">
 

  <Card.Body style={{margin:"40px" , marginTop:"100px"}}>
    <Card.Title><i class="fa fa-truck"></i>&nbsp; Envios a todo el Pais </Card.Title>
    <Card.Text>
      Para consultar el precio por envio a domicilio ingresa al siguiente link 
    </Card.Text>
    <Button variant="outline-info">Informacion</Button>
  </Card.Body>






  <div className="container" style={{marginBottom:"55px"}}>
  <CardDeck style={{margin:"35px" , marginBottom:"100px"}}>
  <Card>
    <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJA2?wid=445&hei=445&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1580420177108" />
    <Card.Body>
      <Card.Title>Accesorios</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button type="button" class="btn btn-outline-success">VER OFERTAS</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://personal.vteximg.com.br/arquivos/ids/401504-275-275/Samsung-Galaxy-S20-Plus-Cosmic-Black-VPlan-20GB-Black-1-1223579.jpg?v=637280808090530000" />
    <Card.Body>
      <Card.Title>Celulares</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button type="button" class="btn btn-outline-success">VER OFERTAS</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://store.hp.com/app/assets/images/product/3MU06UA%23ABA/center_facing.png?_=1552332984150&imwidth=430&imdensity=1" style={{padding:"15px", marginBottom:"50px"}}/>
    <Card.Body>
      <Card.Title>Notebooks</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content..
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button type="button" class="btn btn-outline-success">VER OFERTAS</button>
    </Card.Footer>
  </Card>
</CardDeck>
</div>

</Card>

  </div>
)

}