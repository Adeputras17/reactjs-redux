import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../app/Counterfeatures/actions';
import { increment } from '../app/Counterfeatures/actions';

const Head = () => {
  let {count} = useSelector (state => state.counter)
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(decrement(1))}>-</button>
      {' '} <span>{count}</span> {' '}
      <button onClick={()=>dispatch(increment(1))}>+</button>
    </div>
  )
}

export default Head