import Text from "./Text";
import Header from "./Header";
import styles from "./body.module.css";
import { useState } from "react";
export default function Body() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={styles.bodyContainer}>
      <Header isLoading={isLoading} />
      <Text isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}
