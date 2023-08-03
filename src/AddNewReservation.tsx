import Button from '@mui/material/Button'
import { type InitData } from './models'

import { useContext } from 'react'
import { DataService } from './utils'
import { DataContext } from './DataProvider'
import DetailsDialog from './DetailsDialog'
import useDialog from './Hooks/useDialog'

interface IAddNewReservation {
  reservation: InitData
}

export default function AddNewReservation ({ reservation }: IAddNewReservation) {
  const dataList = useContext<InitData[]>(DataContext)
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
