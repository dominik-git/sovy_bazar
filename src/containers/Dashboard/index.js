import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Charts from "../Charts";
import About from "../About";
import Header from "../../components/Header";
import { StyledWrapper } from "./styles";

class DashboardPage extends React.Component {
 
  render() {
    return (
      <StyledWrapper>
        <Header />
        <Switch>
          <Route exact path="/dashboard/charts" component={Charts} />
          <Route path="/dashboard/about" component={About} />
        </Switch>
      </StyledWrapper>
    );
  }
}

export default withRouter(DashboardPage);
