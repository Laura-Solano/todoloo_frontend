import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./components/home/LandingPage";
import Footer from "./components/main/Footer";
import Auth from "./auth/Auth";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme/theme";
import HomeIndex from "./components/home/HomeIndex";
import Header from "./components/main/Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
  }

  updateToken = (newToken) => {
    if (newToken === undefined) {
      return;
    } else {
      localStorage.setItem("sessionToken", newToken);
      this.setState({ sessionToken: newToken });
    }
  };

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Container className="app" maxWidth="xl">
          <Header clearToken={this.state.clearToken} />
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            {this.state.sessionToken ===
            localStorage.getItem("sessionToken") ? (
              <HomeIndex sessionToken={this.state.sessionToken} />
            ) : (
              <Auth updateToken={this.updateToken} />
            )}
          </Switch>
          <Footer />
        </Container>
      </ThemeProvider>
    );
  }
}
export default App;
