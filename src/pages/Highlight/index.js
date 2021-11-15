import axios from "axios";
import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Tab,
  Table,
} from "react-bootstrap";
import Topnav from "../../components/TopNav";
import "./style.css";

export default class Highlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      judul: "",
      deskripsi: "",
      photo: "",
      oldPhoto:"",
      selectedFile: null
    };
  }

  showModal() {
    this.setState({ show: !this.state.show });
  }

  async saveDataPromosi() {

    let formdata = new FormData()
    formdata.append(
      "File",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(formdata)

    axios.post(`http://localhost:4000/uploads`, formdata)

    const data = {
      judul: this.state.judul,
      deskripsi: this.state.deskripsi,
      image: this.state.selectedFile.name
    };
    console.log("Data : ", data)
  }

  handleJudul(e){
    this.setState({judul: e.target.value})
  }

  handleDeskripsi(e){
    this.setState({deskripsi: e.target.value})
  }

  handleFile(e){
    this.setState({selectedFile: e.target.files[0]})
  }

  // onFileUpload(){
    
  //   console.log("Filename : ", this.state.selectedFile)
  // }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Topnav />
        <div className="upper">
          <Button onClick={() => this.showModal()}>Add New Promosi</Button>
        </div>

        {/* Modal Body */}
        <div>
          <Modal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
          >
            <Modal.Header>
              <Modal.Title>Tambah Promosi</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {/* Forms Add */}
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Judul Promosi</Form.Label>
                  <Form.Control type="text" placeholder="Ketik Disini" value={this.state.judul} onChange={this.handleJudul.bind(this)}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control type="textarea" placeholder="Ketik Disini" value={this.state.deskripsi} onChange={this.handleDeskripsi.bind(this)}/>
                </Form.Group>

                  <Form.Label>Tambah Foto</Form.Label>
                  <br/>
                <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="file"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                    onChange={this.handleFile.bind(this)}
                  />
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.showModal()}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={() => this.saveDataPromosi()}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Judul Promo</th>
                <th colSpan="2">Deskrirpsi</th>
                <th>Foto</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td colSpan="2">Otto</td>
                <td>@mdo</td>
                <td style={{ flexDirection: "row" }}>
                  <Button>Update</Button>
                  <Button variant="danger" style={{ marginLeft: 10 }}>
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td colSpan="2">Thornton</td>
                <td>@fat</td>
                <td style={{ flexDirection: "row" }}>
                  <Button>Update</Button>
                  <Button variant="danger" style={{ marginLeft: 10 }}>
                    Delete
                  </Button>
                </td>{" "}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
