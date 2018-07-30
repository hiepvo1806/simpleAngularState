import { PageOneState } from '../state/page-one.state';

const initialState: PageOneState = { 
    name: 'hiep',
    year: 1990
 };
export const PageOneReducer = (state = initialState,action)=> {
    switch (action.type) {
        default:
            return state;
    }
}
