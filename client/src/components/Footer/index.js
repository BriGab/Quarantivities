// import React from 'react';
// import { Nav, Row, Navbar, Col } from "react-bootstrap";
// import "./style.css"

// function Footer() {
//     return (
// {/* <div>
// <Navbar collapseOnSelect expand="lg" className="footer"> 
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Row>
//         <Col className="col-md">
//             <Nav className="mr-auto name">  
//                 <h4>Lindsay Field</h4>         
//             </Nav>
//             <Row>
//             <Nav.Link className="github" href="https://github.com/LMField82" target="blank"><i className="fa fa-github fa-x"></i>
//             </Nav.Link>
//             <Nav.Link className="linkedin" href="https://www.linkedin.com/in/lindsay-field-24496b119/" target="blank"><i className="fa fa-linkedin fa-x"></i>
//             </Nav.Link>
//             </Row>
//         </Col>
//         <Col className="col-md">
//             <Nav className="mr-auto name">  
//                 <h4>Bri Gabiola</h4>         
//             </Nav>
//         </Col>
//         <Col className="col-md">
//             <Nav className="mr-auto name">  
//                 <h4>Haley Budzinsky</h4>         
//             </Nav>
//         </Col>
//         <Col className="col-md">
//             <Nav className="mr-auto name">  
//                 <h4>Caitlin Trask</h4>         
//             </Nav>
//         </Col>
//         <Col className="col-md">
//             <Nav className="mr-auto name">  
//                 <h4>Whitney Broadfoot</h4>         
//             </Nav>
//         </Col>   
//     </Row>
//   </Navbar.Collapse>
// </Navbar> 
// <Navbar>
// <Row className="bottom-footer">
//         <Col className="col-md-12">
//             <div className="footer-copyright text-center py-3">© 2020 Quarantivities</div>
//         </Col>
//     </Row>
// </Navbar>
// </div> */}
   













//     )
// }
// export default Footer;


import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="gray" className="footer container-fluid font-small">
        <hr></hr>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="footer-row">
          <MDBCol>
            <h5 className="title">Lindsay Field</h5>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Bri Gabiola</h5>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Haley Budzinski</h5>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Caitlin Trask</h5>
          </MDBCol>

          <MDBCol>
            <h5 className="title">Whitney Broadfoot</h5>
          </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
            <a className="github" href="https://github.com/LMField82" target="blank"><i className="fa fa-github fa-2x"></i>
             </a>
                
             <a className="linkedin" href="https://www.linkedin.com/in/lindsay-field-24496b119/" target="blank"><i className="fa fa-linkedin fa-2x"></i>
             </a>
          </MDBCol>
          <MDBCol>
            <a className="github" href="https://github.com/BriGab" target="blank"><i className="fa fa-github fa-2x"></i>
             </a>

             <a className="linkedin" href="https://www.linkedin.com/in/lindsay-field-24496b119/" target="blank"><i className="fa fa-linkedin fa-2x"></i>
             </a>
          </MDBCol>
          <MDBCol>
            <a className="github" href="https://github.com/hmbudzinski" target="blank"><i className="fa fa-github fa-2x"></i>
             </a>

             <a className="linkedin" href="www.linkedin.com/in/hayley-budzinski" target="blank"><i className="fa fa-linkedin fa-2x"></i>
             </a>
          </MDBCol>
          <MDBCol>
            <a className="github" href="https://github.com/caitlintrask" target="blank"><i className="fa fa-github fa-2x"></i>
             </a>

             <a className="linkedin" href="https://www.linkedin.com/in/caitlin-trask-735417a3/" target="blank"><i className="fa fa-linkedin fa-2x"></i>
             </a>
          </MDBCol>
          <MDBCol>
            <a className="github" href="https://github.com/whitneybroadfoot" target="blank"><i className="fa fa-github fa-2x"></i>
             </a>

             <a className="linkedin" href="www.linkedin.com/in/wbroadfoot" target="blank"><i className="fa fa-linkedin fa-2x"></i>
             </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; Copyright 2020 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer; 