import { Component } from '@angular/core';
import { ManagementService } from './management.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stateData: StateObj;
  constructor(private _service: ManagementService) {
    this.stateData = new StateObj();
    this._service.stateBehavior.subscribe(
      r => this.stateData = r
    )
  }
}


export class StateObj {
  state: number;
  data: any;
  constructor() {
    this.state = 1;
    this.data = {};
  }
}