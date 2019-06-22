import React, { Component } from 'react';
import { withTranslation} from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import login from './login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
            password: "",
            customerid : ""
        },
        res:[]
        }
      }
  loginHandler = (event)=>{
    const {loginData}=this.state;
    loginData[event.target.name]=event.target.value;
    this.setState({loginData});
    console.log(this.state.loginData, "name");
  }
  login =(event)=>{
    const{res} = this.state;
    event.preventDefault();
    const{loginData}=this.state;
    this.props.vaidateUser(true);
    this.getData(loginData).then(response=> {
      console.log(response);
      this.setState({ res: response.data });
      console.log(this.state.res.account_number)
      if(this.state.res.message === "Login is successfull"){
      alert("login successfull")
        this.props.history.push('/summary/' + this.state.res.account_number);
       }
       else{
         alert("login not successfull")
       }
      
    }).catch(error=> {
      console.log(error);
      alert(error.message)
    })
    
  }

  getData = (loginData) => {
    return new Promise((resolve, reject) => {
      axios.post('http://10.117.189.209:7777/modelbank/api/login',loginData).then( (response)=> {
        resolve(response);        
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
   
    let { t } = this.props;
    return (
      <div className="header  ">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <form className='container bord'>
          <h1 align="center" className='head'>{t('login')}<hr className="hr"/></h1>
              <div className="form-group">
                  <label>{t('User_ID')}</label>
                  <input type="text" className="form-control" id="customerId"  placeholder="Customer Id" name="customerid" onChange={this.loginHandler}/>
              </div>
              <div className="form-group">
                  <label>{t('password')}</label>
                  <input type="password" className="form-control" id="password" placeholder="password" name="password" onChange={this.loginHandler}/>
              </div> 
              <div>
                  <button className="but" onClick={this.login}>{t('button')}</button>
                  <button className="but" type='reset'>{t('reset')}</button>
              </div>
          </form>
      </div>
    )
  }
}
export default withTranslation()(Login);

