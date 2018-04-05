import React from "react";
import PropTypes from "prop-types";
import { StyledMainHeader, StyledLink, StyledHeaderLogo } from "./styles";

const MainHeader = props => (
  <StyledMainHeader myProps={props.myProps} primary={props.primary}>
    <StyledLink to="/">{props.obj}</StyledLink>
    <StyledLink to="/myServices">2</StyledLink>
    <StyledLink to="/addNew">3</StyledLink>
    <StyledHeaderLogo src="" />
  </StyledMainHeader>
);
MainHeader.propTypes = {
  myProps: PropTypes.bool,
};
export default MainHeader;
