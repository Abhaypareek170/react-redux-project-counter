import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const show  = useSelector(state=>state.counter.showCounter);
  const counter = useSelector(state=>state.counter.counter);
  
  const incrementHandler = ()=>{
    dispatch(counterActions.increment());
  }

  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
  }
  const increase = ()=>{
    dispatch(counterActions.increase(5));
  }

  const decrease = ()=>{
    dispatch(counterActions.decrease(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div className={classes.button}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increase}>IncrementBy5</button>
        <button onClick={decrease}>DecrementBy5</button>
      </div>
      <button className={classes.toggle} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
