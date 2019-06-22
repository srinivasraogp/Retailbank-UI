import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Link} from 'react-router-dom';
import axios from 'axios';
import { withTranslation} from 'react-i18next';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminlist: []
    }
  }

reg=(data)=>{
    return new Promise((resolve, reject) => {
        axios.put(`http://10.117.189.202:7777/retailbank/ingretail/adminapprove/${data.regId}`).then( (response) =>{
          resolve(response);
          alert("User Approved Successfully")
          window.location.reload();
        }).catch(function (error) {
          reject(error);
        });
      });
}
componentDidMount() {
    this.getData().then(response => {
        console.log(response)
      this.setState({ adminlist:response.data });
      console.log(this.state.adminlist,"list")
    });

  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.202:7777/retailbank/ingretail/admin').then( (response) =>{
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
 
render() {
  const {courselist} = this.state
        let { t } = this.props;
  return (
  
    <div className="conatiner"><h2 align="center">Registered Users List</h2>
          
    <div className="dropdown  acc">
      {
         this.state.adminlist.map((item, i) => {
        return( <Accordion key={i}>
          <AccordionItem >
          <AccordionItemHeading>
          <AccordionItemButton >{item.regId}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
     <div>
                    <table><tr><td>firstName</td><td>{item.firstName}</td></tr>
                     <tr><td>lastName</td><td>{item.lastName}</td></tr>
                     <tr><td>email</td><td>{item.email}</td></tr>
                     <tr><td>contactNumber</td><td>{item.contactNumber}</td></tr>
                     <tr><td>accountType</td><td>{item.accountType}</td></tr>
                     <tr><td>city</td><td>{item.city}</td></tr>
                    
                     </table>
                     <button onClick={()=>this.reg(item)} className="bt">Approve</button>
         </div>
     </AccordionItemPanel>
 </AccordionItem>
</Accordion>

)
}
)}
 </div>
</div>
);
}
}

export default Admin;