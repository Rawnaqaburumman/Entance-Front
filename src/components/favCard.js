import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button, Row } from 'react-bootstrap';

class FavCard extends React.Component {
  render() {
    return(
      <>
      <Row>
          {this.props.favArray.map(item => {
          return(
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.imageUrl} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
  
    <Button variant="primary" onClick={() => this.props.deleteFav(item._id)} >Delete</Button>
    <Button variant="primary" onClick={() => this.props.handledisplay(item)} >Update </Button>
  </Card.Body>
</Card>)})}
</Row>
      </>
    )
  }
}


export default FavCard ;