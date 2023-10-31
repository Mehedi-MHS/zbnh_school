import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { FormControlLabel } from "@mui/material";
import { useState, useEffect } from "react";
export default function DeleteSchoolInfo() {
  const [schoolPosts, setSchoolPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  useEffect(() => {
    getSchoolPosts();
  }, []);

  const getSchoolPosts = async () => {
    const req = await fetch("http://localhost:3000/about", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    setSchoolPosts(res);
  };

  const columns = [
    { field: "serialNumber", headerName: "No", flex: 1 },
    { field: "title", headerName: "Title", flex: 2, minWidth: 150 },
    {
      field: "action",
      headerName: "Delete",
      flex: 1,
      minWidth: 100,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        // console.log(params);
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
                <IconButton
                  color="secondary"
                  aria-label="delete posts"
                  onClick={() => {
                    alert(params.row.id);
                  }}
                >
                  <DeleteIcon style={{ color: "red" }} />
                </IconButton>
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
      action: (
        <IconButton>
          <DeleteIcon color="warning" />
        </IconButton>
      ),
      ...row,
    }));
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          paddingTop: "2rem",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{
            margin: "2rem auto",
            color: "Red",
          }}
        >
          Delete School Information related posts
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
              rows={rowsWithSerialNumber(schoolPosts)}
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
