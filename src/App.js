import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>Grocery Buddy</h1>
      <form className='form'>
        <input className='input' type='text' placeholder='e.g. たまご' />
        <button className='btn--submit'>Submit</button>
      </form>
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

      <div className='btn-box--clear'>
        <button className='btn btn--clear'>Clear All</button>
      </div>
    </div>
  );
};

export default App;
