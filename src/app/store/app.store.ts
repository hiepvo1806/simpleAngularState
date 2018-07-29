import { StoreEnhancer, createStore, compose,Store } from 'redux';
import { AppState } from '../state/app.state';
import { AppReducer } from '../reducer/app.reducer';
import { InjectionToken } from '@angular/core';


const devtools: StoreEnhancer<AppState> =
    window['devToolsExtension'] ?
        window['devToolsExtension']() : f => f;


export function createAppStore() : Store<AppState>  {
    return createStore(
        AppReducer,
        compose(devtools)
      );
}

export const AppStoreInjectionToken = new InjectionToken('App.store');