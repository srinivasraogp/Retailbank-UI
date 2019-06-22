import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import admin from './admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div className="container bord">
          <h3 className="he">Registered Users List</h3>
        <Button className="b"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>ticket 1</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Admin;