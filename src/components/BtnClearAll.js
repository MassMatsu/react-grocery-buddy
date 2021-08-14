import React from 'react'


const BtnClearAll = ({onAllClear}) => {
  return (
    <div className='btn-box--clear'>
      <button className='btn btn--clear' onClick={onAllClear}>Clear All</button>
    </div>
  );
}

export default BtnClearAll