import { ICurrentState, IStateMachine } from "./state-machine.interface";


export default class StateMachine {
    createMachine (stateMachine: IStateMachine) {
        const machine = {
            value: stateMachine.initial,
            transition(currentStateValue: string, event: string): string {
                const currentState = stateMachine.states[currentStateValue];
                const nextTransition = currentState.transitions[event];
                if (!nextTransition) {
                  return '';
                }
                const nextState = nextTransition.target;
                const nextStateDefinition = stateMachine.states[nextState];
          
                if(nextTransition.action) {
                    nextTransition.action();
                }
                if(currentState.actions.onExit) {
                    currentState.actions.onExit(nextState);
                }
                if(nextStateDefinition.actions.onEnter) {
                    nextStateDefinition.actions.onEnter(nextState);
                }

                machine.value = nextState;

                return machine.value;
            }
        }
        return machine;
    }
}