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
import "./style.css";

export default class Cluster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Topnav/>

       
      </div>
    );
  }
}
