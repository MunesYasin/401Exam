

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Formmm extends React.Component{

render(){
    return(
        <Form onSubmit={this.props.upd}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control name="title" defaultValue={this.props.info.titlee} />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>ImgUrl</Form.Label>
    <Form.Control name="url" defaultValue={this.props.info.img1} />
  </Form.Group>
  
  <input type="submit" value="Update" />
  <Button onClick={this.props.close}>Close</Button>
</Form>
    )
}


}


export default Formmm