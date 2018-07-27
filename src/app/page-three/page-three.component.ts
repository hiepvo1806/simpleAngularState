import { Component, OnInit, Input } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { ManagementService } from '../management.service';
@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {
  @Input() data : any;
  public currentForm: FormGroup;
  constructor(private _service : ManagementService) { 
    this.currentForm = new FormGroup({
      'pay':  new FormControl(null)
    });
  }

  ngOnInit() {
  }

   ngOnChanges() {
    if(this.data)
      this.currentForm.setValue(this.data);
  }
  saveHandler() {
    console.log('saveHandler()',this.currentForm.value);
    this._service.setState({
      state: 3,
      data : this.currentForm.value
    });
    this._service.moveState(1);
  }

  previousHandler() {
    console.log('PreviousHandler()',this.currentForm.value);
    this._service.setState({
      state: 3,
      data : this.currentForm.value
    });
    this._service.moveState(2);
  }

}
