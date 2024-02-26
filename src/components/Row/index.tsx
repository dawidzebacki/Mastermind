import { FC, useEffect, useState } from "react";
import "./styles.scss";
import { Picker } from "../Picker";
import { CrossIcon } from "../../icons/Cross";
import { QuestionIcon } from "../../icons/Question";

type RowProps = {
  id: number;

  activeRow: number;
  colorsSequence: string[];
  setActiveRow: React.Dispatch<React.SetStateAction<number>>;
  setIsGG: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Row: FC<RowProps> = ({
  id,
  colorsSequence,
  activeRow,
  setActiveRow,
  setIsGG,
}) => {
  const [state, setState] = useState(["", "", "", ""]);
  const [hintState, setHintState] = useState(["", "", "", ""]);
  const [showPicker, setShowPicker] = useState(-1);

  const isDisabled = activeRow !== id;

  useEffect(() => {
    setState(["", "", "", ""]);
    setHintState(["", "", "", ""]);
  }, [colorsSequence]);

  const checkAnswers = () => {
    const result: string[] = [];

    for (let i = 0; i < state.length; i++) {
      if (state[i] === colorsSequence[i]) {
        result.push("black");
      } else if (colorsSequence.includes(state[i])) {
        result.push("white");
      } else {
        result.push("");
      }
    }

    const newHintState = result.sort().reverse();

    setHintState(newHintState);
    setActiveRow(id + 1);

    newHintState.every((element) => element === "black") && setIsGG(true);
  };

  return (
    <>
      <div className="game-container">
        <span>{id}</span>

        <div className="color-picker-container">
          {showPicker >= 0 && (
            <Picker
              id={showPicker}
              setId={setShowPicker}
              state={state}
              setState={setState}
            />
          )}
        </div>

        <div className="guess-wrapper">
          {[0, 1, 2, 3].map((element) => {
            const isCross = state[element] !== "";
            const isQuestion = showPicker === element;

            return (
              <button
                key={`${element}-guess`}
                className={`guess guess-${
                  state[element] ? state[element] : "none"
                }`}
                disabled={isDisabled}
                onClick={() => {
                  isCross &&
                    setState((prev) => {
                      const state = prev;
                      state[element] = "";
                      return state;
                    });
                  setShowPicker(element);
                }}
              >
                {isCross && <CrossIcon className="guess-x" />}
                {isQuestion && <QuestionIcon className="guess-question" />}
              </button>
            );
          })}
        </div>
        <div className="answer-container">
          <div className="answer-wrapper">
            {hintState.slice(0, 2).map((element, index) => (
              <div
                key={index}
                className={`answer answer-${element ? element : "none"}`}
              ></div>
            ))}
          </div>
          <div className="answer-wrapper">
            {hintState.slice(2, 4).map((element, index) => (
              <div
                key={index}
                className={`answer answer-${element ? element : "none"}`}
              ></div>
            ))}
          </div>
        </div>

        <button
          disabled={isDisabled || !state.every((element) => element !== "")}
          className={`${
            isDisabled || !state.every((element) => element !== "")
              ? "row-button-disabled"
              : "row-button"
          }`}
          onClick={() => checkAnswers()}
        >
          OK
        </button>
      </div>
    </>
  );
};
