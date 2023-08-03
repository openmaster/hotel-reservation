import Button from '@mui/material/Button'
import { type InitData, type PaymentRadioTypes } from './models'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import Grid from '@mui/material/Grid'
import { Controls } from './Controls'

import TextField from '@mui/material/TextField'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { MuiChipsInput } from 'mui-chips-input'

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
