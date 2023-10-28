import React from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center flex-column  mt-5' style={{width:'100%',height:'300px',backgroundColor:'#A62F03'}}>
    <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
        <div className='website d-flex flex-column ' style={{width:'400px'}}>
            <h5 style={{height:'50px'}}> <i className="fa-brands fa-stack-overflow text-info fa-bounce me-2"></i>RESTAURANT</h5>
        <p className='text-black'>
          Bootstrap
  Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
  Code licensed MIT, docs CC BY 3.0.
  Currently v5.3.2.
        </p>
        </div>
        <div className='d-flex flex-column'>
            <h5 style={{height:'50px'}} className='text-white'>Links</h5>
            <Link to={"/ "} style={{textDecoration:"none"}} className='text-black fw-bold' >Home</Link>
            <Link to={"/login "} style={{textDecoration:"none"}} className='text-black fw-bold' >Login</Link>
            <Link to={"/register"} style={{textDecoration:"none"}} className='text-black fw-bold'  >Register</Link>
        </div>
        <div className='d-flex flex-column'>
        <h5 style={{height:'50px'}} className='text-white'>Guides</h5>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:"none"}} className='text-black fw-bold' >React</Link>
        <Link to={'https://bootswatch.com/'}style={{textDecoration:"none"}} className='text-black fw-bold' >React Bootstrap</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:"none"}} className='text-black fw-bold' >Routing</Link>
        </div>
        <div>
              <h6 className='fw-bolder text-white'>Subscribe to Newsletter</h6>
              <Form className='d-inline'>
                <Row>
               < Col lg={8}>
                    <Form.Group controlId="email" className='bg-white px-5 rounded'>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                  </Col>
                  <Col >
                    <Button className=' text-white' type="submit" style={{background:'#305695'}}>
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
        -
    </div>
    <p className='mt-5 text-secondary'>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>

</div></>
  )
}

export default Footer