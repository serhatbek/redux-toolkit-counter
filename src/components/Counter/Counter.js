import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const handleIncrement = () => {
    console.log('+1');
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className='counter'>
      <p>{count}</p>
      <div>
        <button onClick={handleIncrement}>Increase +1</button>
        <button onClick={handleDecrement}>Decrease -1</button>
      </div>
    </div>
  );
};

export default Counter;
