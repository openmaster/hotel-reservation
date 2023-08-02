import Button from '@mui/material/Button'
import { type InitData, RoomSize } from './models'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import Grid from '@mui/material/Grid'
import { Controls } from './Controls'

import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useState } from 'react'

interface IReservationDetails {
  reservation: InitData
}
export default function ReservationDetails ({
  reservation
}: IReservationDetails) {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = () => {}
  return (
    <>
      <Button sx={{ float: 'right' }} size="small" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DialogTitle>your Reservation Details </DialogTitle>
        <DialogContent>
          <form>
        <Grid
          container
            spacing={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
          <Controls.MyGrid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ margin: '20px' }} label="Date of Arrival" />
            </LocalizationProvider>
            </Controls.MyGrid>
            <Controls.MyGrid>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ margin: '20px' }} label="Date of Departure" />
          </LocalizationProvider>
          </Controls.MyGrid>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={reservation.room.roomSize}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'business-suite'}>business-suite</MenuItem>
              <MenuItem value={'presidential-suite'}>
                presidential-suite
              </MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>

          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>update</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
