export interface IMyPart {
    name: string;
    partNumber: string;
    quantity: number;
    partUrl: string;
    partImageUrl: string;
    category: IPartCategory;
    colors: Array<IColor>;
}

export interface IColor {
    id: number;
    name: string;
    rgb: string;
    isTransparent: boolean;
}

export interface IPartCategory {

}
