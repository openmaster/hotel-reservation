import Search from './Search'
import SearchResults from './SearchResults'
import { useState, useContext } from 'react'
import { InitData } from './models'
import { DataContext } from './DataProvider'

export default function HotelReservation () {
  const dataList = useContext<InitData[]>(DataContext)
  const [searchedList, setSearchedList] = useState<InitData[]>(dataList)
  // function handleClick() {
  //   DataService.changeData([
  //     ...initData,
  //     { ...initData[0], firstName: "room" },
  //   ]);
  // }
  function handleSearch(txt: string) {
    setSearchedList(
      dataList.filter(
        (d) =>
          d.firstName.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) ||
          d.lastName.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) ||
          d.phone.includes(txt)
      )
    )
  }
  return (
    <div>
      <h3>Hotel Reservation</h3>
      <Search handleOnChange={handleSearch} />
      <SearchResults reservations={searchedList} />
      {/* <button onClick={handleClick}>add data</button> */}
    </div>
  )
}
