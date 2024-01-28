import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Link from "./custom/CustomLink";
import IconButton from "@mui/material/IconButton";
import SEO from "./custom/SEO";
import { FormControlLabel } from "@mui/material";
import { useState, useEffect } from "react";
import settings from "../helpers/Settings";
export default function Notice() {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    getNotices();
  }, []);

  const getNotices = async () => {
    const req = await fetch(settings.backendURL + "/notice", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    setNotice(res);
  };

  const columns = [
    { field: "serialNumber", headerName: "No", flex: 1 },
    { field: "title", headerName: "Title", flex: 2, minWidth: 150 },
    { field: "date", headerName: "Date", flex: 1, minWidth: 100 },
    {
      field: "fileURL",
      headerName: "File",
      flex: 1,
      minWidth: 100,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        console.log(params);
        return (
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Link to={params.row.fileURL}>
                  <IconButton color="secondary" aria-label="add an alarm">
                    <PictureAsPdfIcon style={{ color: "red" }} />
                  </IconButton>
                </Link>
              }
            />
          </Box>
        );
      },
    },
  ];
  /*
My Custom logic to show data serial number automatically. 
If you delete a row in database, id number sequence will be changed. so to show 
continuous number , use this custom logic in frontend.
*/
  const rowsWithSerialNumber = (data) => {
    return data.map((row, index) => ({
      serialNumber: index + 1,
      url: (
        <IconButton>
          <PictureAsPdfIcon color="primary" />
        </IconButton>
      ),
      ...row,
    }));
  };

  return (
    <>
      <SEO
        title="Notice Board"
        description="See all the Recent Notice of ZamiderHat Begum Nurunnahar High School"
        name="ZamiderHat Begum Nurunnahar High School"
        type="Article"
      />
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          paddingTop: "2rem",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{
            margin: "2rem auto",
          }}
        >
          Recent News/Notice
        </Typography>

        <Container
          sx={{
            background: "#fff",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={rowsWithSerialNumber(notice)}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10, 20]}
              autoHeight
            />
          </div>
        </Container>
      </Box>
    </>
  );
}
