import React from 'react';
import { useState, useEffect } from 'react';
import HomeIndex from '../Views/HomeIndex';
import Player from '../Models/Player';

import 'bootstrap/dist/css/bootstrap.css';



export default function App() {
  const requestURI = 'https://localhost:7172/api/Football/';

  var idx = null;
  var id = null;
  const [refresh, setRefresh] = useState(() => false);
  var [data, setData] = useState (() => []);
  var player = new Player();
  var players = data;
  var showEdit = false;
  var showCreate = false;

  //GET
  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setRefresh(false);
      });
  }, [refresh]);

  //PUT
  var PutData = (dataObj, id) => {
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

  //POST
  function PostData(dataObj) {
    fetch(requestURI, {
      method: 'POST',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 201) {
        console.log('POST Failed', response);
        return;
      } else {
        setRefresh(true);
      }
    });
  }

  // console.log('players is ', players);
  var selection = [
    idx,
    id,
    player,
    players,
    showEdit,
    showCreate,
    PutData,
    PostData,
  ];
  
  return <HomeIndex data={selection} />;
}
