import { React, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/home/LandingPage";
import Footer from "./components/main/Footer";
import Auth from "./auth/Auth";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme/Theme";
import HomeIndex from "./components/home/HomeIndex";
import Header from "./components/Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: "",
      clearToken: "",
    };
  }

  updateToken = (newToken) => {
    if (newToken === undefined) {
      return;
    } else {
      localStorage.setItem("sessionToken", this.state.newToken);
      this.setState({ sessionToken: newToken });
    }

    // clearToken = () => {
    //   localStorage.clear();
    //   this.setState({ sessionToken: "" });
    // };
  };
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Container className="app" maxWidth="xl">
          <Header />
          <Switch>
            <Route exact path={"/"} component={LandingPage} />

            {this.state.sessionToken ? (
              <HomeIndex />
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
