import Button from '@mui/material/Button'
import { type InitData } from './models'

import { useState, useContext } from 'react'
import { DataService } from './utils'
import { DataContext } from './DataProvider'
import DetailsDialog from './DetailsDialog'
interface IReservationDetails {
  reservation: InitData
}
// using custom controls for cleaner code and maintainability.

export default function ReservationDetails ({ reservation }: IReservationDetails) {
  const dataList = useContext<InitData[]>(DataContext)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<InitData>(reservation)

  const handleClickOpen = () => {
    setOpenDialog(true)
    setFormValues(reservation)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }
  const handleUpdateData = () => {
    // rxjs based service instance to inject new data.
    DataService.changeData(dataList.map((d: InitData) => {
      if (d.id === formValues.id) {
        return formValues
      } else {
        return d
      }
    }))
    handleCloseDialog()
  }

  return (
    <>
      <Button sx={{ float: 'right' }} size="small" onClick={handleClickOpen}>
        Details
      </Button>
      <DetailsDialog
        formValues={formValues}
        setFormValues={setFormValues}
        openDialog={openDialog}
        handleUpdateData={handleUpdateData}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  )
}
