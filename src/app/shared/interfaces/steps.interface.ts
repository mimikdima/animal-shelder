
export interface IStep {
    stepIndex: number;
    isComplete: boolean;
}

export interface ISteps {
    [key: string]: IStep
}

