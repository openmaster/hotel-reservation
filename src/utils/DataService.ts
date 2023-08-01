import { Subject, interval } from "rxjs";
import { InitData } from "../models";

export const subject = new Subject();

export const DataService = {
  changeData: (data: Array<InitData>) => subject.next(data),
  onData: () => subject.asObservable(),
};
