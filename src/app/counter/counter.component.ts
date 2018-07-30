import { Component, OnInit,Inject } from '@angular/core';
import { AppStoreInjectionToken } from '../store/app.store'
import { Store } from 'redux';
import { AppState } from '../state/app.state';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter = -1;
  constructor(@Inject(AppStoreInjectionToken) private store: Store<AppState>) { 
    this.store.subscribe(()=> this.readState());
    this.readState();
  }

  readState() {
    let currentState = this.store.getState() as AppState;
    this.counter = currentState.counter.counter;
  }


  ngOnInit() {
  }

  increaseBtnHandler() {
    this.store.dispatch({
      type: 'INCREASE'
    });
  }
}
