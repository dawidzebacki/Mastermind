import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { Row } from "./components/Row";
import { colors } from "./consts";
import ReactPlayer from "react-player";

function App() {
  const ref = useRef<HTMLDivElement | null>(null);
  const refHeader = useRef<HTMLHeadingElement | null>(null);

  const shuffle = (array: string[]) => {
    const newArr = [...array];
    let m = newArr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [newArr[m], newArr[i]] = [newArr[i], newArr[m]];
    }
    return newArr;
  };

  const [colorsSequence, setColorsSequence] = useState(
    shuffle(colors).slice(0, 4)
  );
  const [activeRow, setActiveRow] = useState(1);
  const [isGG, setIsGG] = useState(false);

  const oneMore = () => {
    setColorsSequence(shuffle(colors).slice(0, 4));
    setActiveRow(1);
    setIsGG(false);
    refHeader.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (isGG) {
      setActiveRow(0);
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isGG]);

  return (
    <>
      <h1 ref={refHeader}>Mastermind</h1>
      {[1, 2, 3, 4, 5, 6].map((element) => (
        <Row
          key={element}
          id={element}
          colorsSequence={colorsSequence}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          setIsGG={setIsGG}
        />
      ))}

      {activeRow === 7 && (
        <>
          <h2>You lost</h2>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing
          />
          <button onClick={() => oneMore()}>One more?</button>
        </>
      )}

      <div className={isGG ? "won-visible" : "won"} ref={ref}>
        <h2>You won!</h2>
        <button onClick={() => oneMore()}>One more?</button>
      </div>
    </>
  );
}

export default App;
