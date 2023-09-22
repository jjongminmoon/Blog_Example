import { Route, Routes } from "react-router-dom";
import ExampleUseMemo from "./example/Example_useMemo";

export default function PageNaviagator() {
  return (
    <Routes>
      <Route path="/example_useMemo" element={<ExampleUseMemo />} />
    </Routes>
  );
}
