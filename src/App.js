import Main from "./pages/Main";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme} />
      <GlobalStyles theme={theme} />
      <Main />
    </>
  );
}

export default App;
