import Link from "../custom/CustomLink";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function DashboardHome() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          padding: { xs: "2rem 0.5 rem", sm: "3rem 1rem" },
          background: "silver",
        }}
      >
        <Typography variant="h2" component="h1">
          Admin Panel
        </Typography>
        <Card
          sx={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at top right,cyan,white)",
          }}
        >
          <CardHeader
            title="Students"
            subheader="Manage students here"
            action={
              <IconButton>
                <EditIcon />
              </IconButton>
            }
          />
          <CardActions>
            <Button variant="outlined">Edit Students</Button>
          </CardActions>
        </Card>
      </Box>
      <Link to="/dashboard/editStudents">
        <Button>Edit Students</Button>
      </Link>
      <Link to="/dashboard/addTeacher">
        <Button>Add a Teacher</Button>
      </Link>
      <Link to="/dashboard/addSchoolInfo">
        <Button>Add School Info</Button>
      </Link>
    </>
  );
}
