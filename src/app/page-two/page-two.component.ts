import { Component, OnInit ,Input} from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { ManagementService } from '../management.service';
@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  @Input() data : any;
  public currentForm: FormGroup;
  constructor(private _service : ManagementService) { 
    this.currentForm = new FormGroup({
      'age':  new FormControl(null)
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
      state: 2,
      data : this.currentForm.value
    });
    this._service.moveState(3);
  }

  previousHandler() {
    console.log('PreviousHandler()',this.currentForm.value);
    this._service.setState({
      state: 2,
      data : this.currentForm.value
    });
    this._service.moveState(1);
  }

}
