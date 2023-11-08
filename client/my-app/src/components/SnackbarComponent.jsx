import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { forwardRef } from "react";
export default function SnackbarComponent(props) {
  const SnackBarAlert = forwardRef(function SnackBarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  });

  return (
    <>
      <Snackbar open={props.open} autoHideDuration={4000} onClose={props.close}>
        <SnackBarAlert
          onClose={props.close}
          severity={props.severity || "info"}
          sx={{ width: "100%" }}
        >
          {props.message}
        </SnackBarAlert>
      </Snackbar>
    </>
  );
}
