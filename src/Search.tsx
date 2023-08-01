import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface ISearch {
  handleOnChange: any;
}
export default function Search({ handleOnChange }: ISearch) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <TextField
        onChange={(e) => handleOnChange(e.target.value)}
        fullWidth
        label="Search with name or phone number"
        id="search"
      />
    </Box>
  );
}