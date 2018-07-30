import { Reducer, combineReducers } from 'redux';
import { CounterReducer } from '../reducer/counter.reducer';
import { PageOneReducer } from '../reducer/page-one.reducer';
import {AppState} from '../state/app.state';

export const AppReducer = combineReducers<AppState>({
    counter: CounterReducer,
    pageOne: PageOneReducer
})
