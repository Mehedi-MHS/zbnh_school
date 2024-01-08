import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export default function ReportGeneratorComponent() {
  const bn_text = {
    cls: "শ্রেণী ",
    dept: "বিভাগ ",
    section: "শাখা ",
    boys: "ছাত্র ",
    girls: "ছাত্রী ",
    six: "৬ষ্ঠ ",
    seven: "৭ম ",
    eight: "৮ম ",
    nine: "৯ম ",
    ten: "১০ম ",
    A: "ক ",
    B: "খ ",
    C: "গ ",
    science: " বিজ্ঞান",
    commerce: "ব্যবসায় শিক্ষা ",
    arts: "মানবিক ",
    total: "মোট ",
    muslim: "মুসলিম ",
    hindu: "হিন্দু ",
    stipend: "উপবৃত্তি প্রাপ্ত ",
    merit_stipend: "মেধাবৃত্তি প্রাপ্ত ",
    repeater: "রিপিটার শিক্ষার্থী ",
    transfer_in: " ট্রান্সফার ইন",
    transfer_out: "ট্রান্সফার আউট ",
    final_attendence: "বার্ষিক পরীক্ষায় অংশগ্রহণ ",
    final_promotion: "বার্ষিক পরীক্ষায় প্রমোশন ",
  };

  const GenerateCells = (data) => {
    return (
      <>
        <tr>
          <td rowSpan="3">{bn_text.six}</td>
          <td rowSpan="3">{"-"}</td>
          <td>{bn_text.A}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>{bn_text.B}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>{bn_text.C}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
      </>
    );
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
          {" "}
          Students Report Generator
        </Typography>
        <table>
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
        </table>
      </Container>
    </>
  );
}
