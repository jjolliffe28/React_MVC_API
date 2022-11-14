import React from 'react';
import { useState, useEffect } from 'react';
import HomeIndex from '../Views/HomeIndex';
import Player from '../Models/Player'

export default function App() {
  const requestURI = 'https://localhost:7172/api/Football/';

  var idx = null;
  var id = null;
  var [player, setPlayer] = useState(() => Player());
  var [players, setPlayers] = useState(() => []);
  var show = false;

  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      });
  }, []);
  var putData = (dataObj, id) => {
    fetch(requestURI + id, {
      method: 'PUT',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 204) {
        console.log('PUT Failed', response);
        return;
      } else {
        console.log('PUT Succeeded', response);
      }
    });
  };

  // console.log('players is ', players);
  var selection = [
    idx,
    id,
    player,
    setPlayer,
    players,
    setPlayers,
    show,
    putData,
  ];
  
  return <HomeIndex data={selection} />;
}
