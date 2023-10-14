import Link from "../custom/CustomLink";
import Button from "@mui/material/Button";

export default function DashboardHome() {
  return (
    <>
      <h1> Dashboard Home</h1>
      <Link to="/dashboard/editStudents">
        <Button>Edit Students</Button>
      </Link>
      <Link to="/dashboard/addTeacher">
        <Button>Add a Teacher</Button>
      </Link>
    </>
  );
}
