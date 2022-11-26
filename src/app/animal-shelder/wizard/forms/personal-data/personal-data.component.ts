import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ControlContainer, FormGroupDirective, Validators, FormBuilder, NgModel } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  name: FormControl;
  childForm: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.childForm = this.rootFormGroup.control.get("personalData") as FormGroup;
  }

}
