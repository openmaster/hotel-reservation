import TextField from '@mui/material/TextField'
interface IMyTextField {
  type?: string
  label: string
  name: string
  required?: boolean
  value: string | number
  helperText?: string
  onChange: any
}
export default function MyTextField (props: IMyTextField) {
  const { type = 'text', label, name, required = false, value, onChange } = props
  return (
    <TextField
      type={type}
      required={required}
      name={name}
      label={label}
      value={value}
      sx={{ margin: '20px' }}
      variant="standard"
      onChange={onChange} />
  )
}
