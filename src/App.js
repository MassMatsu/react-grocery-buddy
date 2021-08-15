import React, { useState, useCallback, useEffect } from 'react';
// components
import List from './components/List';
import Form from './components/Form';
import BtnHandleAll from './components/BtnHandleAll';
import Alert from './components/Alert';

import { loadList, setStorage, capitalizeName } from './util/helper';

import uuid from 'react-uuid';
// import { FaShoppingCart, FaShoppingBag, FaHeart } from 'react-icons/fa';

const App = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState(loadList());

  const [editMode, setEditMode] = useState(false);
  const [editingItemID, setEditingItemID] = useState('');

  const [alert, setAlert] = useState({ show: true, msg: '', type: '' });

  useEffect(() => {
    setStorage(list);
  }, [list]);

  const onFormSubmit = function (e) {
    e.preventDefault();

    if (!item) return;

    if (editMode) {
      const newList = list.map((itm) => {
        if (itm.id === editingItemID) itm.name = item;

        return itm;
      });

      setList(newList);
      setEditMode(false);
      setEditingItemID('');
      setUpAlert(true, `${capitalizeName(item)} edited`, 'edited');
    } else {
      const newItem = {
        id: uuid(),
        name: item,
      };
      setList([...list, newItem]);
      setUpAlert(true, `${capitalizeName(item)} added`, 'added');
    }

    setItem('');
  };

  const onItemEdit = useCallback(
    function (id) {
      const itemToEdit = list.find((item) => item.id === id);
      if (!itemToEdit) return;

      console.log(id);
      setEditMode(true);
      setEditingItemID(id);
    },
    [list]
  );

  const onItemRemove = useCallback(
    function (id) {
      const itemToRemove = list.find((item) => item.id === id);
      if (!itemToRemove) return;

      const newList = list.filter((item) => item.id !== itemToRemove.id);

      setList(newList);
      setUpAlert(
        true,
        `${capitalizeName(itemToRemove.name)} removed`,
        'removed'
      );
    },
    [list]
  );

  const onAllClear = function () {
    if (!list.length > 0) return;
    setList([]);
    setUpAlert(true, 'All items removed', 'removed');
  };

  const setUpAlert = function (show = false, msg = '', type = '') {
    setAlert({ show, msg, type });
  };

  return (
    <div className='container'>
      <div className='info-box'>
        <Alert alert={alert} setUpAlert={setUpAlert} list={list} />
      </div>

      <h1 className='title'>Grocery Buddy</h1>

      <Form
        item={item}
        onFormSubmit={onFormSubmit}
        setItem={setItem}
        editMode={editMode}
      />

      <List items={list} onItemEdit={onItemEdit} onItemRemove={onItemRemove} />

      <BtnHandleAll onAllClear={onAllClear} />
    </div>
  );
};

export default App;
