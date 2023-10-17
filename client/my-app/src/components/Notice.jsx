import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Link from "./custom/CustomLink";
import IconButton from "@mui/material/IconButton";
import { FormControlLabel } from "@mui/material";

export default function Notice() {
  const MatEdit = ({ index }) => {
    const handleEditClick = () => {
      // some action
    };

    return (
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleEditClick}
          >
            <PictureAsPdfIcon style={{ color: "blue" }} />
          </IconButton>
        }
      />
    );
  };

  const columns = [
    { field: "serialNumber", headerName: "No", flex: 1 },
    { field: "title", headerName: "Title", flex: 2, minWidth: 150 },
    { field: "date", headerName: "Date", flex: 1, minWidth: 100 },
    {
      field: "url",
      headerName: "File",
      flex: 1,
      minWidth: 100,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MatEdit index={params.row.id} />
          </div>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      title: "Post No 1 Lorem Ipusm Dolor Sit amet codfhd jjfljodfd ",
      date: "21 Sep 2023",
      file: "pdf.pdf",
    },
    { id: 2, title: "Post No 2", date: "22 Sep 2023", file: "pdf.pdf" },
    { id: 4, title: "Post No 3", date: "23 Sep 2023", file: "pdf.pdf" },
    { id: 7, title: "Post No 4", date: "24 Sep 2023", file: "pdf.pdf" },
    { id: 8, title: "Post No 5", date: "25 Sep 2023", file: "pdf.pdf" },
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
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          paddingTop: "2rem",
          background: "gray",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{
            margin: "2rem auto",
            color: "white",
            textShadow: "0px 1px 2px black",
          }}
        >
          Notice Board
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
              rows={rowsWithSerialNumber(rows)}
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
