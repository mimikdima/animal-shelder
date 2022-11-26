import { Component, OnInit, Input } from '@angular/core';
import { IPet } from 'src/app/shared/interfaces/wizard.interface';
import { FormControl, FormGroup, ControlContainer, FormGroupDirective, Validators, FormBuilder, NgModel } from '@angular/forms';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  childForm: FormGroup;
  @Input() petsList: IPet[];

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.childForm = this.rootFormGroup.control;
  }

}
