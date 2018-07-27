import { Component, OnInit , Input} from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { ManagementService } from '../management.service';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  @Input() data : any;
  public currentForm: FormGroup;
  constructor(private _service : ManagementService) { 
    this.currentForm = new FormGroup({
      'name':  new FormControl(null),
      'year':  new FormControl(null)
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
      state: 1,
      data : this.currentForm.value
    });
    this._service.moveState(2);
  }
}
