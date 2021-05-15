import React from 'react';
import Table from 'react-bootstrap/Table';
import "./index.css";
import {Col,Row,Container} from 'react-bootstrap';
import { Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const items=[
  {
    "is": "Account",
    "id": 1,
    "code": "CO0001",
    "is_buyer": true,
    "is_supplier": true,
    "type": {
      "is": "AccountType",
      "id": 1,
      "name": "Company"
    },
    "type_detail": {
      "is": "Comnpany",
      "id": 1,
      "name": "Somecompany",
      "phonenumber": "010-1010101"
    }
  },
  {
    "is": "Account",
    "id": 2,
    "code": "CO0002",
    "is_buyer": true,
    "is_supplier": false,
    "type": {
      "is": "AccountType",
      "id": 1,
      "name": "Company"
    },
    "type_detail": {
      "is": "Comnpany",
      "id": 2,
      "name": "Anothercompany",
      "phonenumber": "010-1010102"
    }
  },
  {
    "is": "Account",
    "id": 3,
    "code": "PO0001",
    "is_buyer": true,
    "is_supplier": false,
    "type": {
      "is": "AccountType",
      "id": 2,
      "name": "Person"
    },
    "type_detail": {
      "is": "Person",
      "id": 1,
      "firstname": "John",
      "lastname": "Smith",
      "phonenumber": "010-1010103"
    }
  },
  {
    "is": "Account",
    "id": 4,
    "code": "PO0001",
    "is_buyer": true,
    "is_supplier": false,
    "type": {
      "is": "AccountType",
      "id": 2,
      "name": "Person"
    },
    "type_detail": {
      "is": "Person",
      "id": 2,
      "firstname": "Chris",
      "lastname": "Johnson",
      "phonenumber": "010-1010104"
    }
  }

]
 export default function App() {
  return (
    <Container>
      <Row className="header">
        ACCOUNTS
        </Row>
  <Row className="y">
    <Col xs={3} className="col1">
    <Row>
    <input type="button"  id="button1" value="-"/>
    </Row>
    <Row className="rowb">
    <input type="button"  id="button2" value="Company"/>
    </Row>
    <Row className="rowb">
    <input type="button"  id="button2" value="Person"/>
    </Row>
    </Col>
    <Col >
    <Row >
    <input type="text"  id="input" value="Enter Search Text here...." />
    <Table striped bordered hover size  className="Tables">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody> {items.map((item,i)=> (
          <tr>
            <td>{item.code}</td>
            <td>{item.type.name}</td>
            <td>{item.type_detail.phonenumber}</td>
            <td></td>
            <td></td>
            
           
          </tr>
        ))}
        </tbody>
        </Table>
    </Row>
      
    </Col>
  </Row>
  <Row>
    <input type="button" id="button3" value="Main"/>
    <input type="button" id="button3" value="Company"/>
    <input type="button" id="button3" value="Person"/>
  </Row>

  <container >
    
    <Row >
    <Col className="col22">
    <Row>
      <input type="button" id="button4" value="Code"/><input type="text" value="C0001"/>
    </Row>
    <Row>
      <input type="button"  id="button4" value="Buyer"/><input type="button" value="X"/>
    </Row>
    <Row>
      <input type="button" id="button4" value="Seller"/><input type="button" value="X"/>
    </Row>
    </Col>

    </Row>
    
  </container>


  
  
</Container>
  );
  }