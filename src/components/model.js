import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

class FavModel extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={() => this.props.handledisplay(this.props.selected)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Programming languge</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <Form onSubmit={this.props.handleUpdate}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="title" name="title" defaultValue={this.props.selected.title} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="imageUrl" name="imageUrl" defaultValue={this.props.selected.imageUrl} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form></Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}


export default FavModel;