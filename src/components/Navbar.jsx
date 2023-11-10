import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/example_useMemo">1. useMemo 예제</Link>
      <Link to="/example_useCallback">2. useCallback 예제</Link>
    </nav>
  );
}
