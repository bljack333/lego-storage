export interface ContainerDivision {
    id: number;
    type: ContainerDivisionTypeEnum;
    parts: Array<string>; // Part Ids, can be null
    other: string; // screws, dividers, etc.
}

export class Container {
    id: number;
    divisions: Array<ContainerDivision>;
    containerType: ContainerTypeEnum;
    description: string;
    location: string;
    storageLocationId: number;
    rows: number;
    columns: number;
    slots: Array<ContainerDivisionSlot>;
    subContainers: Array<Container>;
}

export class StorageLocation {
    id: number;
    name: string;
    description: string;
}

export interface ContainerDivisionSlot {
    id: number;
    row: number;
    column: number;
    containerDivision: ContainerDivision;
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
