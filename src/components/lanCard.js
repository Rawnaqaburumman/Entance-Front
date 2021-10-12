import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button, Row } from 'react-bootstrap';

class LanCard extends React.Component {
  render() {
    return(
      <>
      <Row>
          {this.props.lanArray.map(item => {
          return(
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.imageUrl} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
  
    <Button variant="primary" onClick ={()=> this.props.addFav(item.title,item.imageUrl)}>Add to favourite </Button>
  </Card.Body>
</Card>)})}
</Row>
      </>
    )
  }
}


export default LanCard ;