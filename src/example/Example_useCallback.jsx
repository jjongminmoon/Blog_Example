import { useState, useCallback } from "react";
import Box from "./Box";

export default function ExampleUseMemo() {
  const [size, setSizes] = useState(100);
  const [isRed, setIsRed] = useState(true);

  const changeBoxSizes = () => {
    return {
      backgroundColor: "yellow",
      width: `${size}px`,
      height: `${size}px`,
    };
  };

  // const changeBoxSizes = useCallback(() => {
  //   return {
  //     backgroundColor: "yellow",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // }, [size]);

  return (
    <section>
      <div style={{ background: isRed ? "red" : "blue" }}>
        <input
          type="number"
          value={size}
          onChange={(e) => setSizes(e.target.value)}
        />
        <button onClick={() => setIsRed(!isRed)}>변경</button>
        <Box changeBoxSizes={changeBoxSizes} />
      </div>
    </section>
  );
}
