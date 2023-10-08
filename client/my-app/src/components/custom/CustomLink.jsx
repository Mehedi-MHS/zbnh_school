import React from "react";
import { Link as MUILink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Link(props) {
  return (
    <MUILink {...props} component={ReactRouterLink} to={props.to || "#"} />
  );
}
