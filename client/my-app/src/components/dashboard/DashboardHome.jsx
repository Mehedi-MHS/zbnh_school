import Link from "../custom/CustomLink";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
export default function DashboardHome() {
  const renderOptions = [
    {
      id: 1,
      title: "Students",
      subheader: "Manage students here",
      buttons: [{ title: "Edit Students", link: "/dashboard/editStudents" }],
    },
    {
      id: 2,
      title: "Teachers",
      subheader: "Manage teachers here",
      buttons: [
        { title: "Add Teacher", link: "/dashboard/addTeacher" },
        { title: "Delete Teacher", link: "/dashboard/deleteTeacher" },
      ],
    },
    {
      id: 3,
      title: "School Info",
      subheader: "Edit or Delete School related information",
      buttons: [
        { title: "Add School Info", link: "/dashboard/addSchoolInfo" },
        { title: "Delete School Info", link: "/dashboard/deleteSchoolInfo" },
      ],
    },
    {
      id: 4,
      title: "Notice Board",
      subheader: "Create new notice or delete existing one",
      buttons: [
        { title: "Create Notice", link: "/dashboard/addNotice" },
        { title: "Delete Notice", link: "/dashboard/deleteNotice" },
      ],
    },
    {
      id: 5,
      title: "Gallery",
      subheader: "Create post of an event",
      buttons: [
        { title: "Add Post", link: "/dashboard/addGalleryPost" },
        { title: "Delete Post", link: "/dashboard/deleteGalleryPost" },
      ],
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          padding: { xs: "2rem 1rem", sm: "3rem 1rem" },
          background: "silver",
        }}
      >
        <Typography variant="h2" component="h1">
          Admin Panel
        </Typography>
        <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={2}>
          {renderOptions.map((option, index) => (
            <Card
              key={index}
              sx={{
                backgroundImage:
                  "radial-gradient(circle farthest-corner at top right,skyBlue,white)",
                width: { sm: "30%" },
              }}
            >
              <CardHeader
                title={option.title}
                subheader={option.subheader}
                action={
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                }
              />
              <CardActions>
                {option.buttons.map((button, index) => (
                  <Link to={button.link} key={index}>
                    <Button variant="contained" color="info">
                      {button.title}
                    </Button>
                  </Link>
                ))}
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Box>

      <Link to="/dashboard/addSchoolInfo">
        <Button>Add School Info</Button>
      </Link>
    </>
  );
}
