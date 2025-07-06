import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import type { Field } from "../../utils/types";
import { FieldType } from "../../utils/types";
import type {
  ControllerRenderProps,
  FieldError,
  FieldValues
} from "react-hook-form";

const FieldGenerator = (
  fieldProps: Field,
  controllerProps: ControllerRenderProps<FieldValues, string>,
  invalid: boolean,
  error?: FieldError
) => {
  switch (fieldProps.type) {
    case FieldType.Number:
      return (
        <TextField
          type="number"
          label={fieldProps.label}
          slotProps={{ htmlInput: { min: 0, max: 100 } }}
          {...controllerProps}
        />
      );
    case FieldType.Checkbox:
      return (
        <FormControlLabel
          control={
            <Checkbox
              {...controllerProps}
              checked={!!controllerProps.value}
            />
          }
          label={fieldProps.label}
        />
      );

    case FieldType.Select:
      return (
        <FormControl fullWidth>
          <InputLabel id={`${fieldProps.id}-label`}>
            {fieldProps.label}
          </InputLabel>
          <Select
            labelId={`${fieldProps.id}-label`}
            id={fieldProps.id}
            label={fieldProps.label}
            {...controllerProps}
          >
            {fieldProps.options.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      );

    default:
      return (
        <>
          <TextField
            label={fieldProps.label}
            {...controllerProps}
            error={fieldProps.id === "email" ? invalid : false}
            helperText={fieldProps.id === "email" ? error?.message : ""}
          />
        </>
      );
  }
};

export default FieldGenerator;
