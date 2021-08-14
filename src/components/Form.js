import React from 'react'


const Form = ({item, onFormSubmit, setItem}) => {

  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input
        className='input'
        type='text'
        placeholder='e.g. たまご'
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button className='btn--submit'>Submit</button>
    </form>
  )
}

export default Form