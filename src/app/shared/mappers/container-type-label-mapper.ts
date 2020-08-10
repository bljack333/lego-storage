import { ContainerTypeEnum } from '../../models';

export const ContainerType2LabelMapper: Record<ContainerTypeEnum, string> = {
    [ContainerTypeEnum.StorageBox]: 'Storage Box',
    [ContainerTypeEnum.Drawers]: 'Drawers',
    [ContainerTypeEnum.Bulk]: 'Bulk Storage',
    [ContainerTypeEnum.ZipBag]: 'Zip-loc Bag'
};
