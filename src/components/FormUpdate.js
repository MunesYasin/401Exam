

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class Formmm extends React.Component{

render(){
    return(
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control name="title" defaultValue={this.props.info.title} />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>ImgUrl</Form.Label>
    <Form.Control name="url" defaultValue={this.props.info.imageUrl} />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={this.props.upd}>
Update   </Button>
</Form>
    )
}


}


export default Formmm