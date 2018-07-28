import  {AppState} from '../state/app.state'; 
const initialState: AppState = { counter: 0 };

export const AppReducer =
    function todos(state = initialState, action) {
        switch (action.type) {
            default:
                return state
        }
    }