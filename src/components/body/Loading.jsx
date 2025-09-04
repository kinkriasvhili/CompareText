import { useState, useEffect } from "react";
import styles from "./loading.module.css";

export default function Loading({ setIsLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);

          return 100;
        }
        return prev + step;
      });
    }, interval);
    console.log(progress);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.leftSideCont}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1.00006" width="38" height="38" rx="19" fill="white" />
          <rect
            x="1"
            y="1.00006"
            width="38"
            height="38"
            rx="19"
            stroke="#4571E4"
            stroke-width="2"
          />
          <circle cx="20" cy="20.0001" r="4.5" fill="#4571E4" />
        </svg>
      </div>
      <div className={styles.rightSideCont}>
        <div>
          <span className={styles.loadingTex}>
            Converting... Thank you For your Patience
          </span>
        </div>

        <div className={styles.barContMain}>
          <div>
            <span className={styles.label}>{Math.round(progress)}%</span>
          </div>

          <div className={styles.barContainer}>
            <div className={styles.bar} style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
