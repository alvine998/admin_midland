import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Topnav = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Admin Midland-Properti</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard" className={props.home ? "active" : ""}>Home</Nav.Link>
              <Nav.Link href="/banner" className={props.banner ? "active" : ""}>Banner</Nav.Link>
              <Nav.Link href="/highlight" className={props.promo ? "active" : ""}>Promo</Nav.Link>
              <NavDropdown title="Cluster" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cluster/warakas">Warakas</NavDropdown.Item>
                <NavDropdown.Item href="/cluster/swasembada">
                  Swasembada
                </NavDropdown.Item>
                <NavDropdown.Item href="/cluster/cilincing">
                  Cilincing
                </NavDropdown.Item>
                <NavDropdown.Item href="/cluster/papanggo">
                  Papanggo
                </NavDropdown.Item>
                <NavDropdown.Item href="/cluster/bahari">
                  Bahari
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/tambah-cluster">
                  Tambah Cluster
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item href="/setting/hubungi">Info Hubungi</NavDropdown.Item>
                <NavDropdown.Item href="/setting/rekrutmen">
                  Rekrutmen Karir
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/cluster/cilincing">
                  Cilincing
                </NavDropdown.Item>
                <NavDropdown.Item href="/cluster/papanggo">
                  Papanggo
                </NavDropdown.Item>
                <NavDropdown.Item href="/cluster/bahari">
                  Bahari
                </NavDropdown.Item> */}
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="/cluster/warakas">
                  Tambah Cluster
                </NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Link href="/login">Logout</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topnav;
