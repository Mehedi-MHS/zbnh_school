import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "../../../styles/TableStyle.css";
import { useState, useEffect } from "react";
import settings from "../../../helpers/Settings";
export default function Class7() {
  const [serverData, setServerData] = useState([
    {
      section: "A",
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
    },
    {
      section: "B",
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
    },
    {
      section: "C",
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
    },
  ]);
  useEffect(() => {
    getClassData();
  }, []);

  const getClassData = async () => {
    await fetch(settings.backendURL + "/students/class/7", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setServerData(data);
      });
  };

  let sectionName = {
    A: "ক",
    B: "খ",
    C: "গ",
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
        সপ্তম শ্রেণীর শিক্ষার্থীদের তালিকা
      </Typography>
      <Container sx={{ marginBottom: "2rem" }}>
        <Stack
          gap={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          {serverData.map((data, index) => (
            <Box
              sx={{
                width: { xs: "100%", sm: "30%" },
                borderRadius: "7px 7px 0 0",
              }}
              key={index}
            >
              <Box
                sx={{
                  background: "darkBlue",
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
                  শাখা: {sectionName[data.section] || "Loading.."}
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
                      <td> মোট</td>
                      <td>{data.total.boys || "Loading"}</td>
                      <td>{data.total.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>মুসলিম</td>
                      <td>{data.muslim.boys || "Loading"}</td>
                      <td>{data.muslim.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>হিন্দু</td>
                      <td>{data.hindu.boys || "Loading"}</td>
                      <td>{data.hindu.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>উপবৃত্তিপ্রাপ্ত</td>
                      <td>{data.stipend.boys || "Loading"}</td>
                      <td>{data.stipend.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>মেধাবৃত্তিপ্রাপ্ত</td>
                      <td>{data.merit_stipend.boys || "Loading"}</td>
                      <td>{data.merit_stipend.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>রিপিটার শিক্ষার্থী</td>
                      <td>{data.repeater.boys || "Loading"}</td>
                      <td>{data.repeater.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>ট্রান্সফার ইন</td>
                      <td>{data.transfer_in.boys || "Loading"}</td>
                      <td>{data.transfer_in.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>ট্রান্সফার আউট</td>
                      <td>{data.transfer_out.boys || "Loading"}</td>
                      <td>{data.transfer_out.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>বার্ষিক পরীক্ষায় অংশগ্রহণ</td>
                      <td>{data.final_attendence.boys || "Loading"}</td>
                      <td>{data.final_attendence.girls || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>বার্ষিক পরীক্ষায় প্রমোশন</td>
                      <td>{data.final_promotion.boys || "Loading"}</td>
                      <td>{data.final_promotion.girls || "Loading"}</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
}
