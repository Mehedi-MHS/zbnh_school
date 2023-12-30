import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "../../../styles/TableStyle.css";
import { useState, useEffect } from "react";
export default function Class6() {
  const [serverData, setServerData] = useState([
    {
      section: "A",
      total: {
        boy: 10,
        girl: 5,
      },
      muslim: {
        boy: 7,
        girl: 3,
      },
      hindu: {
        boy: 2,
        girl: 3,
      },
      stipend: {
        boy: 2,
        girl: 1,
      },
      merit_stipend: {
        boy: 4,
        girl: 2,
      },
      repeater: {
        boy: 2,
        girl: 2,
      },
      transfer_in: {
        boy: 2,
        girl: 2,
      },
      transfer_out: {
        boy: 2,
        girl: 2,
      },
      final_attendence: {
        boy: 2,
        girl: 2,
      },
      final_promotion: {
        boy: 2,
        girl: 2,
      },
    },
    {
      section: "B",
      total: {
        boy: 10,
        girl: 5,
      },
      muslim: {
        boy: 7,
        girl: 3,
      },
      hindu: {
        boy: 2,
        girl: 3,
      },
      stipend: {
        boy: 2,
        girl: 1,
      },
      merit_stipend: {
        boy: 4,
        girl: 2,
      },
      repeater: {
        boy: 2,
        girl: 2,
      },
      transfer_in: {
        boy: 2,
        girl: 2,
      },
      transfer_out: {
        boy: 2,
        girl: 2,
      },
      final_attendence: {
        boy: 2,
        girl: 2,
      },
      final_promotion: {
        boy: 2,
        girl: 2,
      },
    },
    {
      section: "C",
      total: {
        boy: 10,
        girl: 5,
      },
      muslim: {
        boy: 7,
        girl: 3,
      },
      hindu: {
        boy: 2,
        girl: 3,
      },
      stipend: {
        boy: 2,
        girl: 1,
      },
      merit_stipend: {
        boy: 4,
        girl: 2,
      },
      repeater: {
        boy: 2,
        girl: 2,
      },
      transfer_in: {
        boy: 2,
        girl: 2,
      },
      transfer_out: {
        boy: 2,
        girl: 2,
      },
      final_attendence: {
        boy: 2,
        girl: 2,
      },
      final_promotion: {
        boy: 2,
        girl: 2,
      },
    },
  ]);
  useEffect(() => {
    getClassData();
  }, []);

  const getClassData = async () => {
    await fetch("http://localhost:3000/students/class/6", {
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
        ষষ্ঠ শ্রেণীর শিক্ষার্থীদের তালিকা
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
                      <td>{data.total.boy || "Loading"}</td>
                      <td>{data.total.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>মুসলিম</td>
                      <td>{data.muslim.boy || "Loading"}</td>
                      <td>{data.muslim.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>হিন্দু</td>
                      <td>{data.hindu.boy || "Loading"}</td>
                      <td>{data.hindu.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>উপবৃত্তিপ্রাপ্ত</td>
                      <td>{data.stipend.boy || "Loading"}</td>
                      <td>{data.stipend.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>মেধাবৃত্তিপ্রাপ্ত</td>
                      <td>{data.merit.boy || "Loading"}</td>
                      <td>{data.merit.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>রিপিটার শিক্ষার্থী</td>
                      <td>{data.repeater.boy || "Loading"}</td>
                      <td>{data.repeater.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>ট্রান্সফার ইন</td>
                      <td>{data.transfer_in.boy || "Loading"}</td>
                      <td>{data.transfer_in.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>ট্রান্সফার আউট</td>
                      <td>{data.transfer_out.boy || "Loading"}</td>
                      <td>{data.transfer_out.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>বার্ষিক পরীক্ষায় অংশগ্রহণ</td>
                      <td>{data.final_attendence.boy || "Loading"}</td>
                      <td>{data.final_attendence.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>বার্ষিক পরীক্ষায় প্রমোশন</td>
                      <td>{data.final_promotion.boy || "Loading"}</td>
                      <td>{data.final_promotion.girl || "Loading"}</td>
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
