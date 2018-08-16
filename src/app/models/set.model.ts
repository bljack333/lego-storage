// Rebrickable set
export interface ISet {
    setNumber: string;
    name: string;
    year: number;
    themeId: number;
    numberOfParts: number;
    setImageUrl: string;
    lastModifiedDate: Date;
}

export interface IMySet extends ISet {
    isItBuilt: boolean;
    storageAreaId: number;
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