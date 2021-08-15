import React from 'react';

const BtnHandleAll = ({ onAllClear }) => {
  const onAllSelect = function () {
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
      item.classList.add('selected');
      console.log(item.classList);
    });
  };

  return (
    <div className='btn-box--all'>
      <button className='btn btn-all btn--select' onClick={onAllSelect}>
        Select All
      </button>
      <button className='btn btn-all btn--clear' onClick={onAllClear}>
        Clear All
      </button>
    </div>
  );
};

export default BtnHandleAll;
