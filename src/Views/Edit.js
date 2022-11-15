import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var name = null;
var team = null;
var position = null;
var totalYards = 0;
var totalTouchdowns = 0;

var idx = null;
var id = null;

var player = {};
var players = [];
var setShowEdit = null;
var getShowEdit = null;
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
          type="text"
          placeholder={players[idx].totalYards}
          defaultValue={players[idx].totalYards}
          onChange={(e) => (totalYards = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="totalTouchdowns">
        <Form.Label>Total Touchdowns</Form.Label>
        <Form.Control
          autoComplete="totalTouchdowns"
          type="text"
          placeholder={players[idx].totalTouchdowns}
          defaultValue={players[idx].totalTouchdowns}
          onChange={(e) => (totalTouchdowns = e.target.value)}
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
  players = props.data[3];
  setShowEdit = props.data[4];
  getShowEdit = props.data[5];
  putdata = props.data[6];

  // console.log(props);

  var handleClose = () => {
    setShowEdit(false);
    return;
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    setShowEdit(false);

    if (name !== null) {
      players[idx].name = name;
    }

    if (team !== null) {
      players[idx].team = team;
    }

    if (position !== null) {
      players[idx].position = position;
    }

    if (totalYards !== null) {
      players[idx].totalYards = totalYards;
    }

    if (totalTouchdowns !== null) {
      players[idx].totalTouchdowns = totalTouchdowns;
    }
    // console.log(name, team, position);

    name = null;
    team = null;
    position = null;
    totalYards = null;
    totalTouchdowns = null;

    putdata(players[idx], id);

    return;
  };

  return (
    <div>
      {/* <h1>{players[idx].name}</h1> */}
      <Modal id="editModal" show={getShowEdit} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
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
