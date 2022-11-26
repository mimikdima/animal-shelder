import { Component, OnInit, OnDestroy } from '@angular/core';
import { WizardService } from 'src/app/shared/services/wizard.service';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();
  currentStepIndex: number;

  steps: string[];

  constructor(private wizardSrv: WizardService) { }

  ngOnInit(): void {
    this.steps = this.wizardSrv.getSteps();
    this.wizardSrv.getCurrentStepSubject().pipe(takeUntil(this.onDestroy$)).subscribe((stepIndex: number) => {
      this.currentStepIndex = stepIndex;
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
