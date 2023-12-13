import { useParams } from "react-router-dom";

export default function ClassHomeRoute() {
  const { cls } = useParams();
  return (
    <>
      <h1>Class : {cls}</h1>
    </>
  );
}
