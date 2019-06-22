import React, { Component } from 'react';
import { withTranslation} from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import login from './login.css';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
            password: "",
            userId : ""
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
    event.preventDefault();
    const{loginData}=this.state;
    this.getData(loginData).then(response=> {
      console.log(response);
      // this.props.vaidateUser(true);
      this.setState({ res: response.data });
      console.log(this.state.res)
      localStorage.setItem("userId", this.state.res.adminUserID);
      if(this.state.res.adminMessage === "admin successful"){
        this.props.history.push('/admin');
       }
       else if(this.state.res.adminMessage === "user Successfull"){
        this.props.history.push('/summary');
       }
      
    }).catch(error=> {
      console.log(error);
      alert(error.message)
    })
    
  }

  getData = (loginData) => {
    return new Promise((resolve, reject) => {
      axios.post('http://10.117.189.202:7777/retailbank/ingretail/login',loginData).then( (response)=> {
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
                  <label>{t('UserID')}</label>
                  <input type="text" className="form-control" id="customerId"  placeholder="user Id" name="userId" onChange={this.loginHandler}/>
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
export default withRouter(withTranslation()(Login));

