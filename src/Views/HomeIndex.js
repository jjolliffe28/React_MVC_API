import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Fragment } from 'react';
import Edit from './Edit';
import 'bootstrap/dist/css/bootstrap.css';

var selection = [];

export default function HomeIndex(props) {
  var idx = props.data[0];
  var id = props.data[1];
  var player = props.data[2];
  var setPlayer = props.data[3];
  var players = props.data[4];
  var setPlayers = props.data[5];
  const [show, setShow] = useState(props.data[6]);
  // console.log(props);

  return (
    <div>
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
                          setShow(true);
                          idx = ix;
                          id = item.id;
                          selection = [
                            idx,
                            id,
                            player,
                            setPlayer,
                            players,
                            setPlayers,
                            setShow,
                            (show) => {
                              return show;
                            },
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
        <Edit show={show} data={selection} />
      </div>
    </div>
  );
}
