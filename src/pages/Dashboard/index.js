import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  ListGroup,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Tab,
} from "react-bootstrap";
import Topnav from "../../components/TopNav";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Topnav/>
        <div className="texting">
          <h2>Welcome, Admin Midland Properti</h2>
        </div>
        {/* <Row>
          <Col> */}
            {/* Sidebar */}
            {/* <div className="sidebar d-grid gap-2">
              <ButtonGroup vertical>
                <Button variant="outline-secondary" active href="/dashboard">Home</Button>
                <Button variant="outline-success" href="/banner">Banner</Button>
                <Button variant="outline-warning" href="/highlight">Highlight Promo</Button>
                <Button variant="outline-primary" href="/property">Property</Button>
                <Button variant="outline-danger" href="/login">Logout</Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col> */}
            {/* Main Content */}
            
          {/* </Col>
        </Row> */}
      </div>
    );
  }
}
