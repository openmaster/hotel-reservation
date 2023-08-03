import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

interface IColorSwitch {
  name: string
  value: boolean
  label: string
  onChange: any
}
export default function MyCheckBox (props: IColorSwitch) {
  const { name, value, label, onChange } = props
  return (
     <FormControlLabel
        name={name}
        value={value}
        onChange={onChange}
        control={<Checkbox defaultChecked />}
        label={label}
      />
  )
}
