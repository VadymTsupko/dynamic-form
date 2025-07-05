import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const FormErrorMessage = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Something went wrong here</Alert>
    </Stack>
  );
};

export default FormErrorMessage;
