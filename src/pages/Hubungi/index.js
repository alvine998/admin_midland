import axios from "axios";
import React, { Component } from "react";
import {
    Alert,
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

export default class Hubungi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      posisi: "",
      nama: "",
      nohp: "",
      collection: [],
      no:1,
      email:'',
      modalDelete: false,
      modalUpdate: false,
      collect:""
    };
  }

  showModal() {
    this.setState({ show: !this.state.show });
  }

  showModalDelete(iid) {
    console.log("ini id : ", iid)
    this.setState({ modalDelete: !this.state.modalDelete  });
  }

  handlePosisi(e){
    this.setState({posisi: e.target.value})
  }

  handleNama(e){
    this.setState({nama: e.target.value})
  }

  handleNohp(e){
    this.setState({nohp: e.target.value})
  }

  handleEmail(e){
    this.setState({email: e.target.value})
  }

  onNumber(){
      const no = this.state;
      console.log(this.state.collection)
      for(let i = 0; i < this.state.collection.length; i++){
          console.log(no)
          no += 1
          this.setState({no})
      }
  }

  onSave(){
      const data = {
        posisi: this.state.posisi,
        nama: this.state.nama,
        nohp: this.state.nohp,
        email: this.state.email
      }
      console.log(data)
      axios.post(`http://localhost:4000/infos/`, data)
      .then(
          res => {
              console.log(res.data);
              this.setState({
                  posisi: '',
                  nama:'',
                  nohp: '',
                  email:''
              })
              window.location.reload()
          }
      )
  }

  onDelete(id){
      axios.delete(`http://localhost:4000/infos/${id}`)
      .then(
          res => {
              console.log(res.data);
              console.log("Data id dihapus : ", id)
              window.location.reload();

          }
      )
  }

  onUpdate(id){
    const data = {
      posisi: this.state.posisi,
      email: this.state.email,
      nama: this.state.nama,
      nohp: this.state.nohp
    }
    axios.put(`http://localhost:4000/infos/${id}`, data).then(
      res => {
        console.log("Sukses Update",res.data)
      }
    )
  }

  getDataInfo(){
      axios.get(`http://localhost:4000/infos/`)
      .then(
          res => {
            const collection = res.data;
            console.log("Data : ", collection);
            this.setState({collection})
          }
      )
  }

  getOneData(id){
    axios.get(`http://localhost:4000/infos/${id}`).then(
      res => {
        console.log("Current Data : ", res.data)
        this.setState({collect: res.data._id})
      }
    )
  }

  componentDidUpdate(prevProps, prevState){
      if(prevState.no !== this.state.no){
          this.onNumber();
      }
  }

  componentDidMount() {
      this.getDataInfo();
      this.onNumber();
      this.getOneData(this.props.match.params.id);
  }

  renderModalDelete(id, pos, nam, noh, ema){
    return(
      <div>
        <Modal 
          show={this.state.modalDelete}
          onHide={() => this.setState({ modalDelete: false })}
        >
          <Modal.Header>
            <Modal.Title>Apakah Anda Yakin Hapus Data Karyawan?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h5>Nama : {nam}</h5>
            <h5>Posisi : {pos}</h5>
            <h5>Email : {ema}</h5>
            <h5>Nomor Hp : {noh}</h5>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.showModalDelete()}>
              Tidak
            </Button>
            <Button variant="primary" type="submit" onClick={() => this.onDelete(id)}>
              Ya
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
  }

  render() {
    return (
      <div>
        <Topnav/>
        <div className="upper">
          <Button onClick={() => this.showModal()}>Add New Marketing</Button>
        </div>

        {/* Modal Body */}
        <div>
          <Modal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
          >
            <Modal.Header>
              <Modal.Title>Tambah Info Karyawan</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {/* Forms Add */}
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Posisi</Form.Label>
                  <Form.Control onFocus={this.state.posisi} type="text" placeholder="Ketik Disini" value={this.state.posisi} onChange={this.handlePosisi.bind(this)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Nama Karyawan</Form.Label>
                  <Form.Control type="text" placeholder="Ketik Disini" value={this.state.nama} onChange={this.handleNama.bind(this)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ketik Disini" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Nomor Handphone</Form.Label>
                  <Form.Control type="text" placeholder="Ketik Disini" value={this.state.nohp} onChange={this.handleNohp.bind(this)}/>
                </Form.Group>

                </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.showModal()}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={() => this.onSave()}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Modal Update */}
        <div>
          <Modal>

          </Modal>
        </div>

        

        <div>
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th>Nomor</th>
                <th>Posisi</th>
                <th>Nama Marketing</th>
                <th>Nomor Hp</th>
                <th>Email</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
                {
                    this.state.collection.map((res,i) => {
                        return(
                                <tr key={i}>
                                    <td>{this.state.no}</td>
                                    <td>{res.nama}</td>
                                    <td>{res.posisi}</td>
                                    <td>{res.nohp}</td>
                                    <td>{res.email}</td>
                                    <td style={{ flexDirection: "row" }}>
                                    {this.renderModalDelete(res._id, res.posisi, res.nama, res.nohp, res.email)}

                                    <Button onClick={() => this.showModal(res._id)}>Update</Button>
                                    <Button onClick={() => this.showModalDelete(res._id)} variant="danger" style={{ marginLeft: 10 }}>
                                        Delete
                                    </Button>
                                    </td>
                                </tr>                                                        
                        )
                    })
                }
              
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
