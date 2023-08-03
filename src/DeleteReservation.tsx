import Button from '@mui/material/Button'
import { useContext } from 'react'
import { DataContext } from './DataProvider'
import { DataService } from './utils'
export default function DeleteReservation ({ id }: { id: number }) {
  const dataList = useContext(DataContext)
  return (
        <Button onClick={() => {
          const res = dataList.filter((d) => d.id !== id)
          DataService.changeData([...res])
        }} sx={{ float: 'right' }} size="small" color="error">
          Delete
        </Button>
  )
}
