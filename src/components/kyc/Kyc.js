import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Kyc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerData: {
              firstName:"",
              lastName:"",
              contactNumber:"",
              city:"", 
              accountType:"",
              email:""
        }}
    }
   render() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
     const{registerData}=this.state;
    console.log(registerData);
    return (
      <div className="header  ">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <form className='container bord'>
          <h1 align="center" className='head'>KYC Details<hr className="hr"/></h1>
          <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" id="firtName"  placeholder={firstName} disabled name="firstName"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" id="firtName"  placeholder={lastName} disabled  name="firstName"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Father Name</label>
                  <input type="text" className="form-control" id="lastName"  placeholder="Father Name"  name="lastName"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Pan Card</label>
                  <input type="number" className="form-control" id="contactNumber"  placeholder="Pan Number" name="contactNumber"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Adhar Number</label>
                  <input type="number" className="form-control" id="contactNumber"  placeholder="Adhar Number" name="contactNumber"  onChange={this.RegisterHandler}/>
              </div>
             <span> <FormGroup>
               <Label for="exampleFile">File</Label>
               <Input type="file" name="file" id="exampleFile" />
                   <FormText color="muted">
                    upload Adhar Card
                   </FormText>
                </FormGroup></span>
                <span> <FormGroup>
               <Label for="exampleFile">File</Label>
               <Input type="file" name="file" id="exampleFile" />
                   <FormText color="muted">
                    upload Pan Card
                   </FormText>
                </FormGroup></span>
              <div>
                  <button className="but" id="but">Save</button>
                  <button className="but" id="but" type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Kyc;

