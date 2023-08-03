import Button from '@mui/material/Button'
import { type InitData } from './models'

import { useContext } from 'react'
import { DataService } from './utils'
import { DataContext } from './DataProvider'
import DetailsDialog from './DetailsDialog'
import useDialog from './Hooks/useDialog'
interface IReservationDetails {
  reservation: InitData
}

export default function ReservationDetails ({ reservation }: IReservationDetails) {
  const dataList = useContext<InitData[]>(DataContext)
  // using custom hook to control dialogs in different components
  const {
    openDialog,
    formValues,
    setFormValues,
    handleDialogOpen,
    handleDialogClose
  } = useDialog(reservation)

  const handleUpdateData = () => {
    // rxjs based service instance to inject new data.
    DataService.changeData(dataList.map((d: InitData) => {
      if (d.id === formValues.id) {
        return formValues
      } else {
        return d
      }
    }))
    handleDialogClose()
  }

  return (
    <>
      <Button sx={{ float: 'right' }} size="small" onClick={handleDialogOpen}>
        Details
      </Button>
      <DetailsDialog
        formValues={formValues}
        setFormValues={setFormValues}
        openDialog={openDialog}
        handleUpdateData={handleUpdateData}
        handleDialogClose={handleDialogClose}
      />
    </>
  )
}
