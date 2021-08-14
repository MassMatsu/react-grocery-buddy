import React, { useState, useCallback } from 'react';
import List from './components/List';
import Form from './components/Form';
import BtnClearAll from './components/BtnClearAll';
import Alert from './components/Alert'

import uuid from 'react-uuid';


const App = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [editingItemID, setEditingItemID] = useState('');

  const [alert, setAlert] = useState({show: true, msg: '', type: ''})


  console.log(item);

  const onFormSubmit = function (e) {
    e.preventDefault();

    if (!item) return;

    if (editMode) {
      const newList = list.map((i) => {
        if (i.id === editingItemID) i.name = item;

        return i;
      });

      setList(newList);
      setEditMode(false);
      setEditingItemID('');
      setUpAlert(true, 'Item edited', 'edited')
    } else {
      const newItem = {
        id: uuid(),
        name: item,
      };
      setList([...list, newItem]);
      setUpAlert(true, 'Item added', 'added')
    }

    setItem('');
  };

  const onItemEdit = function (id) {
    const itemToEdit = list.find((item) => item.id === id);
    if (!itemToEdit) return;

    console.log(id);
    setEditMode(true);
    setEditingItemID(id);
  };

  const onItemRemove = function (id) {
    const itemToRemove = list.find((item) => item.id === id);
    if (!itemToRemove) return;

    const newList = list.filter((item) => item.id !== itemToRemove.id);

    setList(newList);
    setUpAlert(true, 'Item removed', 'removed')
  };

  const onAllClear = function () {
    if (!list.length > 0) return
    setList([]);
    setUpAlert(true, 'All items removed', 'removed')
  };

  const setUpAlert = function(show = false, msg = '', type = '') {
    setAlert({show, msg, type})
  }

  console.log(alert.show)

  return (
    <div className='container'>
      <div className="info-box">
        <Alert alert={alert} setUpAlert={setUpAlert} list={list}/>
      </div>

      <h1 className='title'>Grocery Buddy</h1>

      <Form
        item={item}
        onFormSubmit={onFormSubmit}
        setItem={setItem}
        editMode={editMode}
      />

      <List items={list} onItemEdit={onItemEdit} onItemRemove={onItemRemove} />

      <BtnClearAll onAllClear={onAllClear} />
    </div>
  );
};

export default App;
