import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";
import { useState, useRef } from "react";

import settings from "../../helpers/Settings";

export default function ReportGeneratorComponent() {
  const [loading, setLoading] = useState(false);
  const [studentsData, setStudentsData] = useState([]);
  const tableRef = useRef(null);
  const bn_text = {
    cls: "†kÖYx",
    dept: "wefvM",
    section: "kvLv",
    boys: "QvÎ",
    girls: "QvÎx",
    six: "6ô",
    seven: "7g",
    eight: "8g",
    nine: "9g",
    ten: "10g",
    6: "6ô",
    7: "7g",
    8: "8g",
    9: "9g",
    10: "10g",
    A: "K",
    B: "L",
    C: "M",
    science: "weÁvb",
    commerce: "e¨emvq wkÿv",
    arts: "gvbweK",
    total: "†gvU",
    muslim: "gymwjg",
    hindu: "wn›`y",
    stipend: "Dce„wË cÖvß",
    merit_stipend: "†gave„wË cÖvß",
    repeater: "wiwcUvi wkÿv_©x",
    transfer_in: "UªvÝdvi Bb",
    transfer_out: "UªvÝdvi AvDU",
    final_attendence: "evwl©K cixÿvq AskMÖnY",
    final_promotion: "evwl©K cixÿvq cÖ‡gvkb",
  };

  const GenerateCells = (data, key) => {
    return (
      <React.Fragment key={key}>
        <tr>
          <td rowSpan="3">{bn_text[data.class]}</td>
          <td rowSpan="3">{bn_text[data.group]}</td>
          <td>{bn_text.A}</td>
          <td>{data.A.total.boys}</td>
          <td>{data.A.total.girls}</td>
          <td>{data.A.muslim.boys}</td>
          <td>{data.A.muslim.girls}</td>
          <td>{data.A.hindu.boys}</td>
          <td>{data.A.hindu.girls}</td>
          <td>{data.A.stipend.boys}</td>
          <td>{data.A.stipend.girls}</td>
          <td>{data.A.merit_stipend.boys}</td>
          <td>{data.A.merit_stipend.girls}</td>
          <td>{data.A.repeater.boys}</td>
          <td>{data.A.repeater.girls}</td>
          <td>{data.A.transfer_in.boys}</td>
          <td>{data.A.transfer_in.girls}</td>
          <td>{data.A.transfer_out.boys}</td>
          <td>{data.A.transfer_out.girls}</td>
          <td>{data.A.final_attendence.boys}</td>
          <td>{data.A.final_attendence.girls}</td>
          <td>{data.A.final_promotion.boys}</td>
          <td>{data.A.final_promotion.girls}</td>
        </tr>
        <tr>
          <td>{bn_text.B}</td>
          <td>{data.B.total.boys}</td>
          <td>{data.B.total.girls}</td>
          <td>{data.B.muslim.boys}</td>
          <td>{data.B.muslim.girls}</td>
          <td>{data.B.hindu.boys}</td>
          <td>{data.B.hindu.girls}</td>
          <td>{data.B.stipend.boys}</td>
          <td>{data.B.stipend.girls}</td>
          <td>{data.B.merit_stipend.boys}</td>
          <td>{data.B.merit_stipend.girls}</td>
          <td>{data.B.repeater.boys}</td>
          <td>{data.B.repeater.girls}</td>
          <td>{data.B.transfer_in.boys}</td>
          <td>{data.B.transfer_in.girls}</td>
          <td>{data.B.transfer_out.boys}</td>
          <td>{data.B.transfer_out.girls}</td>
          <td>{data.B.final_attendence.boys}</td>
          <td>{data.B.final_attendence.girls}</td>
          <td>{data.B.final_promotion.boys}</td>
          <td>{data.B.final_promotion.girls}</td>
        </tr>
        <tr>
          <td>{bn_text.C}</td>
          <td>{data.C.total.boys}</td>
          <td>{data.C.total.girls}</td>
          <td>{data.C.muslim.boys}</td>
          <td>{data.C.muslim.girls}</td>
          <td>{data.C.hindu.boys}</td>
          <td>{data.C.hindu.girls}</td>
          <td>{data.C.stipend.boys}</td>
          <td>{data.C.stipend.girls}</td>
          <td>{data.C.merit_stipend.boys}</td>
          <td>{data.C.merit_stipend.girls}</td>
          <td>{data.C.repeater.boys}</td>
          <td>{data.C.repeater.girls}</td>
          <td>{data.C.transfer_in.boys}</td>
          <td>{data.C.transfer_in.girls}</td>
          <td>{data.C.transfer_out.boys}</td>
          <td>{data.C.transfer_out.girls}</td>
          <td>{data.C.final_attendence.boys}</td>
          <td>{data.C.final_attendence.girls}</td>
          <td>{data.C.final_promotion.boys}</td>
          <td>{data.C.final_promotion.girls}</td>
        </tr>
      </React.Fragment>
    );
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      const req = await fetch(settings.backendURL + "/students/studentsData", {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
      });
      const res = await req.json();
      if (res.message) {
        alert(res.message);
      }
      if (res.length > 0) {
        setStudentsData(res);

        const doc = new jsPDF({ orientation: "landscape" });
        const img = new Image();
        img.src = "/images/logo.png";
        doc.addImage(img, "png", 86, 7, 10, 10);
        doc.addFont("/fonts/SUTOM___.TTF", "SUTOM___", "normal");
        doc.setFont("SUTOM___");
        doc.setFontSize(25);
        doc.text("Rwg`vinvU †eMg byiæbœvnvi D”P we`¨vjq", 100, 15);
        doc.setFontSize(18);
        doc.text(
          "wkÿv_©x‡`i ZvwjKv " + new Date().getFullYear() + " Bs",
          115,
          25
        );
        doc.setFontSize(12);
        const tableId = tableRef.current;
        autoTable(doc, {
          html: tableId,
          startY: 30,
          theme: "grid",
          styles: {
            halign: "center",
            font: "SUTOM___",
            fontSize: 12,
          },
        });
        doc.save("StudentsReport-JamiderHat Begum Nurunnahar High School.pdf");
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          padding: "0.5rem",
          background: "#fff",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Students report Generator
        </Typography>
        <table ref={tableRef} style={{ display: "none" }}>
          <tbody>
            <tr>
              <th colSpan="3"></th>
              <th colSpan="2">{bn_text.total}</th>
              <th colSpan="2">{bn_text.muslim}</th>
              <th colSpan="2">{bn_text.hindu}</th>
              <th colSpan="2">{bn_text.stipend}</th>
              <th colSpan="2">{bn_text.merit_stipend}</th>
              <th colSpan="2">{bn_text.repeater}</th>
              <th colSpan="2">{bn_text.transfer_in}</th>
              <th colSpan="2">{bn_text.transfer_out}</th>
              <th colSpan="2">{bn_text.final_attendence}</th>
              <th colSpan="2">{bn_text.final_promotion}</th>
            </tr>
            <tr>
              <th>{bn_text.cls}</th>
              <th>{bn_text.dept}</th>
              <th>{bn_text.section}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
              <th>{bn_text.boys}</th>
              <th>{bn_text.girls}</th>
            </tr>
            {studentsData &&
              studentsData.map((clsData, index) => {
                try {
                  // alert(JSON.stringify(clsData.class + "-" + clsData.group));
                  return GenerateCells(clsData, index);
                } catch (err) {
                  alert(err);
                }
              })}
          </tbody>
        </table>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            placeItems: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Button variant="contained" onClick={handleClick}>
            {loading ? "Generating..." : "Generate PDF report"}
          </Button>
        </Box>
      </Container>
    </>
  );
}
