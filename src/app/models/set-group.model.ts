import { IMySet } from "./set.model";

export interface SetGroup {
  id: number;
  name: string;
  sets: IMySet[];
}
