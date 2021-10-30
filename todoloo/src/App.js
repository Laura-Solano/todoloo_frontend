import globalTheme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import HomeIndex from "./components/home/HomeIndex";
import NavBar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <div>
        {/* <Router>
          <Route exact path="/"> */}
        <HomeIndex />
        {/* </Route>
        </Router> */}
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
