import { createStore } from "redux";

const counterReducer = (state={counter:0},action)=>{
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrementby5'){
        return {
            counter: state.counter - 5
        }
    }
    if(action.type === 'incrementby5'){
        return {
            counter: state.counter + 5
        }
    }
    
    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1
        }
    }
    return state;
}

const store = createStore(counterReducer);

// const counterSubscriber = ()=>{
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscriber(counterSubscriber);

// store.dispatch({type:'increment'});
// store.dispatch({type:'decrement'});

export default store;
