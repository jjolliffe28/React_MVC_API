import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var name = null;
var team = null;
var position = null;
var totalYards = null;
var totalTouchdowns = null;

var idx = null;
var id = null;

var player = {};
var setPlayer = null;
var players = [];
var setPlayers = null;
var setShow = null;
var getShow = null;
var putdata = null;


const EditForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicname">
        <Form.Label>Name</Form.Label>
        <Form.Control
          autoComplete="name"
          type="text"
          placeholder={players[idx].name}
          defaultValue={players[idx].name}
          onChange={(e) => (name = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="team">
        <Form.Label>Team</Form.Label>
        <Form.Control
          autoComplete="team"
          type="text"
          placeholder={players[idx].team}
          defaultValue={players[idx].team}
          onChange={(e) => (team = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="position">
        <Form.Label>Position</Form.Label>
        <Form.Control
          autoComplete="position"
          type="text"
          placeholder={players[idx].position}
          defaultValue={players[idx].position}
          onChange={(e) => (position = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="totalYards">
        <Form.Label>Total Yards</Form.Label>
        <Form.Control
          autoComplete="totalYards"
          type="int"
          placeholder={players[idx].totalYards}
          defaultValue={players[idx].totalYards}
          onChange={(e) => (position = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="totalTouchdowns">
        <Form.Label>Total Touchdowns</Form.Label>
        <Form.Control
          autoComplete="totalTouchdowns"
          type="int"
          placeholder={players[idx].totalTouchdowns}
          defaultValue={players[idx].totalTouchdowns}
          onChange={(e) => (position = e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

export default function Edit(props) {
  if (!props.show) {
    return null;
  }

  idx = props.data[0];
  id = props.data[1];
  player = props.data[2];
  setPlayer = props.data[3];
  players = props.data[4];
  setPlayers = props.data[5];
  setShow = props.data[6];
  getShow = props.data[7];
  putdata = props.data[8];

  // console.log(props);

  var handleClose = () => {
    setShow(false);
    return;
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    setShow(false);

    if (name !== null) players[idx].name = name;
    if (team !== null) players[idx].team = team;
    if (position !== null)
      players[idx].position = position;
    if (totalYards !== null) players[idx].totalYards = totalYards;
    if (totalTouchdowns !== null) players[idx].totalTouchdowns = totalTouchdowns;
    // console.log(name, team, position);

    name = null;
    team = null;
    position = null;
    totalYards = null;
    totalTouchdowns = null;

    return;
  };

  return (
    <div>
      {/* <h1>{players[idx].name}</h1> */}
      <Modal id="myModal" show={getShow} onClose={handleClose}>
        <Modal.Header>
          <Modal.name>Edit</Modal.name>
        </Modal.Header>
        <Modal.Body>
          <EditForm onSubmit={onEditFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
