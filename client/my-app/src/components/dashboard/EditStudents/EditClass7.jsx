import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { CircularProgress } from "@mui/material";
import SnackbarComponent from "../../SnackbarComponent";
import "../../../styles/TableStyle.css";
export default function EditClass7() {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [studentData, setStudentData] = useState([
    {
      section: "ক",
      total: {
        title: "মোট",
        boy: 10,
        girl: 5,
      },
      muslim: {
        title: "মুসলিম",
        boy: 7,
        girl: 3,
      },
      hindu: {
        title: "হিন্দু",
        boy: 2,
        girl: 3,
      },
      stipend: {
        title: "উপবৃত্তিপ্রাপ্ত",
        boy: 2,
        girl: 1,
      },
      merit: {
        title: "মেধাবৃত্তিপ্রাপ্ত",
        boy: 4,
        girl: 2,
      },
      repeater: {
        title: "রিপিটার শিক্ষার্থী",
        boy: 2,
        girl: 2,
      },
      transferIn: {
        title: "ট্রান্সফার ইন",
        boy: 2,
        girl: 2,
      },
      transferOut: {
        title: "ট্রান্সফার আউট",
        boy: 2,
        girl: 2,
      },
      finalExamAttendence: {
        title: "বার্ষিক পরীক্ষায় অংশগ্রহণ",
        boy: 2,
        girl: 2,
      },
      finalExamPromotion: {
        title: "বার্ষিক পরীক্ষায় প্রমোশন",
        boy: 2,
        girl: 2,
      },
    },
    {
      section: "খ",
      total: {
        title: "মোট",
        boy: 10,
        girl: 5,
      },
      muslim: {
        title: "মুসলিম",
        boy: 7,
        girl: 3,
      },
      hindu: {
        title: "হিন্দু",
        boy: 2,
        girl: 3,
      },
      stipend: {
        title: "উপবৃত্তিপ্রাপ্ত",
        boy: 2,
        girl: 1,
      },
      merit: {
        title: "মেধাবৃত্তিপ্রাপ্ত",
        boy: 4,
        girl: 2,
      },
      repeater: {
        title: "রিপিটার শিক্ষার্থী",
        boy: 2,
        girl: 2,
      },
      transferIn: {
        title: "ট্রান্সফার ইন",
        boy: 2,
        girl: 2,
      },
      transferOut: {
        title: "ট্রান্সফার আউট",
        boy: 2,
        girl: 2,
      },
      finalExamAttendence: {
        title: "বার্ষিক পরীক্ষায় অংশগ্রহণ",
        boy: 2,
        girl: 2,
      },
      finalExamPromotion: {
        title: "বার্ষিক পরীক্ষায় প্রমোশন",
        boy: 2,
        girl: 2,
      },
    },
    {
      section: "গ",
      total: {
        title: "মোট",
        boy: 10,
        girl: 5,
      },
      muslim: {
        title: "মুসলিম",
        boy: 7,
        girl: 3,
      },
      hindu: {
        title: "হিন্দু",
        boy: 2,
        girl: 3,
      },
      stipend: {
        title: "উপবৃত্তিপ্রাপ্ত",
        boy: 2,
        girl: 1,
      },
      merit: {
        title: "মেধাবৃত্তিপ্রাপ্ত",
        boy: 4,
        girl: 2,
      },
      repeater: {
        title: "রিপিটার শিক্ষার্থী",
        boy: 2,
        girl: 2,
      },
      transferIn: {
        title: "ট্রান্সফার ইন",
        boy: 2,
        girl: 2,
      },
      transferOut: {
        title: "ট্রান্সফার আউট",
        boy: 2,
        girl: 2,
      },
      finalExamAttendence: {
        title: "বার্ষিক পরীক্ষায় অংশগ্রহণ",
        boy: 2,
        girl: 2,
      },
      finalExamPromotion: {
        title: "বার্ষিক পরীক্ষায় প্রমোশন",
        boy: 2,
        girl: 2,
      },
    },
  ]);

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const req = await fetch("http://localhost:3000/editStudents/class7", {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(studentData),
      });
      const res = await req.json();
      if (res) {
        setLoading(false);
        setSnackbarMessage(res.message);
        setSnackbarOpen(true);
        setSeverity(res.severity);
      } else {
        alert("Something went wrong! please try again.");
      }
    } catch (error) {
      if (error) {
        alert(error);
      }
    }
  };

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "2rem",
        }}
        fontFamily="SolaimanLipi"
        gutterBottom
      >
        সপ্তম শ্রেণীর শিক্ষার্থীদের তালিকা এন্ট্রি
      </Typography>
      <Container sx={{ marginBottom: "2rem" }}>
        <Stack
          gap={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          {studentData.map((data, index) => (
            <Box
              sx={{
                width: { xs: "100%", sm: "30%" },
                borderRadius: "7px 7px 0 0",
              }}
              key={index}
            >
              <Box
                sx={{
                  background: "darkGreen",
                  width: "100%",
                  padding: "5px",
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                  borderRadius: "7px 7px 0 0",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  fontFamily="SolaimanLipi"
                >
                  {" "}
                  শাখা: {data.section || "Loading.."}
                </Typography>
              </Box>
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
                      <td>{data.total.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="total"
                          gender="boy"
                          value={data.total.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="total"
                          gender="girl"
                          value={data.total.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.muslim.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="muslim"
                          gender="boy"
                          value={data.muslim.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="muslim"
                          gender="girl"
                          value={data.muslim.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.hindu.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="hindu"
                          gender="boy"
                          value={data.hindu.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="hindu"
                          gender="girl"
                          value={data.hindu.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.stipend.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="stipend"
                          gender="boy"
                          value={data.stipend.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="stipend"
                          gender="girl"
                          value={data.stipend.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.merit.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="merit"
                          gender="boy"
                          value={data.merit.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="merit"
                          gender="girl"
                          value={data.merit.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.repeater.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="repeater"
                          gender="boy"
                          value={data.repeater.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="repeater"
                          gender="girl"
                          value={data.repeater.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.transferIn.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="transferIn"
                          gender="boy"
                          value={data.transferIn.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="transferIn"
                          gender="girl"
                          value={data.transferIn.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.transferOut.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="transferOut"
                          gender="boy"
                          value={data.transferOut.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="transferOut"
                          gender="girl"
                          value={data.transferOut.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.finalExamAttendence.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="finalExamAttendence"
                          gender="boy"
                          value={data.finalExamAttendence.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="finalExamAttendence"
                          gender="girl"
                          value={data.finalExamAttendence.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>{data.finalExamPromotion.title || "Loading"}</td>
                      <td>
                        <InputComponent
                          propName="finalExamPromotion"
                          gender="boy"
                          value={data.finalExamPromotion.boy}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                      <td>
                        <InputComponent
                          propName="finalExamPromotion"
                          gender="girl"
                          value={data.finalExamPromotion.girl}
                          index={index}
                          setStudentData={setStudentData}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
      <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
        <Button
          variant="contained"
          sx={{ margin: "1rem auto" }}
          onClick={handleSubmit}
        >
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size="1rem" />
          ) : (
            "Save changes"
          )}
        </Button>
        <SnackbarComponent
          message={snackbarMessage}
          open={snackbarOpen}
          close={handleClose}
          severity={severity}
        />
      </Box>
    </>
  );
}

//Custom input component
function InputComponent({ propName, value, index, setStudentData, gender }) {
  const handleChange = (e) => {
    const newValue = e.target.value;

    setStudentData((prev) =>
      prev.map((data, i) =>
        i === index
          ? {
              ...data,
              [propName]: {
                ...data[propName],
                [gender]: newValue,
              },
            }
          : data
      )
    );
  };

  return (
    <input
      type="text"
      style={{
        width: "100%",
        height: "100%",
        padding: "1px",
        textAlign: "center",
        border: "none",
      }}
      value={value}
      onChange={handleChange}
    />
  );
}