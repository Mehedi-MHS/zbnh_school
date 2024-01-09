import { Card, CardContent } from "@mui/material";
import Container from "@mui/material/Container";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import GroupsIcon from "@mui/icons-material/Groups";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InfoIcon from "@mui/icons-material/Info";
import { Stack } from "@mui/material";
import Link from "../custom/CustomLink";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
const navItems = [
  {
    name: "Notice",
    url: "notice",
    icon: <CircleNotificationsIcon />,
  },
  {
    name: "Teachers",
    url: "teachers",
    icon: <CoPresentIcon />,
  },
  {
    name: "Students",
    url: "students",
    icon: <GroupsIcon />,
  },
  {
    name: "Gallery",
    url: "gallery",
    icon: <InsertPhotoIcon />,
  },
  {
    name: "About School",
    url: "about",
    icon: <InfoIcon />,
  },
];

export default function NavigationBox() {
  return (
    <>
      <Container sx={{ maxWidth: "100%", mt: "2rem", mb: "2rem" }}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: "1rem" }}>
          Quick Navigation
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
          {navItems.map((item, index) => (
            <Link key={index} to={item.url}>
              <Card sx={{ width: "150px", height: "100px" }}>
                <CardContent>
                  <Stack>
                    <IconButton sx={{ color: "#1272cc" }}>
                      {item.icon}
                    </IconButton>
                    <Typography variant="p" textAlign="center">
                      {item.name}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Stack>
      </Container>
    </>
  );
}
