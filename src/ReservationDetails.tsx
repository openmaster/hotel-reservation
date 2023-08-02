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
                  <DatePicker
                    sx={{ margin: '20px' }}
                    label="Date of Departure"
                  />
                </LocalizationProvider>
              </Controls.MyGrid>
              <Controls.MyGrid>
                <FormControl variant="standard" sx={{ margin: '20px' }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={reservation.room.roomSize}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={'business-suite'}>business-suite</MenuItem>
                    <MenuItem value={'presidential-suite'}>
                      presidential-suite
                    </MenuItem>
                  </Select>
                  <FormHelperText>Choose a room type</FormHelperText>
                </FormControl>
              </Controls.MyGrid>

              <Controls.MyGrid>
                <TextField
                  sx={{ margin: '20px' }}
                  type="number"
                  required
                  name="room.rooSize"
                  defaultValue={reservation.room.roomQuantity}
                  helperText="Maxium: 5"
                  variant="standard"
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <TextField
                  type="text"
                  required
                  name="firstName"
                  label="First Name"
                  value={reservation.firstName}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <TextField
                  type="text"
                  required
                  name="lastName"
                  label="Last Name"
                  value={reservation.lastName}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <TextField
                  type="email"
                  required
                  name="email"
                  label="Email"
                  value={reservation.email}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <TextField
                  type="text"
                  required
                  name="phone"
                  label="Phone Number"
                  value={reservation.phone}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              {/* address */}
              <Controls.MyGrid vp={6}>
                <TextField
                  type="text"
                  required
                  name="addressStreet.streetName"
                  label="Street Name"
                  value={reservation.addressStreet.streetName}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={6}>
                <TextField
                  type="text"
                  required
                  name="addressStreet.streetName"
                  label="Street Number"
                  value={reservation.addressStreet.streetName}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={4}>
                <TextField
                  type="text"
                  required
                  name="addressLocation.zipCode"
                  label="Zip"
                  value={reservation.addressLocation.zipCode}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={4}>
                <TextField
                  type="text"
                  required
                  name="addressLocation.state"
                  label="State"
                  value={reservation.addressLocation.state}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={4}>
                <TextField
                  type="text"
                  required
                  name="addressLocation.city"
                  label="City"
                  value={reservation.addressLocation.city}
                  sx={{ margin: '10px' }}
                  variant="standard"
                />
              </Controls.MyGrid>
              {/* Extras */}
              <Controls.MyGrid vp={4}>
                <FormControl variant="standard" sx={{ margin: '20px' }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Extras
                  </InputLabel>
                  <Select
                    multiple
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={reservation.extras}
                    label="Extras"
                    onChange={handleChange}
                  >
                    <MenuItem value={'extraBreakfast'}>extraBreakfast</MenuItem>
                    <MenuItem value={'extraTV'}>extraTV</MenuItem>
                    <MenuItem value={'extraWiFi'}>extraWiFi</MenuItem>
                    <MenuItem value={'extraParking'}>extraParking</MenuItem>
                    <MenuItem value={'extraBalcony'}>extraBalcony</MenuItem>
                  </Select>
                  <FormHelperText>Choose a room type</FormHelperText>
                </FormControl>
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <Controls.MyRadioGroup
                  name="reservation.payment"
                  label="Payment"
                  value={reservation.payment}
                  onChange={() => { alert('hitting') }}
                  items={['cash', 'cc']}
                />
              </Controls.MyGrid>
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
