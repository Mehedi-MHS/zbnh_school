import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
export default function EditStudents() {
  const [student, setStudent] = useState({
    class: null,
    total: null,
  });
  const classOptions = [
    {
      label: "Six",
      value: 6,
    },
    {
      label: "Seven",
      value: 7,
    },
    {
      label: "Eight",
      value: 8,
    },
    {
      label: "Nine",
      value: 9,
    },
    {
      label: "Ten",
      value: 10,
    },
  ];

  return (
    <>
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          padding: "7% 2%",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <Card
          sx={{ minWidth: 275, maxWidth: { sm: "30vw" }, margin: "0px auto" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="h1"
              color="text.secondary"
              gutterBottom
            >
              <EditIcon
                sx={{
                  color: "black",
                  fontSize: "inherit",
                  marginRight: "1rem",
                }}
              />
              Edit Students
            </Typography>
            <Stack spacing={3}>
              <Autocomplete
                disablePortal
                onChange={(e, newValue) =>
                  setStudent((prev) => ({ ...prev, class: newValue?.value }))
                }
                id="edit-studensts-box"
                options={classOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Select Class" />
                )}
              />
              <TextField
                variant="filled"
                label="Total Students.."
                onChange={(e) =>
                  setStudent((prev) => ({ ...prev, total: e.target.value }))
                }
                type="number"
                required
                helperText={student ? student.class : "No Class Selected"}
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Button variant="contained">Save Changes</Button>
          </CardActions>
        </Card>
        <Typography variant="h3">{`Class:${
          student.class || "null"
        } - Students: ${student.total}`}</Typography>
      </Container>
    </>
  );
}
