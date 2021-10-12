import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




class CrdOfData extends React.Component{
addd = ()=>{
this.props.add(this.props.item.title,this.props.item.imageUrl)
}
render(){
    return(
        <>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.item.imageUrl} />
  <Card.Body>
    <Card.Title>{this.props.item.title}</Card.Title>
    
    <Button variant="primary" onClick={this.addd}>Add To Favorite</Button>
  </Card.Body>
</Card>
</>
    )
}




}
export default CrdOfData