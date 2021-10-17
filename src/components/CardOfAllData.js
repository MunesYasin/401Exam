import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './grid.css'



class CrdOfData extends React.Component{
addd = ()=>{
this.props.add(this.props.item.title,this.props.item.imgUrl)
}
render(){
    return(
        <div className="grid">
      
        <Card style={{ width: '18rem' }} > 
         
  <Card.Img variant="top" src={this.props.item.imgUrl} />
  <Card.Body>
    <Card.Title>{this.props.item.title}</Card.Title>
    
    <Button variant="primary" onClick={this.addd}>Add To Favorite</Button>
  </Card.Body>
</Card>
</div>
    )
}




}
export default CrdOfData