import { Component, OnInit, OnDestroy } from '@angular/core';
import { WizardService } from 'src/app/shared/services/wizard.service';
import { ICurrentState } from 'src/app/shared/state-machine/state-machine.interface';
import { FormGroup , Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { IPet } from 'src/app/shared/interfaces/wizard.interface';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IStep } from 'src/app/shared/interfaces/steps.interface';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();
  stateWizard: ICurrentState;
  wizardForm: FormGroup;
  petsList: IPet[];
  currentState: IStep

  constructor(private wizardSrv: WizardService, 
              private fb: FormBuilder,
              private apiSrv: ApiService,
              private spinnerSrv: SpinnerService,
              private router: Router) { 
    this.stateWizard = this.wizardSrv.createStateMachine();
  }

  ngOnInit(): void {
    this.createForm();

    this.apiSrv.getPetsList().pipe(takeUntil(this.onDestroy$)).subscribe((pets: IPet[]) => {
      this.petsList = pets;
      this.spinnerSrv.stopSpinner();
    })
  }

  onNextStep(): void {
    this.stateWizard.transition(this.stateWizard.value, 'next');

    if(this.stateWizard.value === 'lastPage') {
      this.saveForm();
    }
  }

  onBackStep(): void {
      this.stateWizard.transition(this.stateWizard.value, 'back');
  }

  createForm() {
    this.wizardForm = this.fb.group({
      pet: ['', [Validators.required]],
      personalData: this.fb.group({
        name: ['', [Validators.required]],
        phone: [null , [Validators.required]],
      })
    });
  }

  saveForm() {
    this.apiSrv.saveContacts(this.wizardForm.value).pipe(takeUntil(this.onDestroy$)).subscribe((res: number) => {
      if(res) {
        this.spinnerSrv.stopSpinner();
      } else {
        this.spinnerSrv.stopSpinner();
        this.router.navigate(["/error"]);
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
