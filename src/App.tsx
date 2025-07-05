import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./theme"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import DynamicForm from "./features/form/Dynamic"

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Container maxWidth="sm">
      <Typography variant="h1" align="center">
        Dynamic Form
      </Typography>

      <DynamicForm />
    </Container>
  </ThemeProvider>
)
