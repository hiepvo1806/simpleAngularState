import  { CounterState } from '../state/counter.state'; 
const initialState: CounterState = { counter: 0 };

export const CounterReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case 'INCREASE' : 
            return {
                counter : state.counter + 1
            }
            //return Object.assign({}, state, { counter: state.counter + 1 });
            default:
                return state
        }
    }