import { Slot, component$ } from "@builder.io/qwik";

import styles from "./section.module.css";

export default component$<{ title: string }>(({ title }) => {
  const [prefix, textTitle] = [title.slice(0, 3), title.slice(3)];
  return (
    <div class={styles.wrapper}>
      <h2 class={styles.title}>
        <span>
          <span class={styles["title-prefix"]}>{prefix}</span>
          {textTitle}
        </span>
        <div class={styles["title-line"]}></div>
      </h2>
      <Slot />
    </div>
  );
});
