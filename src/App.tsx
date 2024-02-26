import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { Row } from "./components/Row";
import { colors } from "./consts";
import ReactPlayer from "react-player";
import useDimensions from "./hooks/useDimensions";

function App() {
  const refWon = useRef<HTMLDivElement | null>(null);
  const refHeader = useRef<HTMLHeadingElement | null>(null);
  const refLose = useRef<HTMLButtonElement | null>(null);

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
    setTimeout(() => {
      refHeader.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  useEffect(() => {
    if (isGG) {
      setActiveRow(0);
      setTimeout(() => {
        refWon.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isGG]);

  useEffect(() => {
    if (activeRow === 7) {
      setTimeout(() => {
        refLose.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [activeRow]);

  const { width } = useDimensions();

  const isMobile = width <= 700;

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
          isMobile={isMobile}
        />
      ))}

      {activeRow === 7 && (
        <>
          <h2>You lost</h2>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing
            width={isMobile ? 320 : 640}
            height={isMobile ? 180 : 360}
          />
          <button ref={refLose} className="lose" onClick={() => oneMore()}>
            One more?
          </button>
        </>
      )}

      {isGG && (
        <div className="won" ref={refWon}>
          <h2>You won!</h2>
          <button onClick={() => oneMore()}>One more?</button>
        </div>
      )}
    </>
  );
}

export default App;
