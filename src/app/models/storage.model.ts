export interface IContainerDivision {
    id: number;
    type: ContainerDivisionTypeEnum;
    parts: Array<string>; // Part Ids, can be null
    other: string; // screws, dividers, etc.
}

export interface IContainer {
    id: number;
    divisions: Array<IContainerDivision>;
    type: ContainerTypeEnum;
    description: string;
    location: string;
    storageAreaId: number;
    rows: number;
    columns: number;
    slots: Array<IContainerDivisionSlot>;
}

export interface IStorageArea {
    id: number;
    name: string;
    description: string;
}

export interface IContainerDivisionSlot {
    id: number;
    row: number;
    column: number;
    containerDivision: IContainerDivision;
}

export enum ContainerDivisionTypeEnum {
    Drawer,
    Section
}

export enum ContainerTypeEnum {
    StorageBox,
    Drawers,
    Bulk,
    ZipBag
}