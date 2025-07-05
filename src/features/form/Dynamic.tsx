import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"

const DynamicForm = () => {
  return (
    <Stack spacing={2}>
      <TextField label="label" />

      <TextField
        type="number"
        label="label"
        slotProps={{ htmlInput: { min: 0, max: 100 } }}
      />

      <FormControl fullWidth>
        <InputLabel id="input-label-id">label</InputLabel>
        <Select labelId="input-label-id" label="label">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel control={<Checkbox />} label="label" />

      <Button variant="contained">Submit</Button>
    </Stack>
  )
}

export default DynamicForm
