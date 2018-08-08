export interface ISet {
    isItBuilt: boolean;
    whereIsIt: string;
    haveInstructions: boolean;
    haveBox: boolean;
    haveStickers: boolean;
    setState: SetState;
}

export enum SetState {
    Displayed,
    Boxed,
    PartedOut
}