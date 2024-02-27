import { component$ } from "@builder.io/qwik";
import { InlineType } from "~/definition";

import styles from "./inline.module.css";

export default component$<{ inline: InlineType }>(({ inline }) => {
  return (
    <article class={styles.wrapper}>
      <span class={styles.timeline}>{inline.timeline}</span>
      <div>
        <span class={styles.title}>
          {inline.url ? (
            <a href={inline.url} target="_blank" rel="noreferrer">
              {inline.title}
            </a>
          ) : (
            inline.title
          )}
        </span>
        , <span>{inline.subtitle}</span>
      </div>
    </article>
  );
});
