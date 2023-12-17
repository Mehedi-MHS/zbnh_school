import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "../../../styles/TableStyle.css";
export default function EditClass9() {
  const demoScienceGroup = [
    {
      group: "science",
      groupTitle: "বিজ্ঞান",
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

  const demoCommerceGroup = [
    {
      group: "commerce",
      groupTitle: "ব্যবসায় শিক্ষা",
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

  const demoArtsGroup = [
    {
      group: "arts",
      groupTitle: "মানবিক",
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
        variant="h4"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "2rem",
        }}
        fontFamily="SolaimanLipi"
        gutterBottom
      >
        নবম শ্রেণীর শিক্ষার্থীদের তালিকা এন্ট্রি
      </Typography>
      <Container sx={{ marginBottom: "2rem" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            color: "green",
          }}
          fontFamily="SolaimanLipi"
          gutterBottom
        >
          বিজ্ঞান শাখা
        </Typography>
        <Stack
          gap={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          {demoScienceGroup.map((data, index) => (
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
                  {demoScienceGroup[0].groupTitle} শাখা:{" "}
                  {data.section || "Loading.."}
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
                      <td>{data.total.boy || "Loading"}</td>
                      <td>{data.total.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.muslim.title || "Loading"}</td>
                      <td>{data.muslim.boy || "Loading"}</td>
                      <td>{data.muslim.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.hindu.title || "Loading"}</td>
                      <td>{data.hindu.boy || "Loading"}</td>
                      <td>{data.hindu.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.stipend.title || "Loading"}</td>
                      <td>{data.stipend.boy || "Loading"}</td>
                      <td>{data.stipend.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.merit.title || "Loading"}</td>
                      <td>{data.merit.boy || "Loading"}</td>
                      <td>{data.merit.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.repeater.title || "Loading"}</td>
                      <td>{data.repeater.boy || "Loading"}</td>
                      <td>{data.repeater.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.transferIn.title || "Loading"}</td>
                      <td>{data.transferIn.boy || "Loading"}</td>
                      <td>{data.transferIn.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.transferOut.title || "Loading"}</td>
                      <td>{data.transferOut.boy || "Loading"}</td>
                      <td>{data.transferOut.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.finalExamAttendence.title || "Loading"}</td>
                      <td>{data.finalExamAttendence.boy || "Loading"}</td>
                      <td>{data.finalExamAttendence.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.finalExamPromotion.title || "Loading"}</td>
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
      <Container sx={{ marginBottom: "2rem" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            color: "green",
          }}
          fontFamily="SolaimanLipi"
          gutterBottom
        >
          ব্যবসায় শিক্ষা শাখা
        </Typography>
        <Stack
          gap={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          {demoCommerceGroup.map((data, index) => (
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
                  {demoCommerceGroup[0].groupTitle} শাখা:{" "}
                  {data.section || "Loading.."}
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
                      <td>{data.total.boy || "Loading"}</td>
                      <td>{data.total.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.muslim.title || "Loading"}</td>
                      <td>{data.muslim.boy || "Loading"}</td>
                      <td>{data.muslim.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.hindu.title || "Loading"}</td>
                      <td>{data.hindu.boy || "Loading"}</td>
                      <td>{data.hindu.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.stipend.title || "Loading"}</td>
                      <td>{data.stipend.boy || "Loading"}</td>
                      <td>{data.stipend.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.merit.title || "Loading"}</td>
                      <td>{data.merit.boy || "Loading"}</td>
                      <td>{data.merit.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.repeater.title || "Loading"}</td>
                      <td>{data.repeater.boy || "Loading"}</td>
                      <td>{data.repeater.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.transferIn.title || "Loading"}</td>
                      <td>{data.transferIn.boy || "Loading"}</td>
                      <td>{data.transferIn.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.transferOut.title || "Loading"}</td>
                      <td>{data.transferOut.boy || "Loading"}</td>
                      <td>{data.transferOut.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.finalExamAttendence.title || "Loading"}</td>
                      <td>{data.finalExamAttendence.boy || "Loading"}</td>
                      <td>{data.finalExamAttendence.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.finalExamPromotion.title || "Loading"}</td>
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
      <Container sx={{ marginBottom: "2rem" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            color: "green",
          }}
          fontFamily="SolaimanLipi"
          gutterBottom
        >
          মানবিক শাখা
        </Typography>
        <Stack
          gap={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          {demoArtsGroup.map((data, index) => (
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
                  {demoArtsGroup[0].groupTitle} শাখা:{" "}
                  {data.section || "Loading.."}
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
                      <td>{data.total.boy || "Loading"}</td>
                      <td>{data.total.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.muslim.title || "Loading"}</td>
                      <td>{data.muslim.boy || "Loading"}</td>
                      <td>{data.muslim.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.hindu.title || "Loading"}</td>
                      <td>{data.hindu.boy || "Loading"}</td>
                      <td>{data.hindu.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.stipend.title || "Loading"}</td>
                      <td>{data.stipend.boy || "Loading"}</td>
                      <td>{data.stipend.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.merit.title || "Loading"}</td>
                      <td>{data.merit.boy || "Loading"}</td>
                      <td>{data.merit.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.repeater.title || "Loading"}</td>
                      <td>{data.repeater.boy || "Loading"}</td>
                      <td>{data.repeater.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.transferIn.title || "Loading"}</td>
                      <td>{data.transferIn.boy || "Loading"}</td>
                      <td>{data.transferIn.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.transferOut.title || "Loading"}</td>
                      <td>{data.transferOut.boy || "Loading"}</td>
                      <td>{data.transferOut.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.finalExamAttendence.title || "Loading"}</td>
                      <td>{data.finalExamAttendence.boy || "Loading"}</td>
                      <td>{data.finalExamAttendence.girl || "Loading"}</td>
                    </tr>
                    <tr>
                      <td>{data.finalExamPromotion.title || "Loading"}</td>
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
