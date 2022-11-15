import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var name = null;
var team = null;
var position = null;
var totalYards = null;
var totalTouchdowns = null;

var player = {};
var players = [];

var setShowCreate = null;
var getShowCreate = null;
var postData = null;

const CreateForm = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    autoComplete="name"
                    type="text"
                    placeholder=""
                    defaultValue=""
                    onChange={(e) => (name = e.target.value)}
                /> 
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
                <Form.Label>Team</Form.Label>
                <Form.Control
                    autoComplete="team"
                    type="text"
                    placeholder=""
                    defaultValue=""
                    onChange={(e) => (team = e.target.value)}
                /> 
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
                <Form.Label>Position</Form.Label>
                <Form.Control
                    autoComplete="position"
                    type="text"
                    placeholder=""
                    defaultValue=""
                    onChange={(e) => (position = e.target.value)}
                /> 
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
                <Form.Label>Total Yards</Form.Label>
                <Form.Control
                    autoComplete=""
                    type="text"
                    placeholder=""
                    defaultValue=""
                    onChange={(e) => (totalYards = e.target.value)}
                /> 
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
                <Form.Label>Total Touchdowns</Form.Label>
                <Form.Control
                    autoComplete=""
                    type="text"
                    placeholder=""
                    defaultValue=""
                    onChange={(e) => (totalTouchdowns = e.target.value)}
                /> 
            </Form.Group>
            <Button variant="primary" type="submit" block="true">
                Save
            </Button>
        </Form>
    );
};

function CreateFormSubmit(e) {
    e.preventDefault();
    setShowCreate(false);

    if (name === null) return;

    player.name = name;
    player.team = team;
    player.position = position;
    player.totalYards = totalYards;
    player.totalTouchdowns = totalTouchdowns;

    postData(player);

    name = null;
    team = null;
    position = null;
    totalYards = null;
    totalTouchdowns = null;
    
    return;
}

export default function Create(props) {
    if(!props.show) {
        return null;
    };

    player = props.data[0];
    players = props.data[1];
    setShowCreate = props.data[2];
    getShowCreate = props.data[3];
    postData = props.data[4];

    var handleClose = () => {
        setShowCreate(false);
        return;
    };

    return (
        <div>
            <Modal id="createModal" show={getShowCreate} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Create</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateForm onSubmit={CreateFormSubmit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

};