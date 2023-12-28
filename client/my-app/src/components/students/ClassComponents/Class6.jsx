import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "../../../styles/TableStyle.css";
import { useState, useEffect } from "react";
export default function Class6() {
  const section = {
    A: "ক",
    B: "খ",
    C: "গ",
  };
  const demoData = [
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
  ];

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
          {demoData.map((data, index) => (
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
                      <td>{data.transferIn.boy || "Loading"}</td>
                      <td>{data.transferIn.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>ট্রান্সফার আউট</td>
                      <td>{data.transferOut.boy || "Loading"}</td>
                      <td>{data.transferOut.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>বার্ষিক পরীক্ষায় অংশগ্রহণ</td>
                      <td>{data.finalExamAttendence.boy || "Loading"}</td>
                      <td>{data.finalExamAttendence.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>বার্ষিক পরীক্ষায় প্রমোশন</td>
                      <td>{data.finalExamPromotion.boy || "Loading"}</td>
                      <td>{data.finalExamPromotion.girl || "Loading"}</td>
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
