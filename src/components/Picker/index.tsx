import { FC } from "react";
import { colors } from "../../consts";
import "./styles.scss";
import { LineIcon } from "../../icons/Line";

type PickerProps = {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Picker: FC<PickerProps> = ({ id, setId, state, setState }) => {
  return (
    <div className="color-picker-container">
      <div className="color-picker-wrapper">
        {colors.slice(0, 2).map((color) => {
          const isUsed = state.includes(color);

          return (
            <button
              key={color}
              className={`color-picker color-picker-${color}`}
              disabled={isUsed}
              onClick={() => {
                setState((prev) => {
                  prev[id] = color;
                  return prev;
                });
                setId(-1);
              }}
            >
              {isUsed && <LineIcon className="color-picker-line" />}
            </button>
          );
        })}
      </div>

      <div className="color-picker-wrapper">
        {colors.slice(2, 4).map((color) => {
          const isUsed = state.includes(color);

          return (
            <button
              key={color}
              className={`color-picker color-picker-${color}`}
              disabled={isUsed}
              onClick={() => {
                setState((prev) => {
                  prev[id] = color;
                  return prev;
                });
                setId(-1);
              }}
            >
              {isUsed && <LineIcon className="color-picker-line" />}
            </button>
          );
        })}
      </div>

      <div className="color-picker-wrapper">
        {colors.slice(4, 6).map((color) => {
          const isUsed = state.includes(color);

          return (
            <button
              key={color}
              className={`color-picker color-picker-${color}`}
              disabled={isUsed}
              onClick={() => {
                setState((prev) => {
                  prev[id] = color;
                  return prev;
                });
                setId(-1);
              }}
            >
              {isUsed && <LineIcon className="color-picker-line" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
