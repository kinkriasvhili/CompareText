import styles from "./text.module.css";

export default function TextArea({ ref, parts, setDisabled }) {
  const handleInput = (e) => {
    const text = e.currentTarget.innerText.trim();
    if (text !== "") {
      setDisabled(false);
    } else {
      console.log("me");
      setDisabled(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.execCommand("insertLineBreak");
    }
  };

  return (
    <div
      ref={ref}
      className={styles.textareaLike}
      contentEditable
      onKeyDown={handleKeyDown}
      suppressContentEditableWarning
      onInput={handleInput}
      dangerouslySetInnerHTML={
        parts
          ? {
              __html:
                parts
                  .map((p) => {
                    return p.removed
                      ? `<span class="${styles.removed}">${p.value}</span> `
                      : p.added
                      ? `<span class="${styles.added}">${p.value}</span> `
                      : p.value;
                  })
                  .join("") + " ",
            }
          : undefined
      }
    />
  );
}
