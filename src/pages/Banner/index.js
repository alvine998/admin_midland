import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Carousel,
  Navbar,
  NavDropdown,
  Row,
  Tab,
} from "react-bootstrap";
import Topnav from "../../components/TopNav";
import "./style.css";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Topnav banner />
        <div className="container">
          <form className="form">
            <div style={{ paddingTop: 20 }}>
              <h5 style={{ float: "left" }}>Banner 1</h5>
              <input className="form-control" type="file" />
            </div>

            <div style={{ paddingTop: 20 }}>
              <h5 style={{ float: "left" }}>Banner 2</h5>
              <input className="form-control" type="file" />
            </div>

            <div style={{ paddingTop: 20 }}>
              <h5 style={{ float: "left" }}>Banner 3</h5>
              <input className="form-control" type="file" />
            </div>

            <div style={{ paddingTop: 20 }}>
              <h5 style={{ float: "left" }}>Banner 4</h5>
              <input className="form-control" type="file" />
            </div>

            <div style={{ paddingTop: 20 }}>
              <h5 style={{ float: "left" }}>Banner 5</h5>
              <input className="form-control" type="file" />
            </div>

            {/* Preview */}
            <div style={{paddingTop:30}}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-20"
                    src="https://dummyimage.com/16:9x1080"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-20"
                    src="https://dummyimage.com/16:9x1080"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-20"
                    src="https://dummyimage.com/16:9x1080"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            {/* Simpan Button */}
            <div style={{paddingTop:30, paddingBottom:30}}>
              <a className="btn btn-primary w-100" href="#">Simpan</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
