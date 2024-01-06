import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../SnackbarComponent";
import "../../styles/TableStyle.css";
export default function EditStudents() {
  const [classInfo, setClassInfo] = useState({
    title: "",
    class: null,
    section: null,
    group: null,
  });
  const [serverData, setServerData] = useState({
    total: {
      boys: 0,
      girls: 0,
    },
    muslim: {
      boys: 0,
      girls: 0,
    },
    hindu: {
      boys: 0,
      girls: 0,
    },
    stipend: {
      boys: 0,
      girls: 0,
    },
    merit_stipend: {
      boys: 0,
      girls: 0,
    },
    repeater: {
      boys: 0,
      girls: 0,
    },
    transfer_in: {
      boys: 0,
      girls: 0,
    },
    transfer_out: {
      boys: 0,
      girls: 0,
    },
    final_attendence: {
      boys: 0,
      girls: 0,
    },
    final_promotion: {
      boys: 0,
      girls: 0,
    },
  });

  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const classOptions = [
    {
      label: " ৬ষ্ঠ ক  ",
      value: { class: 6, section: "A", group: "" },
    },
    {
      label: " ৬ষ্ঠ খ  ",
      value: { class: 6, section: "B", group: "" },
    },
    {
      label: "  ৬ষ্ঠ গ   ",
      value: { class: 6, section: "C", group: "" },
    },
    {
      label: " ৭ম ক  ",
      value: { class: 7, section: "A", group: "" },
    },
    {
      label: " ৭ম খ   ",
      value: { class: 7, section: "B", group: "" },
    },
    {
      label: " ৭ম গ   ",
      value: { class: 7, section: "C", group: "" },
    },
    {
      label: "  ৮ম ক   ",
      value: { class: 8, section: "A", group: "" },
    },
    {
      label: "  ৮ম খ  ",
      value: { class: 8, section: "B", group: "" },
    },
    {
      label: " ৮ম গ   ",
      value: { class: 8, section: "C", group: "" },
    },
    {
      label: "  ৯ম বিজ্ঞান ক   ",
      value: { class: 9, section: "A", group: "science" },
    },
    {
      label: "  ৯ম বিজ্ঞান খ   ",
      value: { class: 9, section: "B", group: "science" },
    },
    {
      label: "   ৯ম বিজ্ঞান গ   ",
      value: { class: 9, section: "C", group: "science" },
    },
    {
      label: "   ৯ম ব্যবসায় ক   ",
      value: { class: 9, section: "A", group: "commerce" },
    },
    {
      label: "  ৯ম ব্যবসায় খ    ",
      value: { class: 9, section: "B", group: "commerce" },
    },
    {
      label: "   ৯ম ব্যবসায় গ   ",
      value: { class: 9, section: "C", group: "commerce" },
    },
    {
      label: "  ৯ম মানবিক ক   ",
      value: { class: 9, section: "A", group: "arts" },
    },
    {
      label: "  ৯ম মানবিক খ   ",
      value: { class: 9, section: "B", group: "arts" },
    },
    {
      label: "  ৯ম মানবিক গ   ",
      value: { class: 9, section: "C", group: "arts" },
    },
    {
      label: "  ১০ম বিজ্ঞান ক   ",
      value: { class: 10, section: "A", group: "science" },
    },
    {
      label: "  ১০ম বিজ্ঞান খ   ",
      value: { class: 10, section: "B", group: "science" },
    },
    {
      label: "  ১০ম বিজ্ঞান গ   ",
      value: { class: 10, section: "C", group: "science" },
    },
    {
      label: "  ১০ম ব্যবসায় ক   ",
      value: { class: 10, section: "A", group: "commerce" },
    },
    {
      label: "  ১০ম ব্যবসায় খ    ",
      value: { class: 10, section: "B", group: "commerce" },
    },
    {
      label: "  ১০ম ব্যবসায় গ   ",
      value: { class: 10, section: "C", group: "commerce" },
    },
    {
      label: "  ১০ম মানবিক ক   ",
      value: { class: 10, section: "A", group: "arts" },
    },
    {
      label: "  ১০ম মানবিক খ   ",
      value: { class: 10, section: "B", group: "arts" },
    },
    {
      label: "  ১০ম মানবিক গ   ",
      value: { class: 10, section: "C", group: "arts" },
    },
  ];
  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    const req = await fetch("http://localhost:3000/dashboard/editStudents", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: "hello",
    });
    const res = await req.json();
    if (res) {
      setLoading(false);
      setSnackbarMessage(res.message);
      setSnackbarOpen(true);
      setSeverity(res.severity);
    }
  };

  const handleClassChange = async (e) => {
    setClassInfo({
      title: e.target.value.label,
      class: e.target.value.class,
      section: e.target.value.section,
      group: e.target.value.group,
    });

    const req = await fetch("http://localhost:3000/students/info", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        cls: e.target.value.class,
        section: e.target.value.section,
        group: e.target.value.group,
      }),
    });
    const res = await req.json();
    if (res.message) {
      setSeverity(res.severity);
      setSnackbarMessage(res.message);
    } else if (res.length > 0) {
      setServerData(arrangeData(res));
    } else {
      alert("Something Went Wrong!");
    }
  };

  //arrangeData Function
  const arrangeData = (data) => {
    const obj = {};
    data.map((rows) => {
      obj[rows.category] = {};
      obj[rows.category].boys = rows.boys;
      obj[rows.category].girls = rows.girls;
    });
    return obj;
  };

  return (
    <>
      <Container
        sx={{
          width: "100vw",
          minHeight: "100vh",
          padding: "7% 2%",
          background: "rgba(0,0,0,0.1)",
          pb: "2rem",
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
            <TextField
              value={classInfo.class}
              onChange={handleClassChange}
              select
              fullWidth
              label="Select Class & Section"
            >
              {classOptions.map((cls, index) => (
                <MenuItem key={index} value={cls.value} label={cls.label}>
                  {cls.label}
                </MenuItem>
              ))}
            </TextField>
            <Typography>{JSON.stringify(classInfo)}</Typography>
            <Box
              sx={{
                width: "100%",
                borderRadius: "7px 7px 0 0",
                marginTop: "1rem",
              }}
            >
              <Box>
                <table>
                  <thead>
                    <tr>
                      <td>বিবরণ</td>
                      <td>ছাত্র</td>
                      <td>ছাত্রী</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td> মোট</td>
                      <td><input type="text" value={serverData.total.boys || "Loading"} onChange={(e)=>{setServerData((prev)=>({...prev,total:{boys:e.target.value})})}}/></td>
                      <td>{serverData.total.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>মুসলিম</td>
                      <td>{serverData.muslim.boys || "Loading"}</td>
                      <td>{serverData.muslim.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>হিন্দু</td>
                      <td>{serverData.hindu.boys || "Loading"}</td>
                      <td>{serverData.hindu.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>উপবৃত্তিপ্রাপ্ত</td>
                      <td>{serverData.stipend.boys || "Loading"}</td>
                      <td>{serverData.stipend.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>মেধাবৃত্তিপ্রাপ্ত</td>
                      <td>{serverData.merit_stipend.boys || "Loading"}</td>
                      <td>{serverData.merit_stipend.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>রিপিটার শিক্ষার্থী</td>
                      <td>{serverData.repeater.boys || "Loading"}</td>
                      <td>{serverData.repeater.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>ট্রান্সফার ইন</td>
                      <td>{serverData.transfer_in.boys || "Loading"}</td>
                      <td>{serverData.transfer_in.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>ট্রান্সফার আউট</td>
                      <td>{serverData.transfer_out.boys || "Loading"}</td>
                      <td>{serverData.transfer_out.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>বার্ষিক পরীক্ষায় অংশগ্রহণ</td>
                      <td>{serverData.final_attendence.boys || "Loading"}</td>
                      <td>{serverData.final_attendence.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>বার্ষিক পরীক্ষায় প্রমোশন</td>
                      <td>{serverData.final_promotion.boys || "Loading"}</td>
                      <td>{serverData.final_promotion.girls || "Loading"}</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              disabled={classInfo.class && classInfo.section ? false : true}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress sx={{ color: "white" }} size="1rem" />
              ) : (
                "Save changes"
              )}
            </Button>
          </CardActions>
        </Card>
        <SnackbarComponent
          message={snackbarMessage}
          open={snackbarOpen}
          close={handleClose}
          severity={severity}
        />
      </Container>
    </>
  );
}
