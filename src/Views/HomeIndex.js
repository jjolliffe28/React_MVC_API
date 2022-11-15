import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Fragment } from 'react';
import Edit from './Edit';
import Create from './Create';
import 'bootstrap/dist/css/bootstrap.css';

var selectionEdit = [];
var selectionCreate = [];

export default function HomeIndex(props) {
  var idx = props.data[0];
  var id = props.data[1];
  var player = props.data[2];
  var players = props.data[3];
  const [showEdit, setShowEdit] = useState(() => props.data[4]);
  const [showCreate, setShowCreate] = useState(() => props.data[5]);
  var putData = props.data[6];
  var postData = props.data[7];

  var getShowEdit = () => {
    return showEdit;
  }

  var getShowCreate = () => {
    return showCreate;
  };
  // console.log(props);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-left">
        <Button
        onClick={(e) => {
          e.preventDefault();
          setShowCreate(true);
          selectionCreate = [
            player,
            players,
            setShowCreate,
            getShowCreate,
            postData,
          ];
        }}
        >
          <h5>Create</h5>
        </Button>
      </div>

      <table>
        <tbody>
          {players.map((item, ix) => {
            // console.log(item, ix);
            return (
              <Fragment key={item.id}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.team}</td>
                  <td>{item.position}</td>
                  <td>{item.totalYards}</td>
                  <td>{item.totalTouchdowns}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setShowEdit(true);
                          idx = ix;
                          id = item.id;
                          selectionEdit = [
                            idx,
                            id,
                            player,
                            players,
                            setShowEdit,
                            getShowEdit,
                            postData,
                          ];
                          // console.log(selection);
                        }}
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <div>
        <Edit show={showEdit} data={selectionEdit} />
        <Create show={showCreate} data={selectionCreate} />
      </div>
    </div>
  );
}
