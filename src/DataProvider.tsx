import { createContext, useState, useEffect } from "react";
import { initData } from "./data";
import { InitData } from "./models";
import { DataService } from "./utils/DataService";

export const DataContext = createContext<Array<InitData> | []>([]);

export default function DataProvider({ children }: any) {
  const [reservations, setReservations] = useState<Array<InitData>>(initData);
  useEffect(() => {
    const sub = DataService.onData().subscribe((data: any) => {
      console.log(data);
      if (data) {
        setReservations(data);
      } else {
        setReservations(initData);
      }
    });

    // return sub.unsubscribe;
  }, []);
  return (
    <DataContext.Provider value={reservations}>{children}</DataContext.Provider>
  );
}
