import axios from "axios";
import React, { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlee: [],
      email: "",
      password: "",
      link:''
    };
  }

  handleEmail(e){
      this.setState({email: e.target.value})
  }

  handlePassword(e){
      this.setState({password: e.target.value})
  }

  onLogin(){
    if(this.state.email == 'admin@midlandproperti.com' && this.state.password == '12345678'){
      console.log("Login Sukses")
      this.props.history.push('/dashboard')
      window.location.reload()
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.onLogin();
  }

//   loginLogic = () => {
//       if(this.state.email === "adminmidland@gmail.com" && this.state.password === "123456"){
//           return(
              
//           )
//       } else {
//           return;
//       }
//   }

  render() {
    return (
      // <ul>
      //     {this.state.titlee.map(titles =>
      //         <img src={`https://infoscript.id/all_photo/${titles.photo}`} />
      //     )}
      // </ul>
      <div className="centerAll">
        <div className="head">
            <h2 style={{paddingTop:50, paddingBottom:20}}>Login Admin MidlandProperti.com</h2>
            <div className="card center">
                <div>
                    <img src="http://www.midlandproperti.com/static/media/vn.21c81277.png" style={{width:100, height:120}} />
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h5 style={{textAlign:'left'}}>Email</h5>
                        <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h5 style={{textAlign:'left'}}>Password</h5>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword.bind(this)} />
                    </Form.Group>

                    <Button onClick={() => this.onLogin()} variant="primary" type="submit">
                        Masuk
                    </Button>
                </Form>
            </div>
        </div>
      </div>
    );
  }
}
