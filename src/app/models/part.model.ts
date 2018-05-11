export interface IPart {
    categories: Array<IPartCategory>;
    colors: Array<IColor>;
    source: SourceEnum;
}

export interface IColor {

}

export interface IPartCategory {

}

export enum SourceEnum {
    Bricklink,
    PickABrick
}