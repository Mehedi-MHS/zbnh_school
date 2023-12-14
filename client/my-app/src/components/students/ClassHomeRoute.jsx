import { useParams } from "react-router-dom";
import Class6 from "./ClassComponents/Class6";
export default function ClassHomeRoute() {
  const { cls } = useParams();
  return (
    <>
      <div>{cls == 6 ? <Class6 /> : "Null"}</div>
    </>
  );
}
