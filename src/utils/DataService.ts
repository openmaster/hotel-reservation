import { Subject, interval } from 'rxjs'
import type { InitData } from '../models'

export const subject = new Subject()

export const DataService = {
  changeData: (data: InitData[]) => { subject.next(data) },
  onData: () => subject.asObservable()
}
