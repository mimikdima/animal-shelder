import { Injectable } from '@angular/core';
import StateMachine from '../state-machine/state-machine';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { IStep } from '../interfaces/steps.interface';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  stateMachine = new StateMachine();
  currentStepSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  steps = ['start','pet','personalData'];

  currentStep: string;

  constructor(private apiSrv: ApiService) {
    this.currentStep = this.steps[0];
  }

  createStateMachine() {
    return this.stateMachine.createMachine({
      initial: 'start',
      states: {
        start: {
          actions: {
            onEnter: (event) => this.setCurrentStep(event)
          },
          transitions: {
            next: {
              target: 'pet',
              action() { }
            },
            back: {
              target: 'lastPage',
              action() {},
            },
          },
        },
        pet: {
          actions: {
            onEnter: (event) => this.setCurrentStep(event),
            onExit(event) {}
          },
          transitions: {
            next: {
              target: 'personalData',
              action() {},
            },
            back: {
              target: 'start',
              action() {},
            },
          },
        },
        personalData: {
          actions: {
            onEnter: (event) => this.setCurrentStep(event),
            onExit(event) {}
          },
          transitions: {
            next: {
              target: 'lastPage',
              action() {},
            },
            back: {
              target: 'pet',
              action() {},
            },
          },
        },
        lastPage: {
          actions: {
            onEnter: (event) => this.setCurrentStep(event),
            onExit(event) {}
          },
          transitions: {},
        }
      }
    });
  }

  getSteps(): string[] {
    return this.steps;
  }

  setCurrentStep(state: string): void {
    this.currentStepSubject$.next(this.steps.indexOf(state));
  }

  getCurrentStepSubject(): Observable<number> {
    return this.currentStepSubject$.asObservable();
  }

}
