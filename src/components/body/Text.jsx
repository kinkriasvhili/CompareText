import styles from "./text.module.css";
import { useState, useRef } from "react";
import { diffWordsWithSpace } from "diff";
import TextArea from "./TextArea";
import Loading from "./Loading.jsx";
export default function Text({ isLoading, setIsLoading }) {
  const [parts, setParts] = useState(null);

  const [disabled, setDisabled] = useState(true);
  const [disabled1, setDisabled1] = useState(true);

  const originalRef = useRef(null);
  const changedRef = useRef(null);

  const compare = () => {
    const oText = originalRef.current.innerText;
    const cText = changedRef.current.innerText;

    const result = diffWordsWithSpace(oText, cText);
    setParts(result);
  };

  return (
    <div className={styles.bottomCont}>
      <div className={styles.textContainer}>
        {isLoading ? (
          <Loading setIsLoading={setIsLoading} />
        ) : (
          <>
            <div className={styles.originalText}>
              <TextArea
                setDisabled={setDisabled}
                ref={originalRef}
                parts={parts}
              />
            </div>
            <div className={styles.textSvg}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33337 16L26.6667 16"
                  stroke="#323232"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 21.3347L5.33337 16L10.6667 10.6653"
                  stroke="#323232"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.3307 10.6653L26.6654 16L21.3307 21.3347"
                  stroke="#323232"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={styles.changedText}>
              <TextArea
                setDisabled={setDisabled1}
                ref={changedRef}
                parts={parts}
              />
            </div>
          </>
        )}
      </div>

      <div className={styles.buttonCont}>
        <button
          className={`${styles.compareButton}  ${
            (isLoading || disabled || disabled1) && `btnOff`
          }`}
          disabled={isLoading || disabled || disabled1}
          onClick={() => {
            compare();
            setIsLoading(true);
          }}
        >
          შედარება
        </button>
      </div>
    </div>
  );
}
