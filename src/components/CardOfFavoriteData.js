import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'





class CrdOfData extends React.Component{
  deletee = ()=>{
    this.props.delete(this.props.item._id)
    }

    updatee = ()=>{
      this.props.update(this.props.item)
      }

render(){
    return(
        <>
       

        
       
        <Card style={{ width: '18rem' }} className="row">
  <Card.Img variant="top" src={this.props.item.img1} />
  <Card.Body>
    <Card.Title>{this.props.item.titlee}</Card.Title>
    
    <Button variant="primary" onClick={this.deletee}>Delete</Button>
    <Button variant="primary" onClick={this.updatee}>Update</Button>
  </Card.Body>
</Card>
</>
    )
}




}
export default CrdOfData