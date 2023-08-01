// export enum RoomSize {
//   businessSuite = "business-suite",
//   presidentialSuite = "presidential-suite",
// }
export type RoomSize = "business-suite" | "presidential-suite";

export interface InitData {
  id: number;
  stay: {
    arrivalDate: string;
    departureDate: string;
  };
  room: {
    roomSize: RoomSize;
    roomQuantity: number;
  };
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressStreet: {
    streetName: string;
    streetNumber: string;
  };
  addressLocation: {
    zipCode: string;
    state: string;
    city: string;
  };
  extras: Array<string>;
  payment: string;
  note: string;
  tags: Array<string>;
  reminder: boolean;
  newsletter: boolean;
  confirm: boolean;
}
