import { FC } from "react";
import { colors } from "../../consts";
import "./styles.scss";
import { LineIcon } from "../../icons/Line";

type PickerProps = {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  isMobile: boolean;
};

export const Picker: FC<PickerProps> = ({
  id,
  setId,
  state,
  setState,
  isMobile,
}) => {
  return (
    <div
      className={
        isMobile ? "color-picker-container-mobile" : "color-picker-container"
      }
    >
      {isMobile && (
        <>
          <div
            className={
              isMobile ? "color-picker-wrapper-mobile" : "color-picker-wrapper"
            }
          >
            {colors.map((color) => {
              const isUsed = state.includes(color);

              return (
                <button
                  key={color}
                  className={`color-picker color-picker-${color}`}
                  disabled={isUsed}
                  onClick={() => {
                    if (id === -1) {
                      setState((prev) => {
                        const arr = [...prev];
                        const index = arr.findIndex(
                          (element) => element === ""
                        );
                        arr[index] = color;

                        return arr;
                      });
                      setId(-1);
                    } else {
                      setState((prev) => {
                        const arr = [...prev];
                        arr[id] = color;
                        return arr;
                      });
                      setId(-1);
                    }
                  }}
                >
                  {isUsed && <LineIcon className="color-picker-line" />}
                </button>
              );
            })}
          </div>
        </>
      )}

      {!isMobile && (
        <>
          <div
            className={
              isMobile ? "color-picker-wrapper-mobile" : "color-picker-wrapper"
            }
          >
            {colors.slice(0, 2).map((color) => {
              const isUsed = state.includes(color);

              return (
                <button
                  key={color}
                  className={`color-picker color-picker-${color}`}
                  disabled={isUsed}
                  onClick={() => {
                    if (id === -1) {
                      setState((prev) => {
                        const arr = [...prev];
                        const index = arr.findIndex(
                          (element) => element === ""
                        );
                        arr[index] = color;

                        return arr;
                      });
                      setId(-1);
                    } else {
                      setState((prev) => {
                        const arr = [...prev];
                        arr[id] = color;
                        return arr;
                      });
                      setId(-1);
                    }
                  }}
                >
                  {isUsed && <LineIcon className="color-picker-line" />}
                </button>
              );
            })}
          </div>
          <div
            className={
              isMobile ? "color-picker-wrapper-mobile" : "color-picker-wrapper"
            }
          >
            {colors.slice(2, 4).map((color) => {
              const isUsed = state.includes(color);

              return (
                <button
                  key={color}
                  className={`color-picker color-picker-${color}`}
                  disabled={isUsed}
                  onClick={() => {
                    if (id === -1) {
                      setState((prev) => {
                        const arr = [...prev];
                        const index = arr.findIndex(
                          (element) => element === ""
                        );
                        arr[index] = color;

                        return arr;
                      });
                      setId(-1);
                    } else {
                      setState((prev) => {
                        const arr = [...prev];
                        arr[id] = color;
                        return arr;
                      });
                      setId(-1);
                    }
                  }}
                >
                  {isUsed && <LineIcon className="color-picker-line" />}
                </button>
              );
            })}
          </div>
          <div
            className={
              isMobile ? "color-picker-wrapper-mobile" : "color-picker-wrapper"
            }
          >
            {colors.slice(4, 6).map((color) => {
              const isUsed = state.includes(color);

              return (
                <button
                  key={color}
                  className={`color-picker color-picker-${color}`}
                  disabled={isUsed}
                  onClick={() => {
                    if (id === -1) {
                      setState((prev) => {
                        const arr = [...prev];
                        const index = arr.findIndex(
                          (element) => element === ""
                        );
                        arr[index] = color;

                        return arr;
                      });
                      setId(-1);
                    } else {
                      setState((prev) => {
                        const arr = [...prev];
                        arr[id] = color;
                        return arr;
                      });
                      setId(-1);
                    }
                  }}
                >
                  {isUsed && <LineIcon className="color-picker-line" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
