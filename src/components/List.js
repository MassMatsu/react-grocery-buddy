import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, onItemEdit, onItemRemove}) => {
  console.log(items);

  const toggleColor = function (e) {
    const targetEl = e.target.closest('.item');
    targetEl.classList.toggle('selected');
  };

  return (
    <div className='list-box'>
      <ul className='list'>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li className='item' key={item.id}>
                <span onClick={toggleColor}>{item.name}</span>
                <div className='btn-box'>
                  <button className='btn btn--edit' onClick={() => onItemEdit(item.id)}>
                    <FaEdit />
                  </button>
                  <button className='btn btn--trash' onClick={() => onItemRemove(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default List;
