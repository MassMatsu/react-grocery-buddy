import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';
import BtnClearAll from './components/BtnClearAll';

import uuid from 'react-uuid';

const App = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [editingItemID, setEditingItemID] = useState('');

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
      
    } else {
      const newItem = {
        id: uuid(),
        name: item,
      };
      setList([...list, newItem]);
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
  };

  const onAllClear = function () {
    setList([]);
  };

  return (
    <div className='container'>
      <p className='msg'>Item added</p>
      <h1 className='title'>Grocery Buddy</h1>

      <Form item={item} onFormSubmit={onFormSubmit} setItem={setItem} />

      <List items={list} onItemEdit={onItemEdit} onItemRemove={onItemRemove} />

      <BtnClearAll onAllClear={onAllClear} />
    </div>
  );
};

export default App;
