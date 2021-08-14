import React from 'react'


const Form = ({item, onFormSubmit, setItem, editMode}) => {

  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input
        className='input'
        type='text'
        placeholder='e.g. たまご'
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button className={editMode ? 'btn--submit edit' : 'btn--submit'}>
        {editMode ? 'Edit' : 'Submit'}
      </button>
    </form>
  );
}

export default Form