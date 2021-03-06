export interface IMySet {
    setNumber: string;
    name: string;
    year: number;
    themeId: number;
    numberOfParts: number;
    setImageUrl: string;
    setUrl: string;
    lastModifiedDate: Date;
    isItBuilt: boolean;
    storageAreaId: number;
    haveInstructions: boolean;
    haveBox: boolean;
    haveStickers: boolean;
    stickersOnModel: boolean;
    setState: SetState;
    listId: string;
    quantity: number;
    includeSpares: boolean;
    id: number;
}

export enum SetState {
    Displayed,
    Boxed,
    PartedOut,
    Unknown
}

export interface ITheme {
    id: number;
    parentId: number;
    name: string;
}