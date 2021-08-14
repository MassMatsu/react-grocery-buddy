import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';
import BtnClearAll from './components/BtnClearAll'

import uuid from 'react-uuid'

const App = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  console.log(item);

  const onFormSubmit = function(e) {
    e.preventDefault();

    if (!item) return;

    const newItem = {
      id: uuid(),
      name: item,
    };
    setList([...list, newItem]);
    setItem('');
  };

  const onItemRemove = function(id) {
    const itemToRemove = list.find((item) => item.id === id)
    if (!itemToRemove) return

    const newList = list.filter((item) => item.id !== itemToRemove.id)

    setList(newList)
  }

  const onAllClear = function() {
    setList([])
  }


  return (
    <div className='container'>
      <p className='msg'>Item added</p>
      <h1 className='title'>Grocery Buddy</h1>

      <Form item={item} onFormSubmit={onFormSubmit} setItem={setItem} />

      <List items={list} onItemRemove={onItemRemove} />

      <BtnClearAll onAllClear={onAllClear} />
    </div>
  );
};

export default App;
