import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
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
        <Topnav />

        <div className="bordering" />
        <Row>
          <Col sm={4}>
            <div >
              <h4 style={{ paddingTop: 20 }}>Data Master Banner</h4>
              <h5
                style={{
                  textAlign: "justify",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
                class="text-sm text-gray-600 flex items-center"
              >
                Ini adalah fitur untuk mengubah atau menambah banner informasi
                utama pada slider di halaman Home.
              </h5>
            </div>
          </Col>
          <Col sm={6}>
            <div className="bordering3">
              <h4 style={{ paddingTop: 20 }}>Tambah Data Banner</h4>
              <form class="">
                <div class="flex items-center border-b border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="file"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                  <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Publish
                  </button>
                  <button
                    class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>

                <div class="flex items-center border-b border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="file"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                  <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Publish
                  </button>
                  <button
                    class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>

                <div class="flex items-center border-b border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="file"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                  <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Publish
                  </button>
                  <button
                    class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>

                <div class="flex items-center border-b border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="file"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                  <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Publish
                  </button>
                  <button
                    class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>

                <div class="flex items-center border-b border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="file"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                  <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Publish
                  </button>
                  <button
                    class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
