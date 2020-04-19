import React from 'react';
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import "./style.css"

function Footer() {
    return (
        <div className="container-fluid">
            <Navbar collapseOnSelect expand="lg" fixed="bottom" id="footer" className="fluid"> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col>
                        <Nav className="mr-auto name">  
                            <h5>Lindsay Field</h5>         
                        </Nav>
                        <Row className="icon-row">
                            <Nav.Link className="github" href="https://github.com/LMField82" target="blank"><i className="fa fa-github fa-x"></i>
                            </Nav.Link>
                            <Nav.Link className="linkedin" href="https://www.linkedin.com/in/lindsay-field-24496b119/" target="blank"><i className="fa fa-linkedin fa-x"></i>
                            </Nav.Link>
                        </Row>
                    </Col>
                    <Col>
                        <Nav className="mr-auto name">  
                            <h6>Bri Gabiola</h6>         
                        </Nav>
                        <Row className="icon-row">
                            <Nav.Link className="github" href="https://github.com/BriGab" target="blank"><i className="fa fa-github fa-x"></i>
                            </Nav.Link>
                            <Nav.Link className="linkedin" href="https://www.linkedin.com/in/briana-gabiola/" target="blank"><i className="fa fa-linkedin fa-x"></i>
                            </Nav.Link>
                        </Row>
                    </Col>
                    <Col>
                        <Nav className="mr-auto name">  
                            <h6>Hayley Budzinski</h6>         
                        </Nav>
                        <Row className="icon-row">
                            <Nav.Link className="github" href="https://github.com/hmbudzinski" target="blank"><i className="fa fa-github fa-x"></i>
                            </Nav.Link>
                            <Nav.Link className="linkedin" href="www.linkedin.com/in/hayley-budzinski" target="blank"><i className="fa fa-linkedin fa-x"></i>
                            </Nav.Link>
                        </Row>
                    </Col>
                    <Col>
                        <Nav className="mr-auto name">  
                            <h6>Caitlin Trask</h6>         
                        </Nav>
                        <Row className="icon-row">
                            <Nav.Link className="github" href="https://github.com/caitlintrask" target="blank"><i className="fa fa-github fa-x"></i>
                            </Nav.Link>
                            <Nav.Link className="linkedin" href="https://www.linkedin.com/in/caitlin-trask-735417a3/" target="blank"><i className="fa fa-linkedin fa-x"></i>
                            </Nav.Link>
                        </Row>
                    </Col>
                    <Col>
                        <Nav className="mr-auto name">  
                            <h6>Whitney Broadfoot</h6>         
                        </Nav>
                        <Row className="icon-row">
                            <Nav.Link className="github" href="https://github.com/whitneybroadfoot" target="blank"><i className="fa fa-github fa-x"></i>
                            </Nav.Link>
                            <Nav.Link className="linkedin" href="www.linkedin.com/in/wbroadfoot" target="blank"><i className="fa fa-linkedin fa-x"></i>
                            </Nav.Link>
                        </Row>
                    </Col>   
    
                </Navbar.Collapse>
            </Navbar> 
        </div>
   

    )
}
 export default Footer;


// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const Footer = () => {
//   return (
//     <MDBFooter color="bg-light" className="footer container-fluid font-small">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow id="footer-row">
//           <MDBCol id="first" className="title">
//             <h5>Lindsay Field</h5>
//           </MDBCol>
//           <MDBCol className="title">
//             <h5>Bri Gabiola</h5>
//           </MDBCol>
//           <MDBCol className="title">
//             <h5>Hayley Budzinski</h5>
//           </MDBCol>
//           <MDBCol className="title">
//             <h5>Caitlin Trask</h5>
//           </MDBCol>
//           <MDBCol className="title">
//             <h5>Whitney Broadfoot</h5>
//           </MDBCol>
//         </MDBRow>
//         <MDBRow>
//             <MDBCol>
//             <a className="github" href="https://github.com/LMField82" target="blank"><i className="fa fa-github fa-2x gitIcon"></i>
//              </a>

//              <a className="linkedin" href="https://www.linkedin.com/in/lindsay-field-24496b119/" target="blank"><i className="fa fa-linkedin fa-2x"></i>
//              </a>
//           </MDBCol>
//           <MDBCol>
//             <a className="github" href="https://github.com/BriGab" target="blank"><i className="fa fa-github fa-2x "></i>
//              </a>

//              <a className="linkedin" href="https://www.linkedin.com/in/briana-gabiola/" target="blank"><i className="fa fa-linkedin fa-2x"></i>
//              </a>
//           </MDBCol>
//           <MDBCol>
//             <a className="github" href="https://github.com/hmbudzinski" target="blank"><i className="fa fa-github fa-2x"></i>
//              </a>

//              <a className="linkedin" href="www.linkedin.com/in/hayley-budzinski" target="blank"><i className="fa fa-linkedin fa-2x"></i>
//              </a>
//           </MDBCol>
//           <MDBCol>
//             <a className="github" href="https://github.com/caitlintrask" target="blank"><i className="fa fa-github fa-2x"></i>
//              </a>

//              <a className="linkedin" href="https://www.linkedin.com/in/caitlin-trask-735417a3/" target="blank"><i className="fa fa-linkedin fa-2x"></i>
//              </a>
//           </MDBCol>
//           <MDBCol>
//             <a className="github" href="https://github.com/whitneybroadfoot" target="blank"><i className="fa fa-github fa-2x"></i>
//              </a>

//              <a className="linkedin" href="www.linkedin.com/in/wbroadfoot" target="blank"><i className="fa fa-linkedin fa-2x"></i>
//              </a>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </MDBFooter>
//   );
// }

// export default Footer; 