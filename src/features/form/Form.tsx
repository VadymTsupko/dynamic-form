import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import { useGetFormConfigQuery } from "./formApiSlice"
import { type Field } from "../../utils/types"
import { type SubmitHandler, useForm } from "react-hook-form"
import { useEffect } from "react"

type FormValues = Record<string, unknown>

const Form = ({ fields }: { fields: Field[] }) => {
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm()

  useEffect(() => {
    reset()
  }, [])

  const onSubmit: SubmitHandler<FormValues> = async data => {
    if (Object.keys(data).length === 0) {
      alert("Please fill in the form")
      return
    }

    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    reset()
  }

  return (
    <form
      onSubmit={event => {
        void handleSubmit(onSubmit)(event)
      }}
    >
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

        <Button
          variant="contained"
          type="submit"
          loading={isSubmitting}
          loadingIndicator="Sending data..."
        >
          Submit
        </Button>
      </Stack>
    </form>
  )
}

export default Form
