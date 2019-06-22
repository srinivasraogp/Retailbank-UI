import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import summary from './summary.css';
class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summarylist: []
     
    }
  }
  componentDidMount() {
    this.getData().then(response => {
        
      this.setState({ summarylist: [response.data] });
      console.log(this.state.summarylist)
    });
  }
  getData = () => {
    const userId = localStorage.getItem('userId');
    const{post} =this.state;
    return new Promise((resolve, reject) => {
      axios.get(`http://10.117.189.202:7777/retailbank/ingretail/summary/${userId}`).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
    return(
      <div className="bor">
          <button className="kyc"><Link to="/kyc">KYC Details</Link></button>
          <table className="table table-hover tab">
            <thead>
             <h1 className="sum">SummaryPage</h1>
             <tr><td>User ID</td><td>First Name</td><td>Last Name</td><td>Account Type</td><td>Account Number</td><td>Account Balance</td></tr>
             
            </thead>
      <tbody>
          {
          this.state.summarylist.map((item, i) => {
                                return (
                                    <tr key={i}>
                                       <td >{item.userId}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.accountType}</td>
                                        <td>{item.accountNumber}</td>
                                        <td>{item.balance}</td>
                                    </tr>
                                    
                                )
                            })
                        }
         </tbody>
         </table>                                  
                  </div>
    )
  }
}
export default Summary;

