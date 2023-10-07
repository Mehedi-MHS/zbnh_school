import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <div className="container">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/students">
          <button>Students</button>
        </Link>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
        <Link to="/posts/:id">
          <button>Dynamic Post</button>
          <p>Use props.match.params.id for /posts/:id</p>
        </Link>
      </div>
    </>
  );
}
