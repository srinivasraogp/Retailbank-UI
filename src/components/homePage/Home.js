import React,{Component} from 'react';
import home from './home.css';
import bank from './ban.png';

class Home extends Component{
    render(){
        return(
            <div>
                <img src={bank} width="100%" height="590px"/>
            </div>
        )
    }
}
export default Home;