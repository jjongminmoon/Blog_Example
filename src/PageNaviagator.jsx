import { Route, Routes } from "react-router-dom";
import ExampleUseMemo from "./example/Example_useMemo";
import ExampleUseCallBack from "./example/Example_useCallback";

export default function PageNaviagator() {
  return (
    <Routes>
      <Route path="/example_useMemo" element={<ExampleUseMemo />} />
      <Route path="/example_useCallback" element={<ExampleUseCallBack />} />
    </Routes>
  );
}
