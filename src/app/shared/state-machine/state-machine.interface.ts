export interface IStateMachine{
    initial: string,
    states: {
        [key: string]:  {
            actions: {
                onEnter?(event: string): void,
                onExit? (event: string): void
            },
            transitions: {
                [key: string]: {
                    action(): void,
                    target: string
                }
            }
        }
    }
}

export interface ICurrentState{
    value: string,
    transition(currentStateValue: string, event: string): string
}