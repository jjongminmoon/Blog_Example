import { useState, useEffect, useMemo } from "react";

export default function ExampleUseMemo() {
  const [count, setCount] = useState(0);
  const [isRed, setIsRed] = useState(true);

  // const background = {
  //   color: isRed ? "빨강" : "파랑",
  // };

  const background = useMemo(() => {
    return {
      color: isRed ? "빨강" : "파랑",
    };
  }, [isRed]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [background]);

  return (
    <section>
      <div>
        <h2>숫자 카운트 (useMemo)</h2>
        <input
          type="number"
          value={count}
          onChange={() => setCount(count + 1)}
        />
      </div>

      <div>
        <h2>배경 색깔 : {background.color}</h2>
        <button onClick={() => setIsRed(!isRed)}>변경</button>
      </div>
    </section>
  );
}
