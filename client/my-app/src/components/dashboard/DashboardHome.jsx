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
import SettingsComponent from "./SettingsComponent";
import ChangePasswordComponent from "./ChangePasswordComponent";
import Logout from "./Logout";
export default function DashboardHome() {
  const renderOptions = [
    {
      id: 1,
      title: "Students",
      subheader: "Manage students here",
      buttons: [
        {
          title: "Edit Students",
          color: "info",
          link: "/dashboard/editStudents",
        },
      ],
    },
    {
      id: 2,
      title: "Teachers",
      subheader: "Manage teachers here",
      buttons: [
        { title: "Add Teacher", color: "info", link: "/dashboard/addTeacher" },
        {
          title: "Delete Teacher",
          color: "error",
          link: "/dashboard/deleteTeacher",
        },
      ],
    },
    {
      id: 3,
      title: "School Info",
      subheader: "Edit or Delete School related information",
      buttons: [
        { title: "Add Info", link: "/dashboard/addSchoolInfo" },
        {
          title: "Delete Info",
          color: "error",
          link: "/dashboard/deleteSchoolInfo",
        },
      ],
    },
    {
      id: 4,
      title: "Notice Board",
      subheader: "Create new notice or delete existing one",
      buttons: [
        { title: "Create Notice", link: "/dashboard/addNotice" },
        {
          title: "Delete Notice",
          color: "error",
          link: "/dashboard/deleteNotice",
        },
      ],
    },
    {
      id: 5,
      title: "Gallery",
      subheader: "Create post of an event",
      buttons: [
        { title: "Add Post", link: "/dashboard/addGalleryPost" },
        {
          title: "Delete Post",
          color: "error",
          link: "/dashboard/deleteGalleryPost",
        },
      ],
    },
    {
      id: 6,
      title: "Headmaster Message",
      subheader: "Edit Headmaster Message",
      buttons: [{ title: "Edit", link: "/dashboard/headmasterMessage" }],
    },
    {
      id: 7,
      title: "Assistant Headmaster Message",
      subheader: "Edit Assistant Headmaster Message",
      buttons: [
        { title: "Edit", link: "/dashboard/assistantHeadmasterMessage" },
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
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h3" component="h1" textAlign="center" mb="2rem">
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
                    <Button
                      variant="contained"
                      color={button.color || "primary"}
                    >
                      {button.title}
                    </Button>
                  </Link>
                ))}
              </CardActions>
            </Card>
          ))}
        </Stack>
        <SettingsComponent />
        <ChangePasswordComponent />
        <Logout />
      </Box>
    </>
  );
}
