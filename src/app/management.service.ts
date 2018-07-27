import { Injectable } from '@angular/core';
import { StateObj } from './app.component';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  public currentState: StateObj = new StateObj();
  public stateStorage: any = {};
  public stateBehavior = new BehaviorSubject<StateObj>(this.currentState);
  constructor() {
   }

  setState(state: StateObj) {
    this.currentState = state;
    var stateProp = state.state.toString();
    this.stateStorage[stateProp] = state.data;
  }

  moveState(state:number , isLoadOldData: boolean = true) {
    var stateProp = state.toString();
    let stateOb : StateObj=  {
      state: state,
      data : isLoadOldData?  this.stateStorage[stateProp] : {}
    }
    this.stateBehavior.next(stateOb);
  }
}
