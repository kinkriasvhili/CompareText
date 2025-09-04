import { useState } from "react";
import styles from "./header.module.css";
export default function Header({ isLoading }) {
  const [languages, setLanguages] = useState(false);
  return (
    <div className={styles.headerCont}>
      <div className={styles.headerLeft}>
        <div className={styles.language}>
          <button
            onClick={() => {
              setLanguages((prev) => !prev);
            }}
            className={styles.languagesButton}
          >
            ქართული{" "}
            <svg
              className={`${styles.chevron} ${languages ? styles.rotate : ""}`}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99996 6.00002L0.756958 1.75702L2.17196 0.343018L4.99996 3.17202L7.82796 0.343018L9.24296 1.75702L4.99996 6.00002Z"
                fill="#51555B"
              />
            </svg>
          </button>
          {languages && (
            <div className={styles.langList}>
              <div className={styles.langListRow}>
                <input className={styles.langCheck} type="checkbox" />
                <span>ქართული</span>
              </div>
              <div className={styles.langListRow}>
                <input className={styles.langCheck} type="checkbox" />
                <span>ქართული</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.format}>
          <input type="checkbox" />
          <span>ფორმატის შენარჩუნება</span>
        </div>
      </div>
      <div className={styles.new}>
        <button className={`${!isLoading && "btnOff"}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8V16"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 12H8"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ახლის გახსნა
        </button>
      </div>
    </div>
  );
}
