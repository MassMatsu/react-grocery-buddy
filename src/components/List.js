import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';

const List = React.memo(({ items, onItemEdit, onItemRemove }) => {
  console.log(items);

  const toggleColor = function (e) {
    const targetEl =
      (e.target.classList.contains('itemName') && e.target.parentNode) ||
      (e.target.classList.contains('item') && e.target);

    if (targetEl) targetEl.classList.toggle('selected');
  };

  return (
    <div className='list-box'>
      <ul className='list'>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li className='item' key={item.id} onClick={toggleColor}>
                <span className='itemName'>{item.name}</span>
                <div className='btn-box'>
                  <button
                    className='btn btn--edit'
                    onClick={() => onItemEdit(item.id)}
                  >
                    <FaEdit className='btn' />
                  </button>
                  <button
                    className='btn btn--trash'
                    onClick={() => onItemRemove(item.id)}
                  >
                    <FaTrash className='btn' />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default List;
