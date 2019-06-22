import React, { Component } from 'react';
import { BrowserRouter, Route, Link, HashRouter, Switch } from 'react-router-dom';
import Home from './components/homePage/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import Summary from './components/summary/Summary';
import Admin from './components/admin/Admin';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn: false
    }
  }
  redirect=(page, history)=> {
    history.push(page);
  }

  vaidateUser = (isLoggedIn)=> {
    this.setState({isLoggedIn});
  }
  render() {

    return (
      <div>
        <HashRouter>
          <Header isLoggedIn={this.state.isLoggedIn} redirect={this.redirect}/>
          <div>

            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/login' component={()=><Login vaidateUser={this.vaidateUser}/>} />
              <Route path='/logout' component={Logout} />
              <Route path='/reg' component={Register} />
              <Route path='/summary' component={Summary} />
              <Route path='/admin' component={Admin} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
    )
  }
}

export default App;