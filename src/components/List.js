import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, onItemRemove }) => {
  console.log(items);

  return (
    <div className='list-box'>
      <ul className='list'>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li className='item' key={item.id}>
                {item.name}
                <div className='btn-box'>
                  <button className='btn btn--edit' >
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

// return (
//   <div className='list-box'>
//     <ul className='list'>
//     </ul>
//   </div>
// );

/*
<div className='list-box'>
      <ul className='list'>
         <li className='item'>
          tomato
          <div className='btn-box'>
            <button className='btn btn--edit'>
              <FaEdit />
            </button>
            <button className='btn btn--trash'>
              <FaTrash />
            </button>
          </div>
        </li>
        <li className='item'>
          tomato
          <div className='btn-box'>
            <button className='btn btn--edit'>
              <FaEdit />
            </button>
            <button className='btn btn--trash'>
              <FaTrash />
            </button>
          </div>
        </li>
      </ul>
    </div>

*/

export default List;
