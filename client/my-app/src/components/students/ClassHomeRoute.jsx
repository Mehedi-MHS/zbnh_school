import { useParams } from "react-router-dom";
import Class6 from "./ClassComponents/Class6";
import Class7 from "./ClassComponents/Class7";
import Class8 from "./ClassComponents/Class8";
import Class9 from "./ClassComponents/Class9";
import Class10 from "./ClassComponents/Class10";
export default function ClassHomeRoute() {
  const { cls } = useParams();
  return (
    <>
      {cls == 6 ? (
        <Class6 />
      ) : cls == 7 ? (
        <Class7 />
      ) : cls == 8 ? (
        <Class8 />
      ) : cls == 9 ? (
        <Class9 />
      ) : cls == 10 ? (
        <Class10 />
      ) : null}
    </>
  );
}
