import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { type Dayjs } from 'dayjs'

interface IMyDatePicker {
  value: Dayjs | string | null
  label: string
  onChange: any
}
export default function MyDatePicker (props: IMyDatePicker) {
  const { value, label, onChange } = props
  return (
     <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dayjs(value)}
          onChange={onChange}
          label={label}
          sx={{ margin: '20px' }}
        />
    </LocalizationProvider>

  )
}
