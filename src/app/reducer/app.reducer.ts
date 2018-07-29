import  {AppState} from '../state/app.state'; 
const initialState: AppState = { counter: 0 };

export const AppReducer =
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