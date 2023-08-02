import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface IMyRadioGroup {
  name: string;
  label: string;
  value: string;
  onChange: any;
  items: Array<string>;
}
export default function MyRadioGroup(props: IMyRadioGroup) {
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl sx={{ margin: "20px" }} >
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name={name}
        value={value}
        onChange={onChange}
      >
        {items.map((item: string, index: number) => (
          <FormControlLabel
            key={index}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
