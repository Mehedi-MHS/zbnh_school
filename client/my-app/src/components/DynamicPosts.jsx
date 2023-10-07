import { useParams } from "react-router-dom";
export default function DynamicPost() {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <h1>Your current post id is: {id}</h1>
    </>
  );
}
