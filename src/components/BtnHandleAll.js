import React from 'react'


const BtnHandleAll = ({onAllSelect, onAllClear}) => {

  return (
    <div className='btn-box--all'>
      <button className='btn btn-all btn--select' onClick={onAllSelect}>Select All</button>
      <button className='btn btn-all btn--clear' onClick={onAllClear}>Clear All</button>
    </div>
  );
}

export default BtnHandleAll